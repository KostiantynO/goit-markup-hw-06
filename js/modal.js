(() => {
  function modal(event) {
    if (
      event.target.closest("[data-modal-close]") ||
      event.target.closest("[data-modal-open]") ||
      event.target.matches("[data-modal]")
    ) {
      document.querySelector("[data-modal]").classList.toggle("is-hidden"),
        document.querySelector("[data-no-scroll]").classList.toggle("no-scroll");
    }
  }
  document.addEventListener("click", modal, false);
})();
