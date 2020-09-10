/* eslint-disable new-cap, no-undef, no-undef, no-unused-vars */
'use strict';
// Скрол
var bannerScroll = document.querySelector('.banner-scroll');
var subscription = document.querySelector('#subscription');

if (bannerScroll) {
  bannerScroll.addEventListener('click', function (evt) {
    evt.preventDefault();
    subscription.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

// Таб с абонементами
var subscriptionBtn = document.querySelectorAll('.subscription__term-button');
var offerList = document.querySelectorAll('.offer__list');

if (offerList) {
  subscriptionBtn.forEach(function (button) {
    button.classList.remove('subscription__term-button--active');
  });
  offerList.forEach(function (list) {
    list.classList.remove('offer__list--active');
  });

  subscriptionBtn[0].classList.add('subscription__term-button--active');
  offerList[0].classList.add('offer__list--active');

  var changeList = function (index) {
    subscriptionBtn.forEach(function (button) {
      button.classList.remove('subscription__term-button--active');
    });
    offerList.forEach(function (list) {
      list.classList.remove('offer__list--active');
    });

    subscriptionBtn[index].classList.add('subscription__term-button--active');
    offerList[index].classList.add('offer__list--active');
  };

  subscriptionBtn.forEach(function (element, index) {
    element.addEventListener('click', function (evt) {
      evt.preventDefault();
      changeList(index);
    });
  });
}

// Слайдер trainers
var sliderTrainer = new Swiper('.slider-trainers', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.trainers__button-next',
    prevEl: '.trainers__button-prev'
  },
  loop: true, // зацикливает слайдер
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 40
    }
  }
});

// Cлайдер review
var sliderRewiew = new Swiper('.slider-rewiew', {
  navigation: {
    nextEl: '.review__button-next',
    prevEl: '.review__button-prev'
  },
});

// Маска
var phone = document.querySelector('#phone');

if (phone) {
  var maskOptions = {
    mask: '+{7}(000)000-00-00'
  };

  var mask = new IMask(phone, maskOptions);
}
