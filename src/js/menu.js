(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    closeMenuBtnFirst: document.querySelector('[data-menu-close-first]'),
    closeMenuBtnSecond: document.querySelector('[data-menu-close-second]'),
    closeMenuBtnThird: document.querySelector('[data-menu-close-third]'),
    closeMenuBtnFourth: document.querySelector('[data-menu-close-fourth]'),
    menu: document.querySelector('[data-menu]'),
  };
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtnFirst.addEventListener('click', toggleMenu);
  refs.closeMenuBtnSecond.addEventListener('click', toggleMenu);
  refs.closeMenuBtnThird.addEventListener('click', toggleMenu);
  refs.closeMenuBtnFourth.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.menu.classList.toggle('is-visible');

    if (refs.menu.classList.contains('is-hidden')) {
      refs.menu.classList.add('is-closing');
      setTimeout(() => {
        refs.menu.classList.remove('is-closing');
      }, 500);
    }
  }
})();
