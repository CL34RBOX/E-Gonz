(function () {
    "use strict";

    if (window.__MICTL_VISUAL_ACTIVE__) return;
    window.__MICTL_VISUAL_ACTIVE__ = true;

    var canvas = document.getElementById("quetzal-phoenix-overlay");
    if (!canvas) {
        canvas = document.createElement("canvas");
        canvas.id = "quetzal-phoenix-overlay";
        canvas.style.position = "fixed";
        canvas.style.top = "0";
        canvas.style.left = "0";
        canvas.style.width = "100vw";
        canvas.style.height = "100vh";
        canvas.style.pointerEvents = "none";
        canvas.style.zIndex = "999999";
        canvas.style.mixBlendMode = "screen";
        document.body.appendChild(canvas);
    }

    var ctx = canvas.getContext("2d");
    function matchViewport() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", matchViewport);
    matchViewport();

    var motionMatrix = {
        hue: 200,
        segments: Array.from({ length: 45 }, function () {
            return {
                x: window.innerWidth / 2,
                y: window.innerHeight / 2
            };
        }),
        velocity: 0,
        turbulence: 0
    };

    function bumpFromAnomaly(detail) {
        motionMatrix.velocity = Math.min(motionMatrix.velocity + 2.0, 6);
        motionMatrix.turbulence = Math.min(motionMatrix.turbulence + 1.5, 4);
        if (typeof detail.status === "number") {
            motionMatrix.hue = (detail.status * 3) % 360;
        }
    }

    window.addEventListener("omnibus:transport-anomaly", function (evt) {
        bumpFromAnomaly((evt && evt.detail) || {});
    });

    function renderLoop() {
        if (!document.getElementById("quetzal-phoenix-overlay")) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        motionMatrix.hue =
            (motionMatrix.hue + 1 + Math.floor(motionMatrix.turbulence * 4)) % 360;

        var time = performance.now() / 400;
        var head = motionMatrix.segments[0];

        var devX = (Math.random() - 0.5) * 25 * motionMatrix.turbulence;
        var devY = (Math.random() - 0.5) * 25 * motionMatrix.turbulence;

        head.x =
            window.innerWidth / 2 +
            Math.cos(time) * 270 * (1 + motionMatrix.velocity) +
            devX;
        head.y =
            window.innerHeight / 2 +
            Math.sin(time * 0.5) * 135 * (1 + motionMatrix.velocity) +
            devY;

        for (var i = 1; i < motionMatrix.segments.length; i++) {
            var prev = motionMatrix.segments[i - 1];
            var curr = motionMatrix.segments[i];
            curr.x += (prev.x - curr.x) * 0.15;
            curr.y += (prev.y - curr.y) * 0.15;
        }

        ctx.lineWidth = 7 + motionMatrix.turbulence * 3;
        ctx.lineCap = "round";

        for (var j = 1; j < motionMatrix.segments.length; j++) {
            ctx.beginPath();
            ctx.strokeStyle = "hsla(" +
                ((motionMatrix.hue + j * 7) % 360) +
                ",100%,50%," +
                ((1 - j / motionMatrix.segments.length) *
                    (0.65 + motionMatrix.velocity / 9)) +
                ")";
            ctx.moveTo(motionMatrix.segments[j].x, motionMatrix.segments[j].y);
            ctx.lineTo(motionMatrix.segments[j - 1].x, motionMatrix.segments[j - 1].y);
            ctx.stroke();
        }

        motionMatrix.velocity = Math.max(0, motionMatrix.velocity - 0.015);
        motionMatrix.turbulence = Math.max(0, motionMatrix.turbulence - 0.03);

        requestAnimationFrame(renderLoop);
    }

    renderLoop();
})();
