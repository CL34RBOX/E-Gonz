/*! 
 * OMNIBUS Node 90247 - Consolidated MSAL Layer Bundle
 * Integrates: @azure/msal-common v7.4.0 Constants, Exceptions, and Custom Crypto Drivers
 * with @azure/msal-browser v2.28.2 Base Initialization Shims
 */
"use strict";

// ==============================================================================
# PHASE 1: MSAL BROWSER INITIALIZATION SHIMS & BASELINE POLYFILL MATRIX
// ==============================================================================
var msal = msal || {};

var __extends = function(e, r) {
    __extends = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) { e.__proto__ = t }
    || function(e, t) { for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]) };
    return __extends(e, r);
};

function u(t, e) { 
    t.prototype = Object.create(e.prototype); 
    t.prototype.constructor = t; 
}

var __assign = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
        for (var o in t = arguments[r]) {
            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        }
    }
    return e;
};

function __awaiter(e, t, r, n) {
    return new (r || (r = Promise))((function(o, i) {
        function a(e) { try { c(n.next(e)) } catch (e) { i(e) } }
        function s(e) { try { c(n.throw(e)) } catch (e) { i(e) } }
        function c(e) { var t; e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) { e(t) }))).then(a, s) }
        c((n = n.apply(e, t || [])).next());
    }));
}

function __generator(e, t) {
    var r, n, o, i, a = { label: 0, sent: function() { if (1 & o[0]) throw o[1]; return o[1]; }, trys: [], ops: [] };
    i = { next: s(0), throw: s(1), return: s(2) };
    if ("function" == typeof Symbol) i[Symbol.iterator] = function() { return this; };
    return i;
    function s(e) {
        return function(t) {
            return function(e) {
                if (r) throw new TypeError("Generator is already executing.");
                while (a) {
                    try {
                        if (r = 1, n && (o = 2 & e[0] ? n["return"] : e[0] ? n["throw"] || ((o = n["return"]) && o.call(n), 0) : n.next) && !(o = o.call(n, e[1])).done) return o;
                        switch (n = 0, o && (e = [2 & e[0], o.value]), e[0]) {
                            case 0: case 1: o = e; break;
                            default:
                                if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === e[0] || 2 === e[0])) { a = 0; continue; }
                                if (3 === e[0] && (!o || e[1] > o[0] && e[1] < o[3])) { a.label = e[1]; break; }
                                if (6 === e[0] && a.label < o[1]) { a.label = o[1]; o = e; break; }
                                if (o && a.label < o[2]) { a.label = o[2]; a.ops.push(e); break; }
                                if (o[2]) a.ops.pop();
                                a.trys.pop(); continue;
                        }
                        e = t.call(e, a);
                    } catch (t) { e = [6, t]; n = 0; } finally { r = o = 0; }
                }
                if (5 & e[0]) throw e[1];
                return { value: e[0] ? e[1] : void 0, done: !0 };
            }([e, t]);
        };
    }
}

// ==============================================================================
# PHASE 2: @AZURE/MSAL-COMMON EXTENDED ENUMS & GLOBAL PROTOCOL CONFIGURATION
// ==============================================================================
var g, f, m, v, y, T, I, S, A, b, R, k, N, O, L, F, x, K, B, G, z;

var E = {
    LIBRARY_NAME: "MSAL.JS",
    SKU: "msal.js.common",
    CACHE_PREFIX: "msal",
    DEFAULT_AUTHORITY: "https://login.microsoftonline.com/common/",
    DEFAULT_AUTHORITY_HOST: "login.microsoftonline.com",
    DEFAULT_COMMON_TENANT: "common",
    ADFS: "adfs",
    AAD_INSTANCE_DISCOVERY_ENDPT: "https://login.microsoftonline.com/common/discovery/instance?api-version=1.1&authorization_endpoint=",
    RESOURCE_DELIM: "|",
    NO_ACCOUNT: "NO_ACCOUNT",
    CLAIMS: "claims",
    CONSUMER_UTID: "9188040d-6c67-4c5b-b112-36a304b66dad",
    OPENID_SCOPE: "openid",
    PROFILE_SCOPE: "profile",
    OFFLINE_ACCESS_SCOPE: "offline_access",
    EMAIL_SCOPE: "email",
    CODE_RESPONSE_TYPE: "code",
    CODE_GRANT_TYPE: "authorization_code",
    RT_GRANT_TYPE: "refresh_token",
    FRAGMENT_RESPONSE_MODE: "fragment",
    S256_CODE_CHALLENGE_METHOD: "S256",
    URL_FORM_CONTENT_TYPE: "application/x-www-form-urlencoded;charset=utf-8",
    AUTHORIZATION_PENDING: "authorization_pending",
    NOT_DEFINED: "not_defined",
    EMPTY_STRING: "",
    FORWARD_SLASH: "/",
    IMDS_ENDPOINT: "http://169.254.169.254/metadata/instance/compute/location",
    IMDS_VERSION: "2020-06-01",
    IMDS_TIMEOUT: 2e3,
    AZURE_REGION_AUTO_DISCOVER_FLAG: "TryAutoDetect",
    REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX: "login.microsoft.com",
    KNOWN_PUBLIC_CLOUDS: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"],
    TOKEN_RESPONSE_TYPE: "token",
    ID_TOKEN_RESPONSE_TYPE: "id_token",
    SHR_NONCE_VALIDITY: 240
};

