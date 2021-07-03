(() => {
  const e = {
    z: document.querySelector("[data-modal-open]"),
    x: document.querySelector("[data-modal-close]"),
    c: document.querySelector("[data-modal]"),
    t: document.querySelector("[data-no-scroll]"),
  };
  function p() {
    e.c.classList.toggle("is-hidden"), e.t.classList.toggle("no-scroll");
  }
  e.z.addEventListener("click", p), e.x.addEventListener("click", p);
})();
