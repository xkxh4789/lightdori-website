/**
 * LightDori site: the three things a visitor can play with on the home page.
 *   1. Blocking: a small stage; pick a cue and the performers walk to where they stand at it,
 *      the follow spots staying on whoever they picked up (the plan is the demo show's own).
 *   2. Colour: pick a gel and dim the lamp; the light is LEE's measured colour at 100 / 50 / 30 %
 *      power, mixed the way the app's Color library mixes it (gelLight.js).
 *   3. Screenshots open full size in a dialog.
 * Motion: performers tween in JS (it has to retarget when cues are clicked quickly and carry the
 * spot beams with them); everything else is a CSS transition. Reduced motion jumps instead.
 */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  var isStatic = document.documentElement.classList.contains("is-static");
  var SVG = "http://www.w3.org/2000/svg";
  function lang() { return document.documentElement.getAttribute("data-lang") === "ko" ? "ko" : "en"; }
  function el(name, attrs, parent) {
    var node = document.createElementNS(SVG, name);
    for (var key in attrs) node.setAttribute(key, attrs[key]);
    if (parent) parent.appendChild(node);
    return node;
  }
  // cubic-bezier(x1, y1, x2, y2) as a function of time (Newton on x, clamped)
  function bezier(x1, y1, x2, y2) {
    return function (t) {
      var u = t;
      for (var i = 0; i < 8; i++) {
        var x = 3 * (1 - u) * (1 - u) * u * x1 + 3 * (1 - u) * u * u * x2 + u * u * u - t;
        var dx = 3 * (1 - u) * (1 - u) * x1 + 6 * (1 - u) * u * (x2 - x1) + 3 * u * u * (1 - x2);
        if (Math.abs(dx) < 1e-6) break;
        u = Math.max(0, Math.min(1, u - x / dx));
      }
      return 3 * (1 - u) * (1 - u) * u * y1 + 3 * (1 - u) * u * u * y2 + u * u * u;
    };
  }
  var easeInOut = bezier(0.77, 0, 0.175, 1); // the site's --ease-in-out: things moving on screen

  /* ───────────── 1. blocking ───────────── */
  (function stageDemo() {
    var root = document.getElementById("stage-demo");
    if (!root) return;
    var svg = root.querySelector("svg"), list = root.querySelector(".stagedemo__cues"), caption = root.querySelector(".stagedemo__now");
    var MOVE_MS = 650, HOLD_MS = 2300;
    var ACTORS = [
      { id: "romeo", color: "#2563eb", en: "R", ko: "로" }, { id: "juliet", color: "#db2777", en: "J", ko: "줄" },
      { id: "capulet", color: "#15803d", en: "C", ko: "캐" }, { id: "tybalt", color: "#dc2626", en: "T", ko: "티" },
      { id: "nurse", color: "#b45309", en: "N", ko: "유" }, { id: "benvolio", color: "#0891b2", en: "B", ko: "벤" },
    ];
    var SPOTS = [{ id: "sp1", color: "#8e4ec6", pos: [-4, -1.9], en: "Spot 1", ko: "스팟 1" }, { id: "sp2", color: "#d97706", pos: [4, -1.9], en: "Spot 2", ko: "스팟 2" }];
    var START = { romeo: [-6.6, 1.6], benvolio: [-6.6, 2.6], juliet: [3.2, 5.6], nurse: [4.6, 6.2], capulet: [0, 6], tybalt: [-2.2, 6.2] };
    var TYPE = { lx: "#e5484d", sq: "#d97706", fs: "#8e4ec6" };
    // moves: [actor, to, via?]; follow: {spot: actor | ""}
    var STEPS = [
      { tags: [], en: ["Start", "Before the first cue"], ko: ["시작", "첫 큐 전"], moves: [] },
      { tags: [["lx", "Q1"], ["sq", "SQ1"]], en: "Music. Masked guests dance on.", ko: "음악. 가면을 쓴 손님들이 들어온다.", moves: [["romeo", [-3.4, 2.2], [-5.2, 1.4]], ["benvolio", [-4.4, 3]]] },
      { tags: [["lx", "Q2"]], en: "Welcome, gentlemen!", ko: "어서들 오시오, 여러분!", moves: [["capulet", [0, 3.6]], ["juliet", [2.6, 4.6]]] },
      { tags: [["fs", "FS1"]], en: "What lady's that?", ko: "저 아가씨는 누구지?", moves: [["romeo", [-2.2, 3]]], follow: { sp1: "romeo" } },
      { tags: [["lx", "Q4"]], en: "This should be a Montague.", ko: "이 목소리는 몬태규 놈이다.", moves: [["tybalt", [-3.6, 4.6], [-3.4, 5.8]]] },
      { tags: [["lx", "Q5"]], en: "Content thee, gentle coz.", ko: "그만둬라, 조카.", moves: [["capulet", [-2.4, 4.4]], ["tybalt", [-6.8, 6], [-5, 5.4]]] },
      { tags: [["fs", "FS2"]], en: "If I profane with my hand", ko: "내 천한 손이 이 사당을", moves: [["romeo", [0.2, 2.8], [-1.2, 2.2]], ["juliet", [1.4, 3]]], follow: { sp1: "romeo", sp2: "juliet" } },
      { tags: [["lx", "Q6"]], en: "Then move not.", ko: "그럼 가만히 계세요.", moves: [["romeo", [0.8, 2.6]], ["juliet", [1.25, 2.5]], ["capulet", [-1, 5.6]]] },
      { tags: [["sq", "SQ2"], ["lx", "Q7"]], en: "Madam, your mother calls.", ko: "아가씨, 어머님께서 부르세요.", moves: [["nurse", [2.6, 3.4], [4, 4.8]], ["juliet", [3.4, 4]]] },
      { tags: [["lx", "Q8"]], en: "Is she a Capulet?", ko: "캐퓰릿 집안이라고?", moves: [["romeo", [-1.2, 2.2]], ["benvolio", [-2.2, 2.8]]] },
      { tags: [["fs", "FS3"]], en: "Away, be gone.", ko: "가자, 이제 그만 가자.", moves: [["romeo", [-6.6, 1.6], [-4, 1.4]], ["benvolio", [-6.6, 2.6]]], follow: { sp1: "" } },
      { tags: [["lx", "Q9"]], en: "My only love, my only hate!", ko: "내 유일한 사랑이 미움에서!", moves: [["juliet", [0, 1.8], [2, 2.4]], ["nurse", [3.2, 5.4]], ["capulet", [0, 6.4]]] },
    ];
    // where everyone stands, and whom each spot holds, after every step
    var at = [], held = [], pos = {}, hold = { sp1: "", sp2: "" };
    for (var id in START) pos[id] = START[id];
    STEPS.forEach(function (step) {
      step.moves.forEach(function (m) { pos[m[0]] = m[1]; });
      for (var s in step.follow || {}) hold[s] = step.follow[s];
      at.push(Object.assign({}, pos));
      held.push(Object.assign({}, hold));
    });

    // metres → the drawing: x as it is, y up the stage becomes y down the page
    var P = function (p) { return [p[0], 8 - p[1]]; };
    svg.setAttribute("viewBox", "-7.8 -0.5 15.6 11.2");
    el("rect", { x: -7.8, y: 0, width: 2.3, height: 8, class: "sd-wing" }, svg);
    el("rect", { x: 5.5, y: 0, width: 2.3, height: 8, class: "sd-wing" }, svg);
    [[-1.83, 0, -1.83, 8], [1.83, 0, 1.83, 8], [-5.5, 2.67, 5.5, 2.67], [-5.5, 5.33, 5.5, 5.33]].forEach(function (l) {
      el("line", { x1: l[0], y1: l[1], x2: l[2], y2: l[3], class: "sd-grid" }, svg);
    });
    el("path", { d: "M-5.5 8 V0 H5.5 V8", class: "sd-wall" }, svg);
    el("line", { x1: -5.5, y1: 8, x2: 5.5, y2: 8, class: "sd-plaster" }, svg);
    el("path", { d: "M-5.5 8 Q0 9.9 5.5 8", class: "sd-apron" }, svg);
    el("path", { d: "M-5.5 7.6 V8.5 M5.5 7.6 V8.5", class: "sd-pros" }, svg);
    var table = el("g", { class: "sd-set" }, svg);
    el("rect", { x: -1.15, y: 0.9, width: 2.3, height: 0.62, rx: 0.1 }, table);
    var tableText = el("text", { x: 0, y: 1.34 }, table);
    var texts = { wingL: el("text", { x: -6.65, y: 0.55, class: "sd-note" }, svg), wingR: el("text", { x: 6.65, y: 0.55, class: "sd-note" }, svg), house: el("text", { x: 0, y: 9.75, class: "sd-note" }, svg) };
    var beams = {}, trails = el("g", { class: "sd-trails" }, null), tokens = {}, rings = {};
    SPOTS.forEach(function (s) { beams[s.id] = el("polygon", { class: "sd-beam", fill: s.color }, svg); });
    svg.appendChild(trails);
    ACTORS.forEach(function (a) {
      var g = el("g", { class: "sd-token" }, svg);
      rings[a.id] = el("circle", { r: 0.58, class: "sd-ring" }, g);
      el("circle", { r: 0.42, fill: a.color }, g);
      a.text = el("text", { y: 0.13 }, g);
      tokens[a.id] = g;
    });
    SPOTS.forEach(function (s) {
      var p = P(s.pos), g = el("g", { class: "sd-spot", transform: "translate(" + p[0] + " " + p[1] + ")" }, svg);
      el("circle", { r: 0.27, fill: s.color }, g);
      s.text = el("text", { x: 0.45, y: 0.13 }, g);
    });

    var index = 0, now = {}, tween = null, raf = 0;
    for (var a0 in START) now[a0] = START[a0].slice();
    function place() {
      ACTORS.forEach(function (a) {
        var p = P(now[a.id]);
        tokens[a.id].setAttribute("transform", "translate(" + p[0].toFixed(3) + " " + p[1].toFixed(3) + ")");
      });
      SPOTS.forEach(function (s) {
        var who = held[index][s.id];
        if (!who) return;
        var from = P(s.pos), to = P(now[who]), dx = to[0] - from[0], dy = to[1] - from[1], len = Math.hypot(dx, dy) || 1;
        var nx = (-dy / len) * 0.52, ny = (dx / len) * 0.52;
        beams[s.id].setAttribute("points", from[0] + "," + from[1] + " " + (to[0] + nx).toFixed(3) + "," + (to[1] + ny).toFixed(3) + " " + (to[0] - nx).toFixed(3) + "," + (to[1] - ny).toFixed(3));
      });
    }
    function frame(time) {
      var t = Math.min(1, (time - tween.start) / MOVE_MS), k = easeInOut(t);
      tween.items.forEach(function (it) {
        var u = 1 - k;
        now[it.id] = it.ctrl
          ? [u * u * it.from[0] + 2 * u * k * it.ctrl[0] + k * k * it.to[0], u * u * it.from[1] + 2 * u * k * it.ctrl[1] + k * k * it.to[1]]
          : [it.from[0] + (it.to[0] - it.from[0]) * k, it.from[1] + (it.to[1] - it.from[1]) * k];
      });
      place();
      raf = t < 1 ? requestAnimationFrame(frame) : 0;
    }
    // the control point that makes a quadratic curve pass through `via` halfway
    function control(from, via, to) { return [2 * via[0] - (from[0] + to[0]) / 2, 2 * via[1] - (from[1] + to[1]) / 2]; }
    function drawTrails(i) {
      trails.textContent = "";
      if (!i) return;
      STEPS[i].moves.forEach(function (m) {
        var actor = ACTORS.filter(function (a) { return a.id === m[0]; })[0];
        var from = at[i - 1][m[0]], to = m[1], c = m[2] ? control(from, m[2], to) : null;
        var a = P(from), b = P(to), q = c ? P(c) : a;
        var ang = Math.atan2(b[1] - q[1], b[0] - q[0]), end = [b[0] - Math.cos(ang) * 0.62, b[1] - Math.sin(ang) * 0.62];
        el("circle", { cx: a[0], cy: a[1], r: 0.42, class: "sd-ghost", stroke: actor.color }, trails);
        el("path", { d: "M" + a[0] + " " + a[1] + (c ? " Q" + q[0] + " " + q[1] + " " : " L") + end[0].toFixed(3) + " " + end[1].toFixed(3), class: "sd-path", stroke: actor.color }, trails);
        var tip = [b[0] - Math.cos(ang) * 0.5, b[1] - Math.sin(ang) * 0.5], w = 0.16, back = 0.34;
        el("polygon", { fill: actor.color, points: tip[0] + "," + tip[1] + " " + (tip[0] - Math.cos(ang) * back + Math.sin(ang) * w) + "," + (tip[1] - Math.sin(ang) * back - Math.cos(ang) * w) + " " + (tip[0] - Math.cos(ang) * back - Math.sin(ang) * w) + "," + (tip[1] - Math.sin(ang) * back + Math.cos(ang) * w) }, trails);
      });
    }
    function show(i, instant) {
      index = (i + STEPS.length) % STEPS.length;
      drawTrails(index);
      SPOTS.forEach(function (s) { beams[s.id].classList.toggle("is-on", !!held[index][s.id]); });
      ACTORS.forEach(function (a) {
        var lit = SPOTS.filter(function (s) { return held[index][s.id] === a.id; })[0];
        rings[a.id].setAttribute("stroke", lit ? lit.color : "none");
      });
      Array.prototype.forEach.call(list.children, function (li, k) {
        li.firstChild.setAttribute("aria-pressed", k === index ? "true" : "false");
      });
      label();
      cancelAnimationFrame(raf);
      var items = ACTORS.map(function (a) {
        var move = STEPS[index].moves.filter(function (m) { return m[0] === a.id; })[0];
        var from = now[a.id].slice(), to = at[index][a.id], before = index ? at[index - 1][a.id] : null;
        // walk the drawn curve only when setting off from where the arrow starts
        var onPath = move && move[2] && before && Math.hypot(from[0] - before[0], from[1] - before[1]) < 0.05;
        return { id: a.id, from: from, to: to, ctrl: onPath ? control(from, move[2], to) : null };
      }).filter(function (it) { return it.from[0] !== it.to[0] || it.from[1] !== it.to[1]; });
      if (instant || reduce.matches || isStatic || !items.length) {
        items.forEach(function (it) { now[it.id] = it.to.slice(); });
        place();
        return;
      }
      tween = { start: performance.now(), items: items };
      raf = requestAnimationFrame(frame);
    }
    function label() {
      var l = lang(), step = STEPS[index];
      var tags = step.tags.map(function (t) { return '<b style="--c:' + TYPE[t[0]] + '">' + t[1] + "</b>"; }).join("");
      caption.innerHTML = (tags || "<b>" + step[l][0] + "</b>") + "<span>" + (step.tags.length ? step[l] : step[l][1]) + "</span>";
    }
    function build() {
      var l = lang();
      list.textContent = "";
      STEPS.forEach(function (step, i) {
        var li = document.createElement("li"), button = document.createElement("button");
        button.type = "button";
        button.setAttribute("aria-pressed", i === index ? "true" : "false");
        button.innerHTML = '<span class="stagedemo__tags">' + (step.tags.length
          ? step.tags.map(function (t) { return '<b style="--c:' + TYPE[t[0]] + '">' + t[1] + "</b>"; }).join("")
          : "<b>" + step[l][0] + "</b>") + "</span><span class=\"stagedemo__line\">" + (step.tags.length ? step[l] : step[l][1]) + "</span>";
        button.addEventListener("click", function () { stop(); show(i); });
        li.appendChild(button);
        list.appendChild(li);
      });
      ACTORS.forEach(function (a) { a.text.textContent = a[l]; });
      SPOTS.forEach(function (s) { s.text.textContent = s[l]; });
      tableText.textContent = l === "ko" ? "연회 테이블" : "Table";
      texts.wingL.textContent = l === "ko" ? "하수 윙" : "SR wing";
      texts.wingR.textContent = l === "ko" ? "상수 윙" : "SL wing";
      texts.house.textContent = l === "ko" ? "객석" : "Audience";
      label();
    }
    // plays by itself while it is on screen, until someone takes over
    var timer = 0, taken = false, visible = false;
    function tick() {
      clearTimeout(timer);
      if (taken || !visible || reduce.matches || isStatic) return;
      timer = setTimeout(function () { show(index + 1); tick(); }, index === STEPS.length - 1 ? HOLD_MS * 1.6 : HOLD_MS);
    }
    function stop() { taken = true; clearTimeout(timer); }
    root.addEventListener("pointerdown", stop);
    root.addEventListener("keydown", stop);
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        tick();
      }, { threshold: 0.5 }).observe(svg);
    }
    document.addEventListener("lightdori:langchange", build);
    build();
    show(0, true);
  })();

  /* ───────────── 2. colour ───────────── */
  (function gelDemo() {
    var root = document.getElementById("gel-demo");
    if (!root) return;
    // LEE: swatch, then the light measured at 100 / 50 / 30 % lamp power, and light transmitted
    var GELS = [
      { code: "L201", name: "Full C.T. Blue", swatch: "#5B89BB", stops: ["#C3E1FA", "#D4DDE1", "#EDD4B6"], y: 35 },
      { code: "L147", name: "Apricot", swatch: "#FAA66B", stops: ["#FCB98C", "#FFB475", "#FFAA00"], y: 58 },
      { code: "L036", name: "Medium Pink", swatch: "#F08FBD", stops: ["#FFA0B9", "#FF9BA4", "#FF907F"], y: 48 },
      { code: "L105", name: "Orange", swatch: "#E27500", stops: ["#FFA000", "#FF9B00", "#FF8F00"], y: 50 },
      { code: "L139", name: "Primary Green", swatch: "#006A00", stops: ["#4BC300", "#64BF05", "#79B402"], y: 10 },
      { code: "L079", name: "Just Blue", swatch: "#001067", stops: ["#3C8CD2", "#508ABE", "#64859C"], y: 4 },
    ];
    var chips = root.querySelector(".geldemo__chips"), range = root.querySelector("input[type=range]"), stage = root.querySelector(".geldemo__stage");
    var out = { code: root.querySelector("[data-gel=code]"), name: root.querySelector("[data-gel=name]"), level: root.querySelector("[data-gel=level]"), kelvin: root.querySelector("[data-gel=kelvin]"), light: root.querySelector("[data-gel=light]"), y: root.querySelector("[data-gel=y]") };
    var gel = GELS[0];
    function rgb(hex) { return [1, 3, 5].map(function (i) { return parseInt(hex.slice(i, i + 2), 16); }); }
    function mix(a, b, t) {
      var from = rgb(a), to = rgb(b);
      return "#" + from.map(function (v, i) { return Math.round(v + (to[i] - v) * t).toString(16).padStart(2, "0"); }).join("").toUpperCase();
    }
    // as gelLight.js: lightAt, lampKelvin, lampOutput
    function lightAt(stops, level) { return level >= 50 ? mix(stops[1], stops[0], (level - 50) / 50) : mix(stops[2], stops[1], (Math.max(30, level) - 30) / 20); }
    function kelvin(level) { return Math.round(level >= 50 ? 2700 + (level - 50) * 10 : 2000 + (Math.max(30, level) - 30) * 35); }
    function output(level) { return 0.22 + 0.78 * ((Math.max(30, level) - 30) / 70); }
    function paint() {
      var level = +range.value, light = lightAt(gel.stops, level);
      stage.style.setProperty("--light", light);
      stage.style.setProperty("--out", output(level).toFixed(3));
      out.code.textContent = gel.code;
      out.name.textContent = gel.name;
      out.level.textContent = level + "%";
      out.kelvin.textContent = kelvin(level) + "K";
      out.light.textContent = light;
      out.y.textContent = gel.y + "%";
      range.style.setProperty("--fill", ((level - 30) / 70) * 100 + "%");
    }
    GELS.forEach(function (g, i) {
      var button = document.createElement("button");
      button.type = "button";
      button.setAttribute("aria-pressed", i ? "false" : "true");
      button.setAttribute("aria-label", g.code + " " + g.name);
      button.innerHTML = '<i style="background:' + g.swatch + '"></i>' + g.code;
      button.addEventListener("click", function () {
        gel = g;
        Array.prototype.forEach.call(chips.children, function (b) { b.setAttribute("aria-pressed", b === button ? "true" : "false"); });
        paint();
      });
      chips.appendChild(button);
    });
    // dragging the dimmer follows the hand; only a picked gel eases over
    range.addEventListener("input", function () { stage.classList.add("is-live"); paint(); });
    range.addEventListener("change", function () { stage.classList.remove("is-live"); });
    paint();
  })();

  /* ───────────── 3. screenshots, full size ───────────── */
  (function zoom() {
    var dialog = document.getElementById("zoom");
    if (!dialog || typeof dialog.showModal !== "function") return;
    var big = dialog.querySelector("img");
    document.querySelectorAll(".shot > img, .views img").forEach(function (img) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "zoomable";
      button.setAttribute("data-i18n-aria", "zoom.open");
      button.setAttribute("aria-label", lang() === "ko" ? "크게 보기" : "View full size");
      img.parentNode.insertBefore(button, img);
      button.appendChild(img);
      button.addEventListener("click", function () {
        big.src = img.currentSrc || img.src;
        big.alt = img.alt;
        dialog.showModal();
      });
    });
    dialog.addEventListener("click", function (event) { if (event.target === dialog || event.target === big) dialog.close(); });
  })();
})();
