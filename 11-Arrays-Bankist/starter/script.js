'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// display movement(deposit or withdraws in frontend)
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  // sorting movements
  const moves = sort ? movements.slice().sort((a, b) => a - b) : movements;

  moves.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// Calculate and print total balance(movements)
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

// Calculate summary
const calcDisplaySummary = function (account) {
  const movements = account.movements;
  const income = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income}€`;

  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int, i, arr) => acc + int, 0);
  // .reduce((acc, int, i, arr) => {
  //   console.log(arr);
  //   return acc + int;
  // }, 0);
  labelSumInterest.textContent = `${Math.abs(interest)}€`;
};

// Creating username in account object
const createUsernames = function (accounts) {
  accounts.forEach(account => {
    account.username = account.owner
      .toLocaleLowerCase()
      .split(' ')
      .map((name, i) => name[0])
      .join('');
  });

  // const username = user
  //   .toLocaleLowerCase()
  //   .split(' ')
  //   .map((latter, i) => latter[0])
  //   .join('');
  // return username;
};
createUsernames(accounts);

const updateUI = function (currentAccount) {
  // display movements
  displayMovements(currentAccount.movements);

  // display balance
  calcDisplayBalance(currentAccount);

  // display summary
  calcDisplaySummary(currentAccount);
};

// login Event handler
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // display ul and welcome message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = '100%';
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginUsername.blur();
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  } else {
    console.log('Wrong Credential');
  }
});

// Transfer money
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const reviverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  // Clear transfer money input field
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();
  inputTransferTo.blur();

  if (
    reviverAcc &&
    amount > 0 &&
    currentAccount.balance >= amount &&
    reviverAcc.username !== currentAccount.username
  ) {
    // Transfer money
    currentAccount.movements.push(-amount);
    reviverAcc.movements.push(amount);
    // Update UI
    updateUI(currentAccount);
  }
});

// Loan Section
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});

// Delete Account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    console.log('deleted');

    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // delete Account
    accounts.splice(index, 1);
    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

// Sort Movements
let sortState = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sortState);
  sortState = !sortState;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // Slice
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-1));
// console.log(arr);

// // Splice
// console.log(arr.splice(2, 2));
// console.log(arr);

// // Reverse
// let arr2 = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr2.reverse());
// console.log(arr2);

// //concat
// const latter = arr.concat(arr2);
// console.log(latter);
// // another way using spreed operator
// console.log([...arr, ...arr2]);

// // Join
// console.log(latter.join(' - '));

// at method
// console.log(arr.at(-1));
// console.log(arr[0]);
// console.log(arr.slice(-1)[0]);

// if you use method chaining then at method is use full otherwise you can use bracket.

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement < 0) {
//     console.log(`Movement: ${i + 1} Withdraw: ${Math.abs(movement)}`);
//   } else if (movement > 0) {
//     console.log(`Movement: ${i + 1} Deposit: ${movement}`);
//   }
// }

// console.log('---------ForEach-----------');

// movements.forEach(function (movement, i, arr) {
//   if (movement < 0) {
//     console.log(`Movement: ${i + 1} Withdraw: ${Math.abs(movement)}`);
//   } else if (movement > 0) {
//     console.log(`Movement: ${i + 1} Deposit: ${movement}`);
//   }
// });

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// console.log('---------ForEach Map-----------');
// // Map
// currencies.forEach(function (value, key, map) {
//   console.log(`${key} : ${value}`);
// });

// // set

// const setCurrenciesUnique = new Set(['USD', 'BDT', 'EUR', 'BDT', 'EUR']);

// console.log(setCurrenciesUnique);

// setCurrenciesUnique.forEach(function (value, _, set) {
//   console.log(`${value}: ${value}`);
// });

// Array Map Method****************

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// const movementsUsd = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUsd);

// const movementDes = movements.map(
//   (movement, i) =>
//     `Movement: ${i + 1} ${movement > 0 ? 'Deposit' : 'Withdraw'}: ${Math.abs(
//       movement
//     )}`
// );

// console.log(movementDes);

// Array Filter method*************************
/*
 * Filter method return value into new array based on boolean(true/false)
 */

// const deposit = movements.filter(function (mov) {
//   return mov > 0;
// });

// const withdrawals = movements.filter(mov => mov < 0);

// console.log(movements);

// console.log(withdrawals);
// console.log(deposit);

// // Array reduce
// /*
//  * Array reduce sum the total array
//  * its take in function parameter accumulator, value, index, total array.
//  */
// const balance = movements.reduce((acc, value, i) => {
//   console.log(`Iteration ${i} : ${acc}`);
//   return acc + value;
// }, 0);

// console.log(balance);

// const maximumValue = movements.reduce((acc, value) => {
//   // console.log(acc);
//   if (acc > value) return acc;
//   else return value;
// }, movements[0]);

// console.log(maximumValue);

// // Array Find method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const firstWithdrawal = movements.find(mov => mov < 0);

// console.log(movements);
// console.log(firstWithdrawal);
// console.log(accounts);

// // const account = accounts.find(acc => acc.owner === 'Jessica Davis');

// const account = accounts.forEach(acc => {
//   if (acc.owner === 'Jessica Davis') {
//     console.log(acc);
//   }
// });

// Array Some Method ***********
// when any data fulfil the condition return true
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements.includes(-130));
// const anyDeposit = movements.some(mov => mov > 0);
// console.log(anyDeposit);

// Array Every Method *******************
// when all of the data fulfil the condition then return true. if not return false.
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// Flat and flatMap

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// // console.log(arr);
// // console.log(arr.flat());

// const arr2 = [[[1, 2], 3], [4, 5, 6], 7, 8];

// console.log(arr2);
// console.log(arr2.flat(2));

// // const overallBalance = accounts
// //   .map(acc => acc.movements)
// //   .flat()
// //   .reduce((acc, mov) => acc + mov, 0);

// // using flatMap
// const overallBalance = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov);

// console.log(overallBalance);

// Array Sort method

// const owner = ['Zach', 'Jonas', 'Martha', 'Adam'];
// console.log(owner);
// console.log(owner.sort());

// console.log(movements.sort());
// // movements.sort((a, b) => {
// //   if (a > b) {
// //     return 1;
// //   }
// //   if (a < b) {
// //     return -1;
// //   }
// // });

// movements.sort((a, b) => b - a);
// console.log(movements);

// Creating and filling array

// const arr = [1, 2, 3, 4, 5, 6, 7];

// const arr2 = new Array(1, 2, 3, 4, 5, 6, 7);

// console.log(arr2);
// // Array fill method
// const x = new Array(7);
// x.fill(1, 3, 5);
// console.log(x);

// // we can also fill pre define arr using fill
// arr.fill(22, 3, 5);
// console.log(arr);

// // Array form method

// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// const diceArray = Array.from(
//   { length: 100 },
//   () => Math.trunc(Math.random() * 6) + 1
// );
// console.log(diceArray);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);
// });

////////////////////////////////////////////////////////////////
// Array Practice
// 1.
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, cur) => sum + cur, 0);
// console.log(bankDepositSum);

// 2.
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
// console.log(numDeposits1000);

//////////////// Using Reduce Method //////////////////////////////
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
// console.log(numDeposits1000);

// /////////// Convert to object using reduce method //////////////
// const { deposit, withdrawal } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sum, cur) => {
//       // cur > 0 ? (sum.deposit += cur) : (sum.withdrawal += cur);
//       sum[cur > 0 ? 'deposit' : 'withdrawal'] += cur;
//       return sum;
//     },
//     { deposit: 0, withdrawal: 0 }
//   );
// console.log(deposit, withdrawal);

// // 4.
// // this is a nice title

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
