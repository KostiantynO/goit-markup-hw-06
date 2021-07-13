(function () {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    modalTitle: document.querySelector("[data-modal-title]"),
    htmlAndBody: document.querySelectorAll("[data-no-scroll]"),
  };

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden"),
      refs.htmlAndBody[0].classList.toggle("no-scroll"),
      refs.htmlAndBody[1].classList.toggle("no-scroll");
  }

  var card = document.querySelector(".card");
  card.addEventListener("click", function () {
    card.classList.toggle("is-flipped");
  });

  refs.openModalBtn.addEventListener("click", function () {
    toggleModal(), refs.modalTitle.focus();
  }),
    refs.closeModalBtn.addEventListener("click", toggleModal),
    refs.modal.addEventListener("click", function (event) {
      event.target.matches("[data-modal]") && toggleModal();
    });
})();
