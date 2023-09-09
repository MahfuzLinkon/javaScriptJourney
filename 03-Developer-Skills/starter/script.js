// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Find amplitude of give temperature a array

const temperature = [15, 40, 21, -6, 'error', 7, -10, -1];
const temperature2 = [15, 5, 7, 10, 9, 8, -15];
// find max value
// find min value
// find system error and deal with it

// const calcAmplitude = function (temps) {
//   let currentTemp = temps[0];
//   let max = currentTemp;
//   let min = currentTemp;

//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== 'number') continue;
//     if (max < temps[i]) max = temps[i];
//     if (min > temps[i]) min = temps[i];
//     // console.log(temps[i]);
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcAmplitude(temperature);
// console.log(amplitude);

// const calcAmplitude = function (temp1, temp2) {
//   const temps = temp1.concat(temp2);
//   let currentTemp = temps[0];
//   let max = currentTemp;
//   let min = currentTemp;

//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== 'number') continue;
//     if (max < temps[i]) max = temps[i];
//     if (min > temps[i]) min = temps[i];
//     // console.log(temps[i]);
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcAmplitude(temperature, temperature2);
// console.log(amplitude);

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let printData = '... ';
  for (let i = 0; i < arr.length; i++) {
    printData += `${arr[i]} in ${i + 1} days ... `;
  }
  //   console.log(printData);
  return printData;
};

console.log(printForecast(data1));
