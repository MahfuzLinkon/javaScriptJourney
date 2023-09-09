'use strict';

// const bookings = [];

// const createBooking = function (flightName, numPassenger = 1, price = 100) {
//   const booking = {
//     flightName,
//     numPassenger,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('ABD');
// createBooking('ABc', 5, 500);
// console.log(bookings);

// const flight = 'LH44';
// const mahfuz = {
//   name: 'Mahfuzur Rahman',
//   passport: 55545674567445,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'MH111';
//   passenger.name = 'Mr ' + mahfuz.name;

//   if (passenger.passport === 55545674567445) {
//     alert('You are check In!');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// checkIn(flight, mahfuz);
// console.log(flight);
// console.log(mahfuz);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000000);
// };

// newPassport(mahfuz);
// checkIn(flight, mahfuz);

// Higher Order function ***************************************

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...other] = str.split(' ');
//   return [first.toUpperCase(), ...other].join(' ');
// };

// const transform = function (str, fn) {
//   console.log(`Old String: ${str}`);
//   console.log(`Transform String: ${fn(str)}`);
//   console.log(`Transform by: ${fn.name}`);
// };

// transform('JavaScript is the best language!', upperFirstWord);
// transform('JavaScript is the best language!', oneWord);

// const high5 = function () {
//   console.log('😊');
// };

// document.body.addEventListener('click', high5);

// Function returning function  *****************************

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// Arrow Function
// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greetHey = greet('Hey');
// greetHey('Mahfuz');
// greet('Hello')('Jonas');

// call And Apply method

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  booking: [],
  book(name, flightNum) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// lufthansa.book('Mahfuzur Rahman', 222);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  booking: [],
};

// copping book method
const book = lufthansa.book;

// book.call(eurowings, 'Shuvo', 1111);

// book.call(lufthansa, 'Asharaf', 4546);

// const flightData = ['Alex', 777];

// using apply method
// book.apply(lufthansa, flightData);

// book.call(lufthansa, ...flightData);

// Using Bind Method
// const bookEW = book.bind(eurowings);

// bookEW('shaon', 111);

// console.log(lufthansa);
// console.log(eurowings);

// lufthansa.planes = 300;

// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application

// const addTex = (rate, value) => value + value * rate;
// console.log(addTex(0.1, 100));

// const addVATPG = addTex.bind(null, 0.23);

// console.log(addVATPG(100));
// console.log(addVATPG(200));

// challenge function return another function

// const addTex = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addTex = rate => value => value + value * rate;

// const addVat = addTex(0.1);
// console.log(addVat(100));

// immediately invoked function expression IIFE

// Normal Function
// const runOnce = function () {
//   console.log('This will never run again!');
// };
// runOnce();

// immediately invoked function
// (function () {
//   console.log('This will never run again!');
// })();

// // also for arrow function
// (() => console.log('This will never run again! to'))();

// Closures *************

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} Passenger.`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();

// console.dir(booker);

// Example 1
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 111;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);

// h();
// f();
// console.dir(f);

// Example 2

// const boardingPassenger = function (n, wait) {
//   const perGroup = n / 3;
//   setTimeout(function () {
//     console.log(`we are boarding all ${n} passenger`);
//     console.log(`There are 3 there groups, each with ${perGroup} passengers.`);
//   }, wait * 1000);
//   console.log(`We will start boarding in ${wait} seconds.`);
// };

// boardingPassenger(90, 3);