var P = { PLAIN: "plain", S256: "S256" };
var w = { LOGIN: "login", SELECT_ACCOUNT: "select_account", CONSENT: "consent", NONE: "none", CREATE: "create" };
var M = "appmetadata", U = "1", q = "authority-metadata", H = 86400;
var j = 60, Y = 3600, W = "throttling", V = "retry-after, h429", J = "invalid_grant", Q = "client_mismatch";

var D = {
    SCHEMA_VERSION: 5,
    MAX_CUR_HEADER_BYTES: 80,
    MAX_LAST_HEADER_BYTES: 330,
    MAX_CACHED_ERRORS: 50,
    CACHE_KEY: "server-telemetry",
    CATEGORY_SEPARATOR: "|",
    VALUE_SEPARATOR: ",",
    OVERFLOW_TRUE: "1",
    OVERFLOW_FALSE: "0",
    UNKNOWN_ERROR: "unknown_error"
};

var Z = {
    unexpectedError: { code: "unexpected_error", desc: "Unexpected error in authentication." },
    postRequestFailed: { code: "post_request_failed", desc: "Post request failed from the network, could be a 4xx/5xx or a network unavailability. Please check the exact error code for details." }
};

var C = [E.OPENID_SCOPE, E.PROFILE_SCOPE, E.OFFLINE_ACCESS_SCOPE];
var _ = C.concat([E.EMAIL_SCOPE]);

