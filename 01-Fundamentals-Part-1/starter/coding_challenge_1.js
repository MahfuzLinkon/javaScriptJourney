// let markHeight = 1.88;
// let markWeight = 95;

// let johnHeight = 1.76;
// let johnWeight = 85;

// let markBMI = markWeight / markHeight ** 2;
// let johnBMI = johnWeight / johnHeight ** 2;

// let markHigherBMI = markBmi > johnBmi;

// if (markBMI > johnBMI) {
//   //   markHigherBMI = true;
//   console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
// } else {
//   //   markHigherBMI = false;
//   console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
// }

// console.log(markBmi, johnBmi, markHigherBMI);

// Equality Operators: == vs. ===

// const numNeighbors = Number(
//   prompt('How many neighbors country does your country have?')
// );
// if (numNeighbors === 1) {
//   console.log('Only 1 border');
// } else if (numNeighbors > 1) {
//   console.log('More than 1 border');
// } else {
//   console.log('No borders');
// }

// Logical Operators

// const language = 'english';
// const population = 20;
// const island = true;
// const country = 'Usa';

// if (language === 'english' && population < 50 && !island) {
//   console.log(`You should live in ${country}`);
// } else {
//   console.log(`${country} does not meet your criteria`);
// }

// const language = 'mandarin';

// switch (language) {
//   case 'chinese':
//   case 'mandarin':
//     console.log('MOST number of native speakers!');
//     break;
//   case 'spanish':
//     console.log('2nd place in number of native speakers');
//     break;
// }

// The Conditional (Ternary) Operator

// const population = 22;
// const mark = population > 33 ? 'above' : 'below';

// console.log(`Portugal's population is ${mark} average`);

const bill = 40;
const tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
