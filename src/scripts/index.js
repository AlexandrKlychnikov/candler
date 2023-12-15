import '../styles/main.sass';

function component(text) {
  const element = document.createElement('h1');
  element.textContent = text;
  element.classList.add('heading')
  return element;
}

document.body.prepend(component('Это про свечи'));