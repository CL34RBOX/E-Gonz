(function () {
    "use strict";

    if (window.__CORPORATE_AUDIT_HARNESS_ACTIVE__) return;
    window.__CORPORATE_AUDIT_HARNESS_ACTIVE__ = true;

    window.OMNIBUS_CORPORATE_LEDGER = {
        node: "90247_GARDENA",
        modules: [
            "HUITZILOPOCHTLI_TRANSPORT_SENTINEL"
        ],
        compliance: "ETHICAL_AUDIT_MODE",
        timestamp: Date.now(),
        revision: "1.0"
    };

    const TRANSPORT_KEY = (function () {
        if (typeof window.__zone_symbol__fetch === "function") return "__zone_symbol__fetch";
        if (typeof window.fetch === "function") return "fetch";
        return null;
    })();

    if (!TRANSPORT_KEY) return;

    const originalTransport = window[TRANSPORT_KEY];
    if (typeof originalTransport !== "function" || originalTransport.__OMNIBUS_WRAPPED__) return;

    function emitTransportAnomaly(meta) {
        try {
            var evt = new CustomEvent("omnibus:transport-anomaly", { detail: meta });
            window.dispatchEvent(evt);
        } catch (_) {}
    }

    function classifyStatus(status) {
        if (status >= 200 && status < 300) return "ok";
        if (status >= 300 && status < 400) return "redirect";
        if (status === 0) return "opaque_or_aborted";
        if (status >= 400 && status < 500) return "client_error";
        if (status >= 500 && status < 600) return "server_error";
        return "unknown";
    }

    function logTransportAnomaly(meta) {
        console.log("[OMNIBUS TRANSPORT]", meta);
    }

    async function omnibusFetchWrapper(input, init) {
        var urlString = (input instanceof Request) ? input.url : String(input);
        var mode = init && init.mode;
        var credentials = init && init.credentials;

        try {
            var response = await originalTransport.call(this, input, init);
            var statusClass = classifyStatus(response.status);

            if (statusClass === "client_error" ||
                statusClass === "server_error" ||
                statusClass === "opaque_or_aborted") {

                var meta = {
                    url: urlString,
                    status: response.status,
                    statusText: response.statusText,
                    phase: "response",
                    mode: mode,
                    credentials: credentials,
                    redirected: response.redirected,
                    timestamp: Date.now()
                };
                logTransportAnomaly(meta);
                emitTransportAnomaly(meta);
            }

            return response;
        } catch (err) {
            var metaThrow = {
                url: urlString,
                status: "N/A",
                statusText: "",
                phase: "throw",
                errorName: err && err.name,
                errorMessage: err && err.message,
                mode: mode,
                credentials: credentials,
                redirected: false,
                timestamp: Date.now()
            };
            logTransportAnomaly(metaThrow);
            emitTransportAnomaly(metaThrow);
            throw err;
        }
    }

    Object.defineProperty(omnibusFetchWrapper, "__OMNIBUS_WRAPPED__", {
        value: true
    });

    try {
        window[TRANSPORT_KEY] = omnibusFetchWrapper;
    } catch (e) {
        window[TRANSPORT_KEY] = originalTransport;
    }

    document.addEventListener("securitypolicyviolation", function (event) {
        console.log("[OMNIBUS CSP]", {
            blockedURI: event.blockedURI,
            directive: event.violatedDirective,
            timestamp: Date.now()
        });
    });
})();
