'use strict';
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', e => {
  navLinks.classList.toggle('open');

  const isOpen = navLinks.classList.contains('open');
  menuBtnIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line');
});
navLinks.addEventListener('click', e => {
  navLinks.classList.remove('open');
  menuBtnIcon.setAttribute('class', 'ri-menu-line');
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
//Modal handling
//Modal handling
//Modal handling

const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },
});

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function (item) {
  const imgSrc = item.querySelector('img').src;
  const title = item.querySelector('h4').textContent;
  const description = item.querySelector('p')
    ? item.querySelector('p').innerHTML
    : '';
  // Update modal content with the clicked item's details
  modal.querySelector('img').src = imgSrc;
  modal.querySelector('h4').textContent = title;
  modal.querySelector('p').innerHTML = description;

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
// Function to close the modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//AI Modal opening handling.
// Attach event listeners to all '.show-modal' buttons
btnsOpenModal.forEach(button => {
  button.addEventListener('click', function () {
    openModal(this);
  });
});

/*
//My original open modal handling
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal(this));
*/

btnCloseModal.addEventListener('click', closeModal);
//Modal closure handling.
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
//Modal handling
//Modal handling
//Modal handling

//Swiper handling
