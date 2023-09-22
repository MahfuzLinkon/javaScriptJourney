'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
// Tab component
const tabs = document.querySelectorAll('.operations__tab');
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

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// Smooth Scrolling
btnScrollTo.addEventListener('click', function (e) {
  e.preventDefault();
  const s1coordinate = section1.getBoundingClientRect();

  // Scrolling with behavior///////////////////
  // window.scrollTo({
  //   left: s1coordinate.left + window.scrollX,
  //   top: s1coordinate.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////
// Page Navigation
//////////////////////////////////////
// document.querySelectorAll('.nav__link').forEach(link =>
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   })
// );
///////////  Page Navigation using event delegation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

///////////////////////////////////////
// Tab component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return; // this kind of return called guard clause

  // removing tab active class
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  // adding tab active class
  clicked.classList.add('operations__tab--active');

  // removing all content active class
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  // adding content active class
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

///////////////////////////////////////
// Navbar fade animation
const nav = document.querySelector('.nav');

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });

// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });

// Passing "argument" into handler using bind
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

///////////////////////////////////////
// Sticky Navbar

/// using scroll event

// const s1InitialCords = section1.getBoundingClientRect();
// console.log(s1InitialCords);

// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);
//   if (window.scrollY > s1InitialCords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// using InterSectionObserver API
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries, headerObserver) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `${-navHeight}px`,
});
headerObserver.observe(header);

/////////////////////////////////////////////////////////////////////
// Reveling section on scroll
const allSection = document.querySelectorAll('.section');

const revelSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revelSection, {
  root: null,
  threshold: 0.15,
});

allSection.forEach(section => {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

///////////////////////////////////////////////////////////////////
// Lazy loading Images
const imgTarget = document.querySelectorAll('img[data-src]');

const loadImage = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImage, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTarget.forEach(image => {
  imgObserver.observe(image);
});

///////////////////////////////////////////////////////////////////
// Slider
const sliders = function () {
  const slides = document.querySelectorAll('.slide');
  const slider = document.querySelector('.slider');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // slider.style.transform = 'scale(0.2) translateX(-800px)';
  // slider.style.overflow = 'overflow';
  // slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

  // Crate Dot function
  const createDots = function () {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  // Active slider dots
  const activeSlider = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  // GoTo Slide
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activeSlider(curSlide);
  };

  // Previews Slide
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activeSlider(curSlide);
  };

  /// init function
  const init = function () {
    goToSlide(0);
    createDots();
    activeSlider(0);
  };

  init();
  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
  // keyboard arrow key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  });

  //slide using dots
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activeSlider(slide);
    }
  });
};
sliders();

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

////// Selecting element
// const header = document.querySelector('.header');

// /////////////////////////////////////// Creating New Element /////////////////////////////
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML =
//   'We used cookie for improve performance <button class="btn btn--close--cookie">Got it</button>';

// /////////////////////////////////////// Inserting Element /////////////////////////////
// // header.before(message);
// // header.before(message);
// header.append(message);
// // header.prepend(message);

// ////////////////////////////// Deleting Element ///////////////////////////////////
// message.addEventListener('click', function () {
//   // message.remove();
//   // old school, or called it dom traversing
//   message.parentElement.removeChild(message);
// });

// // Style
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// message.style.height =
//   parseFloat(getComputedStyle(message).height, 10) + 25 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'red');

// const logo = document.querySelector('.nav__logo');

// console.log(logo.src);
// logo.alt = 'This is a beautiful logo';
// console.log(logo.alt);

// // Non Standard attributes
// // can get and set using getAttributes and setAttributes

// logo.setAttribute('company', 'Bankist');
// console.log(logo.getAttribute('company'));

// // Data attributes
// console.log(logo.dataset.versionNumber);

// const summation = function (num) {
//   // Code here
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum = sum + i;
//   }
//   return sum;
// };

// console.log(summation(2));

// const findAverage = function (array) {
//   // your code here
//   return array.reduce((sum, cur) => (sum + cur) / array.length, 0);
// };

// console.log(findAverage([1, 2]));