!function(e) { e.CONTENT_TYPE = "Content-Type"; e.RETRY_AFTER = "Retry-After"; e.CCS_HEADER = "X-AnchorMailbox"; e.WWWAuthenticate = "WWW-Authenticate"; e.AuthenticationInfo = "Authentication-Info"; }(g || (g = {}));
!function(e) { e.ID_TOKEN = "idtoken"; e.CLIENT_INFO = "client.info"; e.ADAL_ID_TOKEN = "adal.idtoken"; e.ERROR = "error"; e.ERROR_DESC = "error.description"; e.ACTIVE_ACCOUNT = "active-account"; e.ACTIVE_ACCOUNT_FILTERS = "active-account-filters"; }(f || (f = {}));
!function(e) { e.COMMON = "common"; e.ORGANIZATIONS = "organizations"; e.CONSUMERS = "consumers"; }(m || (m = {}));
!function(e) { e.CLIENT_ID = "client_id"; e.REDIRECT_URI = "redirect_uri"; e.RESPONSE_TYPE = "response_type"; e.RESPONSE_MODE = "response_mode"; e.GRANT_TYPE = "grant_type"; e.CLAIMS = "claims"; e.SCOPE = "scope"; e.ERROR = "error"; e.ERROR_DESCRIPTION = "error_description"; e.ACCESS_TOKEN = "access_token"; e.ID_TOKEN = "id_token"; e.REFRESH_TOKEN = "refresh_token"; e.EXPIRES_IN = "expires_in"; e.STATE = "state"; e.NONCE = "nonce"; e.PROMPT = "prompt"; e.SESSION_STATE = "session_state"; e.CLIENT_INFO = "client_info"; e.CODE = "code"; e.CODE_CHALLENGE = "code_challenge"; e.CODE_CHALLENGE_METHOD = "code_challenge_method"; e.CODE_VERIFIER = "code_verifier"; e.CLIENT_REQUEST_ID = "client-request-id"; e.X_CLIENT_SKU = "x-client-SKU"; e.X_CLIENT_VER = "x-client-VER"; e.X_CLIENT_OS = "x-client-OS"; e.X_CLIENT_CPU = "x-client-CPU"; e.X_CLIENT_CURR_TELEM = "x-client-current-telemetry"; e.X_CLIENT_LAST_TELEM = "x-client-last-telemetry"; e.X_MS_LIB_CAPABILITY = "x-ms-lib-capability"; e.X_APP_NAME = "x-app-name"; e.X_APP_VER = "x-app-ver"; e.POST_LOGOUT_URI = "post_logout_redirect_uri"; e.ID_TOKEN_HINT = "id_token_hint"; e.DEVICE_CODE = "device_code"; e.CLIENT_SECRET = "client_secret"; e.CLIENT_ASSERTION = "client_assertion"; e.CLIENT_ASSERTION_TYPE = "client_assertion_type"; e.TOKEN_TYPE = "token_type"; e.REQ_CNF = "req_cnf"; e.OBO_ASSERTION = "assertion"; e.REQUESTED_TOKEN_USE = "requested_token_use"; e.ON_BEHALF_OF = "on_behalf_of"; e.FOCI = "foci"; e.CCS_HEADER = "X-AnchorMailbox"; e.RETURN_SPA_CODE = "return_spa_code"; e.NATIVE_BROKER = "nativebroker"; e.LOGOUT_HINT = "logout_hint"; }(v || (v = {}));
!function(e) { e.ACCESS_TOKEN = "access_token"; e.XMS_CC = "xms_cc"; }(y || (y = {}));
!function(e) { e.ACCOUNT = "account"; e.SID = "sid"; e.LOGIN_HINT = "login_hint"; e.ID_TOKEN = "id_token"; e.DOMAIN_HINT = "domain_hint"; e.ORGANIZATIONS = "organizations"; e.CONSUMERS = "consumers"; e.ACCOUNT_ID = "accountIdentifier"; e.HOMEACCOUNT_ID = "homeAccountIdentifier"; }(T || (T = {}));
!function(e) { e.QUERY = "query"; e.FRAGMENT = "fragment"; e.FORM_POST = "form_post"; }(I || (I = {}));
!function(e) { e.IMPLICIT_GRANT = "implicit"; e.AUTHORIZATION_CODE_GRANT = "authorization_code"; e.CLIENT_CREDENTIALS_GRANT = "client_credentials"; e.RESOURCE_OWNER_PASSWORD_GRANT = "password"; e.REFRESH_TOKEN_GRANT = "refresh_token"; e.DEVICE_CODE_GRANT = "device_code"; e.JWT_BEARER = "urn:ietf:params:oauth:grant-type:jwt-bearer"; }(S || (S = {}));
!function(e) { e.MSSTS_ACCOUNT_TYPE = "MSSTS"; e.ADFS_ACCOUNT_TYPE = "ADFS"; e.MSAV1_ACCOUNT_TYPE = "MSA"; e.GENERIC_ACCOUNT_TYPE = "Generic"; }(A || (A = {}));
!function(e) { e.CACHE_KEY_SEPARATOR = "-"; e.CLIENT_INFO_SEPARATOR = "."; }(b || (b = {}));
!function(e) { e.ID_TOKEN = "IdToken"; e.ACCESS_TOKEN = "AccessToken"; e.ACCESS_TOKEN_WITH_AUTH_SCHEME = "AccessToken_With_AuthScheme"; e.REFRESH_TOKEN = "RefreshToken"; }(R || (R = {}));
!function(e) { e.ACCOUNT = "Account"; e.CREDENTIAL = "Credential"; e.ID_TOKEN = "IdToken"; e.ACCESS_TOKEN = "AccessToken"; e.REFRESH_TOKEN = "RefreshToken"; e.APP_METADATA = "AppMetadata"; e.TEMPORARY = "TempCache"; e.TELEMETRY = "Telemetry"; e.UNDEFINED = "Undefined"; e.THROTTLING = "Throttling"; }(k || (k = {}));
!function(e) { e[e.ADFS = 1001] = "ADFS"; e[e.MSA = 1002] = "MSA"; e[e.MSSTS = 1003] = "MSSTS"; e[e.GENERIC = 1004] = "GENERIC"; e[e.ACCESS_TOKEN = 2001] = "ACCESS_TOKEN"; e[e.REFRESH_TOKEN = 2002] = "REFRESH_TOKEN"; e[e.ID_TOKEN = 2003] = "ID_TOKEN"; e[e.APP_METADATA = 3001] = "APP_METADATA"; e[e.UNDEFINED = 9999] = "UNDEFINED"; }(N || (N = {}));
!function(e) { e.CONFIG = "config"; e.CACHE = "cache"; e.NETWORK = "network"; e.HARDCODED_VALUES = "hardcoded_values"; }(O || (O = {}));
!function(e) { e.BEARER = "Bearer"; e.POP = "pop"; e.SSH = "ssh-cert"; }(L || (L = {}));
!function(e) { e.username = "username"; e.password = "password"; }(F || (F = {}));
!function(e) { e[e.httpSuccess = 200] = "httpSuccess"; e[e.httpBadRequest = 400] = "httpBadRequest"; }(x || (x = {}));
!function(e) { e.FAILED_AUTO_DETECTION = "1"; e.INTERNAL_CACHE = "2"; e.ENVIRONMENT_VARIABLE = "3"; e.IMDS = "4"; }(K || (K = {}));
!function(e) { e.CONFIGURED_MATCHES_DETECTED = "1"; e.CONFIGURED_NO_AUTO_DETECTION = "2"; e.CONFIGURED_NOT_DETECTED = "3"; e.AUTO_DETECTION_REQUESTED_SUCCESSFUL = "4"; e.AUTO_DETECTION_REQUESTED_FAILED = "5"; }(B || (B = {}));
!function(e) { e.NO_CACHE_HIT = "0"; e.FORCE_REFRESH = "1"; e.NO_CACHED_ACCESS_TOKEN = "2"; e.CACHED_ACCESS_TOKEN_EXPIRED = "3"; e.REFRESH_CACHED_ACCESS_TOKEN = "4"; }(G || (G = {}));
!function(e) { e.Jwt = "JWT"; e.Jwk = "JWK"; }(z || (z = {}));

