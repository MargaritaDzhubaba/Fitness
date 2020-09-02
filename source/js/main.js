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
    button.classList.remove('subscription__term-button--active')
  })
  offerList.forEach(function (list) {
    list.classList.remove('offer__list--active');
  });

  subscriptionBtn[0].classList.add('subscription__term-button--active');
  offerList[0].classList.add('offer__list--active');

  var changeList = function (index) {
    subscriptionBtn.forEach( function (button) {
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
