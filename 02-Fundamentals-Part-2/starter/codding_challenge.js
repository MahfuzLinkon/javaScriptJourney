'use strict';
// Coding Challenge #1

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// // console.log(calcAverage(3, 3, 3));

// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins >= 2 * avgKoalas) {
//     return `Dolphins win (${avgDolphins} vs. ${avgKoalas}).`;
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
//   } else {
//     return `Match draws!`;
//   }
// };

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// // const scoreDolphins = calcAverage(85, 54, 41);
// // const scoreKoalas = calcAverage(23, 34, 27);
// console.log('Dolphins Score: ' + scoreDolphins, 'Koalas Score: ' + scoreKoalas);

// const result = checkWinner(scoreDolphins, scoreKoalas);
// console.log(result);

// Coding Challenge #2

// const calcTips = (bill) => {
//   if (bill >= 50 && bill <= 300) {
//     return (bill * 15) / 100;
//   } else {
//     return (bill * 20) / 100;
//   }
// };

// const bills = [125, 555, 44];
// console.log(bills);
// const tips = [calcTips(bills[0]), calcTips(bills[1]), calcTips(bills[2])];
// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

// Coding Challenge #3

// const mark = {
//   fullName: 'Mark',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: 'John',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName} BMI (${mark.bmi}) is higher than ${john.fullName} (${john.bmi})`
//   );
// } else {
//   console.log(
//     `${john.fullName} BMI (${john.bmi}) is higher than ${mark.fullName} (${mark.bmi})`
//   );
// }

// Coding Challenge #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTips = (bill) => {
  if (bill >= 50 && bill <= 300) {
    return (bill * 15) / 100;
  } else {
    return (bill * 20) / 100;
  }
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTips(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

console.log(bills);
console.log(tips);
console.log(totals);

console.log(`---- Bonus Challenge ----`);

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calcAverage(totals));
console.log(calcAverage(tips));
