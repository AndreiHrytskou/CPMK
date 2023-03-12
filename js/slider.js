
const swiper = new Swiper('.swiper', {

  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    renderFraction: function(currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' + '<span class="' + totalClass + '"></span>';
    },
    formatFractionCurrent: function(number) {
      if (number < 10) {
      number = '0' + number;
      }
      return number;
    },
    formatFractionTotal: function(number) {
      if (number < 10) {
      number = '0' + number;
      }
      return number;
    },
  },
  
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    dragSize: 'auto',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
});