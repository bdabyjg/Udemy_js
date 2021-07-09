'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn=>btn.addEventListener('click', openModal))
//forEach是简便写法，和下面这个for loop是一样的。
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Selecting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// console.log(document.querySelectorAll('.section'));
// console.log(document.getElementById('section--1'));
// console.log(document.getElementsByTagName('button'));
// console.log(document.getElementsByClassName('btn'));

//Creating and inserting elements
 const message = document.createElement('div');
 message.classList.add('cookie-message');
 // message.textContent = 'We use cookies for improved functionality and analytics.'
message.innerHTML = 'We use cookies for improved functionality and analytics.<button class="btn btn--close-cookie">Got it!</button>'
const header = document.querySelector('.header');
// header.prepend(message);
header.append(message);

document.querySelector('.btn--close-cookie').addEventListener('click',function (){
  // message.remove();
  message.parentElement.removeChild(message);
});

//Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
// console.log(getComputedStyle(message).height);
message.style.height=Number.parseFloat(getComputedStyle(message).height,10)+30 +'px';
// document.documentElement.style.setProperty('--color-primary','orangered');

// Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.getAttribute('src'));
// const link = document.querySelector('.twitter-link');
// console.log(link.href);
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click',function (e){
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  console.log('Current scroll(X/Y)', window.pageXOffset,pageYOffset);
  console.log('height/width viewport',document.documentElement.clientHeight,document.documentElement.clientWidth);
  //Scrolling
  window.scrollTo({
    left:s1coords.left+window.pageXOffset,
    top:s1coords.top+window.pageYOffset,
    behavior:'smooth'
  });
});

