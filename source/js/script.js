'use strict';
var sliderContainerWidth = document.querySelector('.slider__list-wrapper').clientWidth;
var sliderListWidth = document.querySelector('.slider__list').clientWidth;
var mainNavElement = document.querySelector('.main-nav');
var toggleButtonElement = document.querySelector('.main-nav__toggle');
var mainNavListElement = document.querySelector('.main-nav__list');

function toggleBurger () {
    mainNavElement.classList.toggle('main-nav--open');
    toggleButtonElement.classList.toggle('main-nav__toggle--close');
    mainNavListElement.classList.toggle('visually-hidden');
};

toggleButtonElement.addEventListener('click', toggleBurger);

function getSlidesPerView(width) {
    if (width <= 1425 && width > 1400) {
        return 4;
    } else if (width <= 1400 && width > 1294) {
        return 3.9;
    } else if (width <= 1294 && width > 1260) {
        return 3.8;
    } else if (width <= 1260 && width > 1224) {
        return 3.7;
    } else if (width <= 1224 && width > 1194) {
        return 3.6;
    } else if (width <= 1194 && width > 1163) {
        return 3.5;
    } else if (width <= 1163 && width > 1128) {
        return 3.4;
    } else if (width < 1000) {
        return 1.5;
    }
}



var swiperMain = new Swiper('.main-slider', {
    navigation: {
        nextEl: '.main-slider__btn--next',
        prevEl: '.main-slider__btn--prev',
    },
});

if (sliderListWidth > sliderContainerWidth) {
    console.log(sliderContainerWidth, getSlidesPerView(sliderContainerWidth));
    
    var swiperNew = new Swiper('.slider__list-wrapper', {
            slidesPerView: getSlidesPerView(sliderContainerWidth),
            freeMode: true
    });
}