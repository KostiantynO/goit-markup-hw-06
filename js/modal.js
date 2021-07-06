(() => {
  document.addEventListener(
    "click",
    function (e) {
      (e.target.closest("[data-modal-close]") ||
        e.target.closest("[data-modal-open]") ||
        e.target.matches("[data-modal]")) &&
        (document.querySelector("[data-modal]").classList.toggle("is-hidden"),
        document.querySelectorAll("[data-no-scroll]")[].classList.toggle("no-scroll"));
    },
    0,
  );
})();
