(() => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const openMenuBtn = document.querySelector('.mobile-menu-open');
    const closeMenuBtn = document.querySelector('.mobile-menu-close');
  
    const toggleMenu = () => {
      const isMenuOpen =
        openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
      openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      mobileMenu.classList.toggle('is-mobile-hidden');
  
      const scrollLockMethod = !isMenuOpen
        ? 'disableBodyScroll'
        : 'enableBodyScroll';
      bodyScrollLock[scrollLockMethod](document.body);
    };
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
  
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
      if (!e.matches) return;
      mobileMenu.classList.toggle('is-mobile-hidden', true);
      // mobileMenu.classList.remove('is-mobile-hidden');
      openMenuBtn.setAttribute('aria-expanded', false);
      bodyScrollLock.enableBodyScroll(document.body);
    });
  })();