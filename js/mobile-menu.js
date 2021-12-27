(() => {
  const refs = {
    openMenuBtn: document.querySelector('.open-nav'),
    closeMenuBtn: document.querySelector('.mob-menu__close-nav'),
    menu: document.querySelector('.mob-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
