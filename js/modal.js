(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    htmlAndBody: document.querySelectorAll("[data-no-scroll]"),
  };

  refs.openModalBtn.addEventListener("mouseup", toggleModal);
  refs.closeModalBtn.addEventListener("mouseup", toggleModal);
  refs.modal.addEventListener("mouseup", backdropClicked);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.htmlAndBody[0].classList.toggle("no-scroll");
    refs.htmlAndBody[1].classList.toggle("no-scroll");
  }

  function backdropClicked(event) {
    if (event.target.matches("[data-modal]")) {
      toggleModal();
    }
  }
})();
