let heroSwiper = new Swiper('.hero__swiper', {

  slidesPerView: 1,

  autoplay: {
    delay: 2000
  },

  spaceBetween: 10,
  speed: 2000,

  effect: "fade",

  allowTouchMove: false,

  coverflowEffect: {
    depth: 100
  },

  // Optional parameters
  loop: true,
});



let gallerySlider = new Swiper(".gallery__swiper", {
  
  allowTouchMove: false,

  pagination: {
    el: ".gallery__swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".swiper__btn-next",
    prevEl: ".swiper__btn-prev"
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      //grid: {rows: 1},
      spaceBetween: 0,
      allowTouchMove: true,
    },
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      //grid: {rows: 2},
      spaceBetween: 30
    },

    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      //grid: {rows: 2},
      spaceBetween: 50
    }
  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }
});

let eventsSlider = new Swiper(".events__swiper", {

  
  spaceBetween: 50,
  navigation: {
    nextEl: ".events__swiper__btn-next",
    prevEl: ".events__swiper__btn-prev"
  },
  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  },

  pagination: {
    el: '.events__swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      //spaceBetween: 0,
      
    },
    680: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27
    },

    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
      allowTouchMove: true,
    }
  }

});

let publicSlider = new Swiper(".public__swiper", {
  
  allowTouchMove: false,
  avtoHeight: true,

  pagination: {
    el: ".public__swiper-pagination",
    type: "fraction"
  },

  navigation: {
    nextEl: ".public__swiper__btn-next",
    prevEl: ".public__swiper__btn-prev"
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 34,
      allowTouchMove: true,
    },
    680: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
      //slidesOffsetBefore: 27,
     // slidesOffsetAfter: 27,
      //width: 614,

    },

    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
      
    }
  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }
});

let projectSlider = new Swiper(".project__swiper", {
  
  allowTouchMove: false,

  //spaceBetween: 30,
  /*pagination: {
    el: ".swiper__pagination-right",
    type: "fraction"
  },*/
  navigation: {
    nextEl: ".project__btn-next",
    prevEl: ".project__btn-prev"
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 34,
    },
    766: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 45,
      //slidesOffsetBefore: 27,
     // slidesOffsetAfter: 27,
      //width: 614,

    },

    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
      
    }
  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }
});