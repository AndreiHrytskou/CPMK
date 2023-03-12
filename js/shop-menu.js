
let btn = document.querySelector(".main-nav__link");
btn.addEventListener('click', (e) => {
  e.preventDefault();
  let show = document.querySelector(".main-nav-menu");
  show.classList.toggle('show')
});


