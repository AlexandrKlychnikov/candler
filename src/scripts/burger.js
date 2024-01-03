const burger = () => {
  const btnBurger = document.querySelector('.burger-menu')
  // const btnBurger = document.querySelector('.burger-menu')
  btnBurger.addEventListener('click', () => {
    if (!btnBurger.classList.contains('open') && !btnBurger.classList.contains('close')) {
      btnBurger.classList.add('open');
    } else if (btnBurger.classList.contains('open')) {
      btnBurger.classList.replace('open', 'close')
    } else if (btnBurger.classList.contains('close')) {
      btnBurger.classList.replace('close', 'open')
    }
  })
}

export default burger;
