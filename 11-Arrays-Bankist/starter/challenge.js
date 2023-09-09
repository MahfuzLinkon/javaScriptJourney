'use strict';
// Challenge 1

// const dogsJulia = [9, 16, 6, 8, 3];
// const dogsKate = [10, 5, 6, 1, 4];

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);

//   console.log(dogsJuliaCorrected);

//   const dogs = [...dogsJuliaCorrected, ...dogsKate];
//   console.log(dogs);

//   dogs.forEach((value, index) => {
//     if (value >= 3) {
//       console.log(
//         `Dog number ${index + 1} is adult and is ${value} years old.`
//       );
//     } else {
//       console.log(`Dog number ${index + 1} is still a puppy`);
//     }
//   });
// };

// checkDogs(dogsJulia, dogsKate);

// Challenge 2

// const calcAverageHumanAge = function (ages) {
//   //   const humanAge = ages.map((age, i) => {
//   //     if (age <= 2) {
//   //       return age * 2;
//   //     } else if (age > 2) {
//   //       return 16 + age * 4;
//   //     }
//   //   });

//   //   const humanAges = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
//   //   console.log(humanAges);

//   //   const adults = humanAges.filter(age => age >= 18);
//   //   console.log(adults);

//   //   const humanAgeAvg = adults.reduce(
//   //     (acc, age, i, arr) => acc + age / arr.length,
//   //     0
//   //   );

//   // using method chaining
//   const humanAgeAvg = ages
//     .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
//   return humanAgeAvg;
// };

// Challenge 3

// const calcAverageHumanAge = ages =>
//   ages
//     .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

/////////////////////////// Challenge 4 ////////////////////////////////

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);
console.log(dogs);

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating to ${
    dogSarah.curFood > dogSarah.recommendedFood ? 'much' : 'little'
  }.`
);

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')} dogs eat too little!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// 6.

// const checkOk = function (dog) {
//   dog.curFood > dog.recommendedFood * 0.9 &&
//     dog.curFood < dog.recommendedFood * 1.1;
// };

const checkEatingOk = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

console.log(dogs.some(checkEatingOk));

// 7 .
const eatingOk = dogs.filter(checkEatingOk);
console.log(eatingOk);

// 8.
const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);
