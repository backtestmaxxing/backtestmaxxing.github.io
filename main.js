/* backtestmaxxing — the only two moving parts: the theme switch and the clock. */
(function () {
  var root = document.documentElement;
  var btn = document.getElementById("themeToggle");
  var lbl = btn ? btn.querySelector(".lbl") : null;
  var meta = document.querySelector('meta[name="theme-color"]');
  var TERMINAL = "#0b0f0d";
  var PRINT = "#f4f0e4";

  function paint(theme) {
    root.dataset.theme = theme;
    if (btn) {
      btn.setAttribute("aria-pressed", theme === "print" ? "true" : "false");
      if (lbl) lbl.textContent = "mode: " + theme;
    }
    if (meta) meta.setAttribute("content", theme === "print" ? PRINT : TERMINAL);
  }

  paint(root.dataset.theme === "print" ? "print" : "terminal");

  if (btn) {
    btn.addEventListener("click", function () {
      var next = root.dataset.theme === "print" ? "terminal" : "print";
      try { localStorage.setItem("bm-theme", next); } catch (e) { /* private mode */ }
      paint(next);
    });
  }

  var clock = document.getElementById("clock");
  if (clock) {
    var t0 = Date.now();
    var pad = function (n) { return n < 10 ? "0" + n : "" + n; };
    var tick = function () {
      var s = Math.floor((Date.now() - t0) / 1000);
      clock.textContent =
        pad(Math.floor(s / 3600)) + ":" + pad(Math.floor((s % 3600) / 60)) + ":" + pad(s % 60);
    };
    tick();
    setInterval(tick, 1000);
  }
})();
