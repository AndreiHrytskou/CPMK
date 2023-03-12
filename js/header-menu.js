
// ..анимация кнопки js

let btn = document.querySelector(".menu-toggle"); // находим кнопку
btn.addEventListener('click', (e) => {
  e.preventDefault();
  let activ = document.querySelector(".menu__toggle"); // находим блок с меню
  let color = document.querySelector(".menu-toggle"); // находим блок с меню
  let show = document.querySelector(".nav-mobile"); // находим блок с меню
  activ.classList.toggle('activ') // присваеваем класс чтоб показать
  color.classList.toggle('color') // присваеваем класс чтоб показать
  show.classList.toggle('show') // присваеваем класс чтоб показать
});

