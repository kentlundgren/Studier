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
})();