// (function solution(str) {
//  const reverse = str.split('').reverse().join('');
//   console.log());
// })('world');

// (function disemvowel(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];

//   // const newStr = str.split('').map((word, i, arr) => {
//   //   if (!vowels.includes(word.toLowerCase())) return word;
//   // });

//   const arrayL = [...str];

//   arrayL.forEach((cur, i) => {
//     if (vowels.includes(cur.toLowerCase())) {
//       arrayL.splice(i, 1);
//     }
//   });

//   console.log(arrayL.join(''));
//   return str;
// })('This website is for losers LOL!');

////
// const convertTitleCase = function (title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);

//   const exceptions = ['a', 'an', 'the', 'but', 'and', 'or', 'on', 'in', 'with'];

//   const titleCase = title
//     .toLocaleLowerCase()
//     .split(' ')
//     .map(word => (exceptions.includes(word) ? word : capitalize(word)))
//     .join(' ');
//   return capitalize(titleCase);
// };

// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('AND THIS is a LONG IN title'));

// const str = 'This website is for losers LOL!';

// const noVowels = str.replace(/[aeiou]/gi, '');

// console.log(noVowels);

// const countPositivesSumNegatives = function (input) {
//   // your code here
//   return input.reduce(
//     (sum, cur) => (cur > 0 ? (sum[0] += 1) : (sum[1] = sum + cur)),
//     [0, 0]
//   );
// };

// const test = countPositivesSumNegatives([
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
// ]);

// console.log(test);

/////////////////////// Smooth Scrolling ////////////////////////////
// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function (e) {
//   e.preventDefault();
//   const s1coordinate = section1.getBoundingClientRect();
//   console.log(s1coordinate);
// console.log(e.target.getBoundingClientRect());
// Current scroll position
// console.log('X/Y: ', window.pageXOffset, window.pageYOffset);
// console.log('X/Y: ', window.scrollX, window.scrollY);

// Height and width of viewport  of display
// console.log(
//   'Height/Width:',
//   document.documentElement.clientHeight,
//   document.documentElement.clientWidth
// );
// Scrolling///////////////////
// window.scrollTo(
//   s1coordinate.x + window.scrollX,
//   s1coordinate.y + window.scrollY,
// );

// Scrolling with behavior///////////////////
// window.scrollTo({
//   left: s1coordinate.left + window.scrollX,
//   top: s1coordinate.top + window.scrollY,
//   behavior: 'smooth',
// });

//   section1.scrollIntoView({ behavior: 'smooth' });
// });

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('Mouse Inter!');
// };

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => {
//   h1.removeEventListener('mouseenter', alertH1);
// }, 10000);

// h1.onmouseenter = function () {
//   alert('OnMouse Enter!');
// };

// h1.onmouseleave = function () {
//   alert('OnMouse Leave!');
// };

// h1.onclick = function () {
//   alert('OnMouse Leave!');
// };

///////////////////////////// Event propagation Capturing and Bubbling //////////////////////////////
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// ////// Bubbling
// document.querySelectorAll('.nav__link').forEach(link => {
//   link.addEventListener('click', function (e) {
//     this.style.backgroundColor = randomColor();
//   });
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });

///////////////////////////////////////
// Dom Traversing
// const h1 = document.querySelector('h1');

// //going downwards: children
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);

// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

//going upwards: Parent
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// console.log();
// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// Sideways : Siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// // for select all siblings go to parent then select all the siblings
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(el => {
//   if (h1 !== el) el.style.transform = 'scale(0.5)';
// });

// const getCount = function getCount(str) {
//   // const vowels = ['a', 'e', 'i', 'o', 'u'];
//   // const countNum = str
//   //   .split('')
//   //   .reduce((acc, cur) => (vowels.includes(cur) ? acc + 1 : acc), 0);

//   // return countNum;
//   const count = str.match(/[aeiou]/gi).length;
//   return count;
// };

// console.log(getCount('this is a string'));

//////////////////////////////////////////////
// The intersection observer API
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const obsOption = {
//   root: null,
//   // threshold: 0.1,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOption);
// observer.observe(section1);
