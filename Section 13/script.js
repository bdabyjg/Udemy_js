'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

///////////////////////////////////////
// Modal window

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

btnScrollTo.addEventListener('click',function (e){
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  console.log('Current scroll(X/Y)', window.pageXOffset,pageYOffset);
  console.log('height/width viewport',document.documentElement.clientHeight,document.documentElement.clientWidth);

  //Scrolling
  // window.scrollTo({
  //   left:s1coords.left+window.pageXOffset,
  //   top:s1coords.top+window.pageYOffset,
  //   behavior:'smooth'
  // });
  section1.scrollIntoView({behavior:'smooth'})
});

//7.12
// const h1 = document.querySelector('h1');
// const alertH1 = function (e){
//   alert('function: Great! You\'re reading the heading :D');
//   h1.removeEventListener('mouseenter',alertH1);
// };
// h1.addEventListener('mouseenter',alertH1);
// setTimeout(()=>h1.removeEventListener('mouseenter',alertH1),3000)
// // h1.onmouseenter = function (e){
// //   alert('Onmouse: Great! You\'re reading the heading :D')
// // };

// 1 Add event listener to common parent element
// 2 Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click',function (e){
  e.preventDefault();
  //Matching
  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({behavior:'smooth'});
  }
})


document.querySelectorAll('.nav__link').forEach(function (el){
  el.addEventListener('click',function (e){
    e.preventDefault();
    const id = this.getAttribute('href');
    // console.log(id);
    document.querySelector(id).scrollIntoView({behavior:'smooth'});
  });
})

//DOM Traversing
const h1 = document.querySelector('h1');

//Going downwards:child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
h1.firstElementChild.style.color='white';

// console.log(h1.parentNode);
// console.log(h1.parentElement);
h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('.header').style.background = 'var(--gradient-primary)';
// console.log(h1.previousSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el){
  if(el !== h1) el.style.transform = 'scale(0.5)';
});

//Tab component
const tabs = document.querySelector('.operations__tab');
tabsContainer.addEventListener('click',function (e){
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  if (!clicked) return;
  // tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  // Active content area
  // console.log(clicked.dataset.tab);
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});


//Menu fade animation
const handleHover = function (e){
  if (e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el=>{
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
}
nav.addEventListener('mouseover',handleHover.bind(0.5))
nav.addEventListener('mouseout',handleHover.bind(1));


//Sticky navigation
const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);
window.addEventListener('scroll',function (e){
  // console.log(window.scrollY);
  if (window.scrollY>initialCoords.top)nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});

//Sticky navigation: Intersection Observer API
// const obsCallback = function (entries,observer){
//   entries.forEach(entry =>{
//     console.log(entry);
//   })
// }
// const obsOptions ={
//   root:null,
//   threshold:[0,0.2]
// }
//
// const observer = new IntersectionObserver(obsCallback,obsOptions);
// observer.observe(section1);
// const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries){
  const [entry] = entries;
  if (!entry.isIntersecting)nav.classList.add('sticky');
  else nav.classList.remove('sticky')
};
const headerObserver = new IntersectionObserver(stickyNav,{
  root:null,
  threshold:0,
  rootMargin:`-${navHeight}px`,
});
headerObserver.observe(header);

//Reveal sections
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries,observer){
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);

}
const sectionObserver = new IntersectionObserver(revealSection,{
  root:null,
  threshold:0.15,

});
allSections.forEach(function (section){
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
})

//Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]')
const loadImg = function (entries,observer){
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  //Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load',function (){
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
}
const imgObserver = new IntersectionObserver(loadImg,{
  root:null,
  threshold:0,
  rootMargin:'200px'
})

imgTargets.forEach(img=>imgObserver.observe(img))

//Slider
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let curSlide = 0;
const maxSlide = slides.length;
// const slider = document.querySelector('.slider');
// slider.style.transform='scale(0.4) translateX(-800px)';
// slider.style.overflow='visible';


const goToSlide = function (slide){
  slides.forEach((s,i)=>s.style.transform = `translateX(${100*(i-slide)}%)`)

}
goToSlide(0);

//Next slide
const nextSlide = function (){
  if (curSlide === maxSlide-1){
    curSlide = 0
  }else {
    curSlide++;
  }
  goToSlide(curSlide);
// curSlide = 1: -100%, 0,100%,200%
};
const prevSlide = function (){
  if (curSlide == 0){
    curSlide = maxSlide-1;
  }else {
    curSlide--;
  }

  goToSlide(curSlide);
}
btnRight.addEventListener('click',nextSlide);
btnLeft.addEventListener('click',prevSlide)