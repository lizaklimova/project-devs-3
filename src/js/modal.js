(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openModalBtnFirst: document.querySelector('[data-modal-open-hero]'),
    openModalBtnSecond: document.querySelector('[data-modal-open-vegs]'),
    openModalBtnThird: document.querySelector('[data-modal-open-menu]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtnFirst.addEventListener('click', toggleModal);
  refs.openModalBtnSecond.addEventListener('click', toggleModal);
  refs.openModalBtnThird.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