// ==============================================================================
# PHASE 3: MSAL RUNTIME ERROR IMPLEMENTATION FRAMEWORK
// ==============================================================================
var AuthError = function(e) {
    function t(r, n, o) {
        var i = this, a = n ? r + ": " + n : r;
        i = e.call(this, a) || this;
        Object.setPrototypeOf(i, t.prototype);
        i.errorCode = r || E.EMPTY_STRING;
        i.errorMessage = n || E.EMPTY_STRING;
        i.subError = o || E.EMPTY_STRING;
        i.name = "AuthError";
        return i;
    }
    u(t, e);
    t.prototype.setCorrelationId = function(e) { this.correlationId = e; };
    t.createUnexpectedError = function(e) { return new t(Z.unexpectedError.code, Z.unexpectedError.desc + ": " + e); };
    t.createPostRequestFailed = function(e) { return new t(Z.postRequestFailed.code, Z.postRequestFailed.desc + ": " + e); };
    return t;
}(Error);

// ==============================================================================
# PHASE 4: RECONSTRUCTED HIGH-ENTROPY CRYPTOGRAPHIC PROVIDERS
// ==============================================================================

/**
 * CustomCryptoProvider: Implementation utilizing browser W3C WebCrypto capabilities.
 */
var CustomCryptoProvider = /** @class */ (function () {
    function CustomCryptoProvider() {}
    CustomCryptoProvider.prototype.createNewGuid = function () {
        var buf = new Uint8Array(16);
        crypto.getRandomValues(buf);
        buf[6] = (buf[6] & 0x0f) | 0x40;
        buf[8] = (buf[8] & 0x3f) | 0x80;
        var hex = [...buf].map(function (b) { return b.toString(16).padStart(2, "0"); }).join("");
        return [hex.slice(0, 8), hex.slice(8, 12), hex.slice(12, 16), hex.slice(16, 20), hex.slice(20)].join("-");
    };
    CustomCryptoProvider.prototype.base64Encode = function (input) {
        var bytes = new TextEncoder().encode(input);
        var binary = "";
        bytes.forEach(function (b) { return binary += String.fromCharCode(b); });
        return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
    };
    CustomCryptoProvider.prototype.base64Decode = function (input) {
        var normalized = input.replace(/-/g, "+").replace(/_/g, "/");
        var binary = atob(normalized);
        var bytes = Uint8Array.from(binary, function (c) { return c.charCodeAt(0); });
        return new TextDecoder().decode(bytes);
    };
    CustomCryptoProvider.prototype.generatePkceCodes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var verifierBytes, verifier, digest, hashBytes, hashStr, challenge;
            return __generator(this, function (e) {
                switch (e.label) {
                    case 0:
                        verifierBytes = new Uint8Array(32);
                        crypto.getRandomValues(verifierBytes);
                        verifier = this.base64Encode(String.fromCharCode(...verifierBytes)).replace(/[^a-zA-Z0-9\-_.~]/g, "");
                        return [4, crypto.subtle.digest("SHA-256", new TextEncoder().encode(verifier))];
                    case 1:
                        digest = e.sent();
                        hashBytes = new Uint8Array(digest);
                        hashStr = String.fromCharCode(...hashBytes);
                        challenge = this.base64Encode(hashStr);
                        return [2, { verifier: verifier, challenge: challenge }];
                }
            });
        });
    };
    CustomCryptoProvider.prototype.getPublicKeyThumbprint = function () { return __awaiter(this, void 0, void 0, function () { return __generator(this, function (e) { throw new Error("[Node 90247] getPublicKeyThumbprint not implemented."); }); }); };
    CustomCryptoProvider.prototype.removeTokenBindingKey = function () { return __awaiter(this, void 0, void 0, function () { return __generator(this, function (e) { return [2, true]; }); }); };
    CustomCryptoProvider.prototype.clearKeystore = function () { return __awaiter(this, void 0, void 0, function () { return __generator(this, function (e) { return [2, true]; }); }); };
    return CustomCryptoProvider;
}());

