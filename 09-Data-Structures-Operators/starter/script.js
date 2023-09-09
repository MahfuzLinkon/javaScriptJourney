'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Old school ******
  // openingHours: openingHours,

  // ES6 enhance Object literals ********
  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Old school ******
  // orderDelivery: function ({ time, address, mainIndex, starterIndex }) {
  //   console.log(
  //     `Order received! ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} will deliver to ${address} at ${time}`
  //   );
  // },

  // ES6 enhance Object literals ********
  orderDelivery({ time, address, mainIndex, starterIndex }) {
    console.log(
      `Order received! ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} will deliver to ${address} at ${time}`
    );
  },
};

// restaurant.orderDelivery({
//   time: '4.00',
//   address: 'LA',
//   mainIndex: 1,
//   starterIndex: 2,
// });

// let [first, second] = restaurant.categories;
// console.log(first, second);

// // switching variables
// [first, second] = [second, first];
// console.log(first, second);

// console.log(restaurant.order(2, 0));

// const [starter, main] = restaurant.order(2, 0);

// console.log(starter, main);

// const nested = [2, 3, [6, 7]];

// const [nested1, , [nested2, nested3]] = nested;

// console.log(nested1, nested2, nested3);

// Spread operator

// console.log(...restaurant.categories);
// const newMenu = [...restaurant.mainMenu, 'Alu'];
// console.log(newMenu);

// spread object;

// const newObj = { ...restaurant };
// newObj.name = 'Abd';

// console.log(newObj);

// rest patten

// const [a, b, ...other] = [1, 2, 3, 4, 5];

// console.log(a, b, other);

// const add = function (...number) {
//   let sum = 0;
//   for (let i = 0; i < number.length; i++) {
//     sum += number[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(2, 3, 5, 6);
// add(2, 3, 5, 6, 7, 8);

// const numberArr = [12, 3, 15];

// add(...numberArr);

// short-circuiting ( && || ) operator

// const res1 = {
//   name: 'Pizz Burg',
//   numGuest: 0,
// };

// const res2 = {
//   name: 'Pizz Burg',
//   owner: 'Mahfuz',
// };
// Or Assignment operator
// res1.numGuest = res1.numGuest || 10;
// res2.numGuest = res2.numGuest || 10;

// res1.numGuest ||= 10;
// res2.numGuest ||= 10;

//nullish assignment operator(null/ undefine)
// res1.numGuest ??= 10;
// res2.numGuest ??= 10;

// // And Assignment operator
// res1.owner &&= '<Ano>';
// res2.owner &&= '<Ano>';

// console.log(res1);
// console.log(res2);

////// For of loop **********************

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// // for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   // console.log(item);
//   console.log(`${i + 1}: ${el}`);
// }

//  Optional chaining ES6 **********************
// console.log(restaurant.openingHours.mon.open);
// console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'Closed';
//   console.log(`On ${day}, we open at ${open}`);
// }
// // Method
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist!');
// console.log(restaurant.orderRezato?.(0, 1) ?? 'Method does not exist!');

// const users = [
//   {
//     name: 'Mahfuz',
//     age: 26,
//   },
// ];

// console.log(users[0]?.name ?? 'User Array is empty!');

// Looping over object **********************

// // property name
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // property value
// const values = Object.values(openingHours);
// // Entries object
// const objectEntries = Object.entries(openingHours);

// for (const [key, { open, close }] of objectEntries) {
//   console.log(`We are open on ${key} at ${open} and close at ${close}`);
// }

// Sets ************************

// const orderSet = new Set(['Pizza', 'Pasta', 'Burger', 'Burger']);

// console.log(orderSet.has('Pizza'));
// orderSet.add('Soup');
// orderSet.delete('Burger');
// // console.log(orderSet);

// const staff = ['waiter', 'Manager', 'Chef', 'waiter', 'Chef'];

// const staffUnique = [...new Set(staff)];

// // console.log(staffUnique);
// console.log(new Set(staff).size);

//  Maps **************************************

// const restaurantMap = new Map();

// restaurantMap.set(1, 'hello');
// restaurantMap.set(2, 'i am two.');
// restaurantMap.set(document.querySelector('h1'), 'Header');

// console.log(restaurantMap.has(1));
// restaurantMap.delete(1);
// restaurantMap.clear();
// console.log(restaurantMap.size);
// console.log(restaurantMap);

// question ans Map

// const question = new Map([
//   ['question', 'What is the best programming language in the world ?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct answer!'],
//   [false, 'False, Try again!'],
// ]);

// console.log(question.get('question'));

// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }
// // const answer = Number(prompt('Your answer?'));
// const answer = 3;
// console.log(question.get(answer === question.get('correct')));

// //  Convert Object to Map
// const hourMap = new Map(Object.entries(openingHours));
// console.log(hourMap);

// // Convert Map to array
// console.log([...question]);

// console.log([...question.keys()]);
// console.log([...question.values()]);

// working with string ***************************

const airline = 'TAP Air Portugal';

const plane = 'A320';
// console.log(plane[3]);
// console.log('SBC'[0]);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal')); // index of method is case sensitive

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(1, -1));

// comparing email from user input ******************

// const email = 'hello@hello.com';
// const logInEmail = '   HellO@heLLo.com  \n';

// // const normalizedEmailVar = logInEmail.toLowerCase().trim();

// const normalizedEmail = function (email) {
//   return email.toLowerCase().trim();
// };

// console.log(email === normalizedEmail(logInEmail));

// // string replacing
// const priceGB = '288,97€';
// const priceUS = priceGB.replace(',', '.').replace('€', '$');
// console.log(priceUS);

// const announcements =
//   'All passenger please come to boarding door 23. Boarding door 23!';

// console.log(announcements.replaceAll('door', 'gate'));
// console.log(announcements.replace(/door/g, 'gate'));

// *includes
// *startWith
// *endWith

// // practice exercise
// const checkBaggage = function (item) {
//   const baggage = item.toLowerCase();
//   if (baggage.includes('gun') || baggage.includes('knife')) {
//     console.log('You cannot abort to plane!');
//   } else {
//     console.log('welcome abort');
//   }
// };

// checkBaggage('I have mobile, and a Knife.');
// checkBaggage('I have mobile, and a gun.');
// checkBaggage('I have mobile, and a snacks.');

// split ***********************

// console.log('a+very+nice+string'.split('+'));
// // split and join
// const [firstName, lastName] = 'Mahfuzur Rahman'.split(' ');
// const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const nameUppercase = [];
//   for (const n of names) {
//     // nameUppercase.push(n[0].toUpperCase() + n.slice(1));
//     // another away
//     nameUppercase.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(nameUppercase.join(' '));
// };

// capitalizeName('jessica ann smith');
// capitalizeName('mahfuzur rahman');

// padding ***********************
// padStart
// padEnd

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const lastNumber = str.slice(-4);
//   console.log(lastNumber.padStart(str.length, '*'));
// };

// maskCreditCard(16472534);
// maskCreditCard('45551212185524451');
