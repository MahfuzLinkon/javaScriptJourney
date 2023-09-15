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

/////////////////////// Smooth Scrolling ////////////////////////////
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

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

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('Mouse Inter!');
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => {
  h1.removeEventListener('mouseenter', alertH1);
}, 10000);

// h1.onmouseenter = function () {
//   alert('OnMouse Enter!');
// };

// h1.onmouseleave = function () {
//   alert('OnMouse Leave!');
// };

// h1.onclick = function () {
//   alert('OnMouse Leave!');
// };
