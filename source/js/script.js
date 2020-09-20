'use strict';

(function () {
    var sliderContainerWidth = document.querySelector('.slider__list-wrapper').clientWidth;
    var sliderListElement = document.querySelector('.slider__list');
    var slide = sliderListElement.querySelector('li');
    var mainNavElement = document.querySelector('.main-nav');
    var toggleButtonElement = document.querySelector('.main-nav__toggle');
    var mainNavListElement = document.querySelector('.main-nav__list');
    var sliderListWidth = sliderListElement.clientWidth;
    var trackList =  document.querySelector('.slider__tracklist-wrapper');


    function toggleBurger () {
        mainNavElement.classList.toggle('main-nav--open');
        toggleButtonElement.classList.toggle('main-nav__toggle--close');
        mainNavListElement.classList.toggle('main-nav__list--hidden-mobile');
    };
    
    toggleBurger();
    toggleButtonElement.addEventListener('click', toggleBurger);



    var swiperMain = new Swiper('.main-slider', {
        navigation: {
            nextEl: '.main-slider__btn--next',
            prevEl: '.main-slider__btn--prev',
        },
    });
    
    if (sliderListWidth > sliderContainerWidth) {    
        var swiperNew = new Swiper('.slider__list-wrapper', {
            slidesPerView: (sliderContainerWidth / (slide.clientWidth + 72)) + 0.2 ,
            freeMode: true
        });
    }
    
    var trackListSwiper = new Swiper('.slider__tracklist-wrapper', {
        freeMode: true,
        direction: 'vertical',
        slidesPerView: 5,
        spaceBetween: 28
    });
})();