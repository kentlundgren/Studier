(function () {
  "use strict";

  /* Referenslistan: fälls ihop av JS. Utan JS står den kvar utfälld. */
  var toggle = document.getElementById("refsToggle");
  var list = document.getElementById("refs-list");
  var toggleText = toggle ? toggle.querySelector(".refs__toggle-text") : null;

  function setRefs(open) {
    if (!list || !toggle) return;
    list.setAttribute("data-collapsed", open ? "false" : "true");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    if (toggleText) toggleText.textContent = open ? "Dölj referenser" : "Visa referenser";
  }

  if (toggle && list) {
    setRefs(false); /* startläge: ihopfälld */
    toggle.addEventListener("click", function () {
      var open = list.getAttribute("data-collapsed") === "true";
      setRefs(open);
    });
  }

  /* Teknik-modal */
  var techBtn = document.getElementById("techBtn");
  var techModal = document.getElementById("techModal");
  var techClose = document.getElementById("techClose");
  var lastFocus = null;

  function openModal() {
    if (!techModal) return;
    lastFocus = document.activeElement;
    techModal.hidden = false;
    if (techClose) techClose.focus();
    document.addEventListener("keydown", onKeydown);
  }

  function closeModal() {
    if (!techModal) return;
    techModal.hidden = true;
    document.removeEventListener("keydown", onKeydown);
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  }

  function onKeydown(e) {
    if (e.key === "Escape") closeModal();
  }

  if (techBtn) techBtn.addEventListener("click", openModal);
  if (techClose) techClose.addEventListener("click", closeModal);
  if (techModal) {
    techModal.addEventListener("click", function (e) {
      if (e.target === techModal) closeModal();
    });
  }

  /* Klick på en app-bild öppnar den större i en overlay. Utan JS öppnar
     länken bilden i webbläsaren i stället. */
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  var lightboxClose = document.getElementById("lightboxClose");
  var lbLastFocus = null;

  function openLightbox(src, alt) {
    if (!lightbox || !lightboxImg) return;
    lbLastFocus = document.activeElement;
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    lightbox.hidden = false;
    if (lightboxClose) lightboxClose.focus();
    document.addEventListener("keydown", onLbKeydown);
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.hidden = true;
    lightboxImg.removeAttribute("src");
    document.removeEventListener("keydown", onLbKeydown);
    if (lbLastFocus && typeof lbLastFocus.focus === "function") lbLastFocus.focus();
  }

  function onLbKeydown(e) {
    if (e.key === "Escape") closeLightbox();
  }

  Array.prototype.forEach.call(
    document.querySelectorAll(".figpair__zoom"),
    function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        var img = link.querySelector("img");
        openLightbox(link.getAttribute("href"), img ? img.alt : "");
      });
    }
  );
  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }

  /* Roterande innehåll: växlar del var 5:e sekund. Pausar vid hover och
     tangentbordsfokus, står still vid reducerad rörelse. Utan JS visas alla
     delar som en lista (se CSS). Används av skylten med rösterna. */
  function initRotator(opts) {
    var fig = document.querySelector(opts.figure);
    var list = document.getElementById(opts.listId);
    var toggleBtn = document.getElementById(opts.toggleId);
    var dotsWrap = document.getElementById(opts.dotsId);
    if (!fig || !list || !toggleBtn || !dotsWrap) return;

    var items = Array.prototype.slice.call(list.children);
    var count = items.length;
    if (count < 2) return;

    var cur = 0;
    var timer = null;
    var delay = 5000;
    var reduced = window.matchMedia
      && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var pausedByUser = reduced; /* startar pausad vid reducerad rörelse */
    var dots = [];

    fig.classList.add(opts.jsClass);

    for (var i = 0; i < count; i++) {
      (function (idx) {
        var dot = document.createElement("button");
        dot.type = "button";
        dot.className = opts.dotClass + (idx === 0 ? " is-active" : "");
        dot.setAttribute("aria-label", opts.dotLabel + " " + (idx + 1) + " av " + count);
        dot.addEventListener("click", function () {
          show(idx);
          if (!pausedByUser) play();
        });
        dotsWrap.appendChild(dot);
        dots.push(dot);
      })(i);
    }

    function show(idx) {
      items[cur].classList.remove("is-active");
      dots[cur].classList.remove("is-active");
      cur = idx;
      items[cur].classList.add("is-active");
      dots[cur].classList.add("is-active");
    }

    function advance() { show((cur + 1) % count); }
    function play() { stop(); timer = window.setInterval(advance, delay); }
    function stop() {
      if (timer) { window.clearInterval(timer); timer = null; }
    }

    function syncToggle() {
      toggleBtn.textContent = pausedByUser ? "Spela" : "Pausa";
      toggleBtn.setAttribute("aria-label",
        (pausedByUser ? "Spela " : "Pausa ") + opts.name);
    }

    toggleBtn.addEventListener("click", function () {
      pausedByUser = !pausedByUser;
      syncToggle();
      if (pausedByUser) stop();
      else play();
    });

    fig.addEventListener("mouseenter", function () { if (!pausedByUser) stop(); });
    fig.addEventListener("mouseleave", function () { if (!pausedByUser) play(); });
    fig.addEventListener("focusin", function () { if (!pausedByUser) stop(); });
    fig.addEventListener("focusout", function () { if (!pausedByUser) play(); });

    syncToggle();
    if (!pausedByUser) play();
  }

  initRotator({
    figure: ".voices", listId: "voicesList", toggleId: "voicesToggle",
    dotsId: "voicesDots", jsClass: "voices--js", dotClass: "voices__dot",
    dotLabel: "Visa röst", name: "den växlande skylten"
  });
})();
