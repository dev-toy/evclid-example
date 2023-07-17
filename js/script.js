// Бургер меню

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  }
);

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');

  })
});

// Слайдер

const container = document.querySelector(".hero__container");
const swiper = new Swiper('.hero__swiper', {
  // Default parameters

  speed: 300,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true,
  },

});

// Табы

let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');
let workBackground = document.querySelector('.work__content'); //мой код

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(function(element){ element.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
//мой код
    workBackground.classList.remove('work__content--background-one');
    workBackground.classList.remove('work__content--background-two');
    workBackground.classList.remove('work__content--background-three');
    workBackground.classList.remove('work__content--background-four');
    workBackground.classList.add('work__content--background-' + path);
  });
});

// Аккордион

new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active',
});

// Всплывающий поиск

document.querySelector(".header-form__open").addEventListener("click", function() {
  document.querySelector(".header-form").classList.add("header-form__active");
  this.classList.add("active");
})
document.querySelector(".header-form__close").addEventListener("click", function() {
   let form = document.querySelector(".header-form");
  form.classList.remove("header-form__active");
    form.querySelector(".header-form__input").value = "";
    document.querySelector(".header-form__open").classList.remove("active")
});

document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".header-form");
  if (!target.closest(".header-finder")) {
  form.classList.remove("header-form__active");
    form.querySelector(".header-form__input").value = "";
    document.querySelector(".header-form__open").classList.remove("active")
  }
})

