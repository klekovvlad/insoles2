const swiper = new Swiper('.swiper', {
    speed: 1000,
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });

let now = new Date();
const dateItem = document.querySelector('.date_today');
const options = {
    month: 'long',
    day: 'numeric',
  };

dateItem.innerHTML = now.toLocaleString("ru", options);

const header = document.querySelector('.header');

function showHeader() {
    let scrollPos = 250;

    if(document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos) {
        header.classList.add('header__scroll');
    }else{
        header.classList.remove('header__scroll');
    };
};

window.onscroll = function() {
    showHeader();
};