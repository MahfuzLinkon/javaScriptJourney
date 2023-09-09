'use strict';

// function describeCountry(countryName, capitalCity, population) {
//   return `${countryName} has ${population} million people and it's capital city is ${capitalCity}`;
// }

// const country1 = describeCountry('Bangladesh', 'Dhaka', 160);
// console.log(country1);
// const country2 = describeCountry('India', 'Deli', 500);
// console.log(country2);

// Function Declarations vs. Expressions

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }
// const chinaPercentage = percentageOfWorld1(1441);
// console.log(chinaPercentage);

// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };
// const chinaPercentage2 = percentageOfWorld2(200000);
// console.log(chinaPercentage2);

// Arrow Functions
// const percentageOfWorld3 = (population) => {
//   return (population / 7900) * 100;
// };
// const bangladeshPopulation = percentageOfWorld3(1441);
// console.log(bangladeshPopulation);

// Functions Calling Other Functions

// const percentageOfWorld3 = (population) => {
//   return (population / 7900) * 100;
// };
// const describePopulation = (country, population) => {
//   const populationPercentage = percentageOfWorld3(population);
//   return `${country} has ${population} million people, which is about ${populationPercentage} of the world.`;
// };

// const china = describePopulation('china', 1441);
// console.log(china);

// Introduction to Arrays
// const population = new Array(10, 1441, 332, 83);

// console.log(population.length === 4);
// const percentage = [
//   percentageOfWorld3(population[0]),
//   percentageOfWorld3(population[1]),
//   percentageOfWorld3(population[2]),
//   percentageOfWorld3(population[population.length - 1]),
// ];
// console.log(percentage);

// // Basic Array Operations (Methods)
// const neighbor = ['India', 'Nepal'];
// console.log(neighbor);
// neighbor.push('Utopia');
// console.log(neighbor);
// neighbor.pop();
// console.log(neighbor);

// if (!neighbor.includes('Germany')) {
//   console.log(`Probably not a central European country`);
// }

// neighbor[neighbor.indexOf('India')] = 'Bangladesh';

// console.log(neighbor);

// const mahfuz = {
//   firstName: 'Mahfuzur',
//   lastName: 'Rahman',
//   job: 'Programmer',
//   friends: ['Nokib', 'Jon', 'Beji'],
//   hasDrivingLicense: false,
//   birthYear: 1998,
//   calcAge: function () {
//     this.age = 2023 - this.birthYear;
//     return this.age;
//   },
//   getSummery: function () {
//     const summery = `${this.firstName} is a ${this.calcAge()} year old ${
//       this.job
//     }, and he has ${this.hasDrivingLicense ? 'a' : 'no'} driving license.`;
//     return summery;
//   },
// };

// const mahfuzInfo = `${mahfuz.firstName} has ${mahfuz.friends.length}, and his best friend name is ${mahfuz.friends[0]}.`;

// console.log(mahfuz.calcAge());
// // console.log(mahfuz.age);
// console.log(mahfuz.getSummery());

// const birthYear = [1988, 1999, 2000];
// const age1 = [];
// const age2 = [];

// for (let i = 0; i < birthYear.length; i++) {
//   age1.push(2023 - birthYear[i]);
// }
// console.log(age1);

// for (let i = birthYear.length - 1; i >= 0; i--) {
//   age2.push(2023 - birthYear[i]);
// }
// console.log(age2);
