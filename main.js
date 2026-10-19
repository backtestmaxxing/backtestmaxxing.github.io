/* backtestmaxxing — the moving parts: the edition switch, the ⌘K index, the clock and the latency print. */
(function () {
  var root = document.documentElement;
  var btn = document.getElementById("themeToggle");
  var lbl = btn ? btn.querySelector(".lbl") : null;
  var meta = document.querySelector('meta[name="theme-color"]');

  function paint(theme) {
    root.dataset.theme = theme;
    if (btn) btn.setAttribute("aria-pressed", theme === "night" ? "true" : "false");
    if (lbl) lbl.textContent = theme === "night" ? "night edition" : "day edition";
    if (meta) meta.setAttribute("content", theme === "night" ? "#34322d" : "#f1efe9");
  }

  function flip() {
    var next = root.dataset.theme === "night" ? "paper" : "night";
    try { localStorage.setItem("bm-theme", next); } catch (e) { /* private mode */ }
    paint(next);
  }

  paint(root.dataset.theme === "paper" ? "paper" : "night");
  if (btn) btn.addEventListener("click", flip);

  var here = location.pathname.replace(/index\.html$/, "");
  document.querySelectorAll(".nav > a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === "/" ? here === "/" : here.indexOf(href) === 0) a.setAttribute("aria-current", "page");
  });

  /* ⌘K index: filter the list, arrows to move, enter to open. */
  var dlg = document.getElementById("cmdk");
  var q = document.getElementById("cmdkQ");
  var items = dlg ? Array.prototype.slice.call(dlg.querySelectorAll("li")) : [];
  var cur = 0;

  function shown() { return items.filter(function (li) { return !li.hidden; }); }
  function mark(i) {
    var list = shown();
    cur = (i + list.length) % list.length;
    items.forEach(function (li) { li.classList.remove("on"); });
    if (list[cur]) { list[cur].classList.add("on"); list[cur].scrollIntoView({ block: "nearest" }); }
  }
  function open() {
    if (!dlg || dlg.open) return;
    q.value = "";
    items.forEach(function (li) { li.hidden = false; });
    dlg.showModal();
    mark(0);
  }

  if (dlg) {
    document.getElementById("cmdkOpen").addEventListener("click", open);
    q.addEventListener("input", function () {
      var s = q.value.trim().toLowerCase();
      items.forEach(function (li) { li.hidden = li.textContent.toLowerCase().indexOf(s) === -1; });
      mark(0);
    });
    dlg.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown") { e.preventDefault(); mark(cur + 1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); mark(cur - 1); }
      else if (e.key === "Enter") {
        var li = shown()[cur];
        if (li) { e.preventDefault(); li.firstElementChild.click(); }
      }
    });
    dlg.addEventListener("click", function (e) {
      if (e.target === dlg) dlg.close();
      if (e.target.closest("[data-act=theme]")) { flip(); dlg.close(); }
    });
  }

  document.addEventListener("keydown", function (e) {
    var typing = /INPUT|TEXTAREA/.test(document.activeElement.tagName);
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); open(); }
    else if (!typing && !e.metaKey && !e.ctrlKey && !e.altKey) {
      if (e.key === "/") { e.preventDefault(); open(); }
      else if (e.key.toLowerCase() === "t") flip();
    }
  });

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

  /* Time from navigation start to the load event, printed wherever the page shows a .lat cell. */
  window.addEventListener("load", function () {
    setTimeout(function () {
      var nav = performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
      var ms = nav && nav.loadEventStart > 0 ? nav.loadEventStart : performance.now();
      document.querySelectorAll(".lat").forEach(function (el) { el.textContent = Math.round(ms) + " ms"; });
    }, 0);
  });
})();
