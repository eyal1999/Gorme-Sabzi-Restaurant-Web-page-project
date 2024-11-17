'use strict';
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', e => {
  navLinks.classList.toggle('open');

  const isOpen = navLinks.classList.contains('open');
  menuBtnIcon.setAttribute(
    'class',
    isOpen ? 'fa-solid fa-bars' : 'fa-solid fa-bars'
  );
});
navLinks.addEventListener('click', e => {
  navLinks.classList.remove('open');
  menuBtnIcon.setAttribute('class', 'fa-solid fa-bars');
});

const scrollRevealOption = {
  distance: '50px',
  origin: 'bottom',
  duration: 1000,
};

ScrollReveal().reveal('.header__image img', {
  ...scrollRevealOption,
  origin: 'right',
});
ScrollReveal().reveal('.header__content h1', {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal('.header__content .section__description', {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal('.header__content .header__btn', {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal('.explore__image img', {
  ...scrollRevealOption,
  origin: 'left',
});
ScrollReveal().reveal('.explore__content .section__header', {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal('.explore__content .section__description', {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal('.explore__content .explore__btn', {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal('.category__header', {
  ...scrollRevealOption,
  origin: 'top',
  delay: 500,
});
ScrollReveal().reveal('.category__description', {
  ...scrollRevealOption,
  delay: 750,
});
ScrollReveal().reveal('.show-modal', {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal('.header__image', {
  ...scrollRevealOption,
  origin: 'right',
  delay: 500,
});
ScrollReveal().reveal('.header__content', {
  ...scrollRevealOption,
  origin: 'left',
  delay: 750,
});
ScrollReveal().reveal('.contacting__content', {
  ...scrollRevealOption,
  origin: 'bottom',
  delay: 1000,
});
ScrollReveal().reveal('.contact__container', {
  ...scrollRevealOption,
  origin: 'bottom',
  delay: 1000,
});
ScrollReveal().reveal('.article-card', {
  ...scrollRevealOption,
  origin: 'bottom',
  delay: 500,
});

//Swiper handling
const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },
});
//Swiper handling
