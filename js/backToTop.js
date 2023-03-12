
const btnUp = {
  el: document.querySelector('.back__top'),

  show() {
    this.el.classList.remove('back-to-top_hide');
  },

  
  hide() {
    this.el.classList.add('back-to-top_hide');
  },


  addEventListener() {

    window.addEventListener('scroll', () => {

      const scrollY = window.scrollY || document.documentElement.scrollTop;

      scrollY > 600 ? this.show() : this.hide();
    });

    document.querySelector('.back__top').onclick = () => {

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });

    }
  }
}

btnUp.addEventListener();