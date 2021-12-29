(() => {
  const refs = {
    openMenuBtn: document.querySelector('.burger-button'),
    closeMenuBtn: document.querySelector('.close-button'),
    menu: document.querySelector('.mob-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
