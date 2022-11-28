$(document).ready(function(){

  var swiper = new Swiper(".mySwiper01", {
    slidesPerView: 1,
    effect: 'fade',
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper02 = new Swiper(".mySwiper02", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  /* roll-controll 슬라이드 멈추기 및 재생 */
  $('.slideControl01').on("click active", function(){
      if ($(this).hasClass('main-roll-pause')) {
          $(this).removeClass('main-roll-pause').addClass('main-roll-play');
          swiper02.autoplay.stop();
      } else {
          $(this).removeClass('main-roll-play').addClass('main-roll-pause');
          swiper02.autoplay.start();
      }//if
  });//

  var swiper03 = new Swiper(".mySwiper03", {
    slidesPerView : 'auto',
    initialSlide : 2,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper05 = new Swiper(".mySwiper05", {
    slidesPerView: 'auto',
    initialSlide : 6,
    spaceBetween: 10,
    loop: true,
    touchRatio: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      disableOnInteraction: false,
    },
  });

  /* roll-controll 슬라이드 멈추기 및 재생 */
  $('.slideControl05').on("click active", function(){
    if ($(this).hasClass('main-roll-pause')) {
        $(this).removeClass('main-roll-pause').addClass('main-roll-play');
        swiper05.autoplay.stop();
    } else {
        $(this).removeClass('main-roll-play').addClass('main-roll-pause');
        swiper05.autoplay.start();
    }//if
  });

  var swiper06 = new Swiper(".mySwiper06", {
    slidesPerView : 'auto',
    initialSlide : 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper07 = new Swiper(".mySwiper07", {
    slidesPerView : 'auto',
    initialSlide : 1,
    spaceBetween: 15,
    loop: true,
    autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

})