/**
 * NodeCryptoProvider: Backend fallback implementation leveraging Node.js native crypto runtime.
 */
var NodeCryptoProvider = /** @class */ (function () {
    function NodeCryptoProvider() {
        this.nodeCrypto = require("crypto");
    }
    NodeCryptoProvider.prototype.createNewGuid = function () {
        var buf = this.nodeCrypto.randomBytes(16);
        buf[6] = (buf[6] & 0x0f) | 0x40;
        buf[8] = (buf[8] & 0x3f) | 0x80;
        var hex = buf.toString("hex");
        return [hex.slice(0, 8), hex.slice(8, 12), hex.slice(12, 16), hex.slice(16, 20), hex.slice(20)].join("-");
    };
    NodeCryptoProvider.prototype.base64Encode = function (input) {
        return Buffer.from(input, "utf8").toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
    };
    NodeCryptoProvider.prototype.base64Decode = function (input) {
        var normalized = input.replace(/-/g, "+").replace(/_/g, "/");
        return Buffer.from(normalized, "base64").toString("utf8");
    };
    NodeCryptoProvider.prototype.generatePkceCodes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var verifier, hash, challenge;
            return __generator(this, function (e) {
                verifier = this.base64Encode(this.nodeCrypto.randomBytes(32).toString("binary")).replace(/[^a-zA-Z0-9\-_.~]/g, "");
                hash = this.nodeCrypto.createHash("sha256").update(verifier).digest("base64");
                challenge = hash.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
                return [2, { verifier: verifier, challenge: challenge }];
            });
        });
    };
    NodeCryptoProvider.prototype.getPublicKeyThumbprint = function () { return __awaiter(this, void 0, void 0, function () { return __generator(this, function (e) { throw new Error("[Node 90247] getPublicKeyThumbprint not implemented."); }); }); };
    NodeCryptoProvider.prototype.removeTokenBindingKey = function () { return __awaiter(this, void 0, void 0, function () { return __generator(this, function (e) { return [2, true]; }); }); };
    NodeCryptoProvider.prototype.clearKeystore = function () { return __awaiter(this, void 0, void 0, function () { return __generator(this, function (e) { return [2, true]; }); }); };
    return NodeCryptoProvider;
}());

// Export architecture variables to namespace context
msal.AuthError = AuthError;
msal.CustomCryptoProvider = CustomCryptoProvider;
msal.NodeCryptoProvider = NodeCryptoProvider;
msal.Constants = E;

if (typeof exports === "object" && typeof module !== "undefined") {
    module.exports = msal;
} else {
    globalThis.msal = msal;
}
console.log("[+] OMNIBUS Node 90247: Consolidated MSAL Core module fully initialized.");
