const burger = () => {
  const btnBurger = document.querySelector('.burger-menu');
  const menuList = document.querySelector('.header__menu .menu__list');
  const body = document.querySelector('body');
  btnBurger.addEventListener('click', () => {
    if (!btnBurger.classList.contains('open') && !btnBurger.classList.contains('close')) {
      body.classList.add('menu-is-opened');
      btnBurger.classList.add('open');
      menuList.classList.add('open');
    } else if (btnBurger.classList.contains('open')) {
      btnBurger.classList.remove('menu-is-opened');
      btnBurger.classList.replace('open', 'close');
      menuList.classList.replace('open', 'close');
    } else if (btnBurger.classList.contains('close')) {
      btnBurger.classList.add('menu-is-opened');
      btnBurger.classList.replace('close', 'open');
      menuList.classList.replace('close', 'open');
      menuList.classList.remove('hidden');
    }
  })
  menuList.addEventListener('animationend', (event)=> {
    if(event.animationName === 'slide-out') {
      menuList.classList.add('hidden');
    };
  })

}

export default burger;
