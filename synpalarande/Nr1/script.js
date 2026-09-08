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

  /* Skylt: sju röster som växlar var 4:e sekund.
     Utan JS visas alla sju som en lista (se CSS). */
  var vFig = document.querySelector(".voices");
  var vList = document.getElementById("voicesList");
  var vToggle = document.getElementById("voicesToggle");
  var vDotsWrap = document.getElementById("voicesDots");

  if (vFig && vList && vToggle && vDotsWrap) {
    var vItems = Array.prototype.slice.call(vList.querySelectorAll(".voices__item"));
    var vCount = vItems.length;
    var vCur = 0;
    var vTimer = null;
    var vDelay = 4000;
    var vReduced = window.matchMedia
      && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var vPausedByUser = vReduced; /* startar pausad vid reducerad rörelse */
    var vDots = [];

    vFig.classList.add("voices--js");

    for (var i = 0; i < vCount; i++) {
      (function (idx) {
        var dot = document.createElement("button");
        dot.type = "button";
        dot.className = "voices__dot" + (idx === 0 ? " is-active" : "");
        dot.setAttribute("aria-label", "Visa röst " + (idx + 1) + " av " + vCount);
        dot.addEventListener("click", function () {
          show(idx);
          if (!vPausedByUser) play();
        });
        vDotsWrap.appendChild(dot);
        vDots.push(dot);
      })(i);
    }

    function show(idx) {
      vItems[vCur].classList.remove("is-active");
      vDots[vCur].classList.remove("is-active");
      vCur = idx;
      vItems[vCur].classList.add("is-active");
      vDots[vCur].classList.add("is-active");
    }

    function advance() {
      show((vCur + 1) % vCount);
    }

    function play() {
      stop();
      vTimer = window.setInterval(advance, vDelay);
    }

    function stop() {
      if (vTimer) {
        window.clearInterval(vTimer);
        vTimer = null;
      }
    }

    function syncToggle() {
      vToggle.textContent = vPausedByUser ? "Spela" : "Pausa";
      vToggle.setAttribute("aria-label", vPausedByUser
        ? "Spela den växlande skylten"
        : "Pausa den växlande skylten");
    }

    vToggle.addEventListener("click", function () {
      vPausedByUser = !vPausedByUser;
      syncToggle();
      if (vPausedByUser) stop();
      else play();
    });

    /* Pausa vid hover och tangentbordsfokus, återuppta sedan */
    vFig.addEventListener("mouseenter", function () { if (!vPausedByUser) stop(); });
    vFig.addEventListener("mouseleave", function () { if (!vPausedByUser) play(); });
    vFig.addEventListener("focusin", function () { if (!vPausedByUser) stop(); });
    vFig.addEventListener("focusout", function () { if (!vPausedByUser) play(); });

    syncToggle();
    if (!vPausedByUser) play();
  }
})();
