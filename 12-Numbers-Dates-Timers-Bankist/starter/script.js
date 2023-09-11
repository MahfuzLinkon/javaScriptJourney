'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

// Formate Movements Date
const formateMovDates = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const dayPassed = calcDaysPassed(new Date(), date);

  if (dayPassed === 0) return 'Today';
  if (dayPassed === 1) return 'Yesterday';
  if (dayPassed <= 7) return `${datePassed} Ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth()}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  const option = {
    // hour: 'numeric',
    // minute: 'numeric',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    // weekday: 'narrow',
  };
  return Intl.DateTimeFormat(locale, option).format(date);
};

// Formate currency according to country
const formateCurrency = function (value, locale, currency) {
  const formattedBalance = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
  return formattedBalance;
};

// display movement(deposit or withdraws in frontend)
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  // sorting movements
  const moves = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  moves.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    //Movements date
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formateMovDates(date, acc.locale);

    // // Formate movement using Intl.NumberFormate()
    // const formattedMov = new Intl.NumberFormat(acc.locale, {
    //   style: 'currency',
    //   currency: acc.currency,
    // }).format(mov);

    // Html template
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${formateCurrency(
            mov,
            acc.locale,
            acc.currency
          )}</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// Calculate and print total balance(movements)
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  // labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
  labelBalance.textContent = formateCurrency(
    acc.balance,
    acc.locale,
    acc.currency
  );
};

// Calculate summary
const calcDisplaySummary = function (account) {
  const movements = account.movements;
  const income = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  // labelSumIn.textContent = `${income.toFixed(2)}€`;
  labelSumIn.textContent = formateCurrency(
    income,
    account.locale,
    account.currency
  );

  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  // labelSumOut.textContent = `${Math.abs(out.toFixed(2))}€`;
  labelSumOut.textContent = formateCurrency(
    out,
    account.locale,
    account.currency
  );

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int, i, arr) => acc + int, 0);
  // .reduce((acc, int, i, arr) => {
  //   console.log(arr);
  //   return acc + int;
  // }, 0);
  // labelSumInterest.textContent = `${Math.abs(interest.toFixed(2))}€`;
  labelSumInterest.textContent = formateCurrency(
    interest,
    account.locale,
    account.currency
  );
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
  displayMovements(currentAccount);

  // display balance
  calcDisplayBalance(currentAccount);

  // display summary
  calcDisplaySummary(currentAccount);
};
/////////////////// LogOut Timer ///////////////////////////
const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    labelTimer.textContent = `${min} : ${sec}`;
    if (time === 0) {
      clearInterval(timer);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = 'Log in to get started';
    }
    time--;
  };

  let time = 120;
  tick();

  // set interval function
  const timer = setInterval(tick, 1000);
  return timer;
};

//////////////////////////////////////////////// login Event handler ////////////////////////////
let currentAccount, timer;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === +inputLoginPin.value) {
    // display ul and welcome message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginUsername.blur();
    inputLoginPin.blur();

    // Update time
    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth()}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    ////////////////// Date Time formate using internationalization ///////////////////////////////////////////////
    const now = new Date();
    const option = {
      // hour: 'numeric',
      // minute: 'numeric',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      // weekday: 'narrow',
    };
    // const local = navigator.language;
    // console.log(local);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      option
    ).format(now);
    // Logout timer

    // clearing the timer for another account login
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();
    // Update UI
    updateUI(currentAccount);
  } else {
    console.log('Wrong Credential');
  }
});

// Transfer money
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
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

    //update Date
    currentAccount.movementsDates.push(new Date().toISOString());
    reviverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
    // Reset logOut timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

// Loan Section
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());
      // Update UI
      updateUI(currentAccount);

      // Reset logOut timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
  }
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});

// Delete Account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === +inputClosePin.value // + will convert string to number
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
/////////////////////////////////////////////////
// LECTURES

// // Parsing
// console.log(Number.parseInt('30px', 10));
// console.log(Number.parseFloat('30.5rem'));

// // isNaN
// console.log(Number.isNaN(+'e20'));

// // isFinite
// console.log(Number.isFinite(50));
// console.log(Number.isFinite(10 / 0));

// // isInteger
// console.log(Number.isInteger(10.0));

// Random Number Between Tow Number
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;

// console.log(randomInt(9, 12));

// labelBalance.addEventListener('click', function () {
//   const x = [...document.querySelectorAll('.movements__row')].forEach(
//     (row, i) => {
//       if (i % 3 === 0) {
//         row.style.backgroundColor = 'orangered';
//       }
//     }
//   );
//   console.log(x);
// });

// Date time
// const now = new Date();
// // console.log(now);

// // console.log(new Date('Sep 07 2023 20:06:14'));
// // console.log(new Date('December 24, 2015'));

// console.log(new Date(account1.movementsDates[0]));
// console.log(new Date(2037, 10, 19, 15, 23, 50));

// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// const calcDaysPassed = (date1, date2) =>
//   Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

// const datePassed = calcDaysPassed(
//   new Date(2037, 10, 19),
//   new Date(2037, 10, 9, 15)
// );
// console.log(datePassed);

/////////////////////////////////// Intl.NumberFormate() ////////////////////////////////
// const num = 10005454.65;
// const option = {
//   style: 'currency',
//   // unit: 'mile-per-hour',
//   currency: 'EUR',
// };
// console.log(new Intl.NumberFormat('en-US', option).format(num));
// console.log(new Intl.NumberFormat('en-GB', option).format(num));
// console.log(new Intl.NumberFormat('ar-SY', option).format(num));
// console.log(new Intl.NumberFormat('bn-BD', option).format(num));

// const countSheeps = function (arrayOfSheep) {
//   // TODO May the force be with you
//   let count = 0;
//   arrayOfSheep.forEach(sheep => {
//     if (sheep === true) {
//       count += 1;
//     }
//   });
//   return count;
// };

// const test1 = countSheeps([
//   true,
//   true,
//   true,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   true,
//   false,
//   true,
//   false,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   false,
//   true,
//   true,
// ]);

// console.log(test1);

/////////////////////////////// Set Timeout ///////////////////////////////

// const ingredients = ['olives', 'spinach'];
// const pizzaTimer = setTimeout(
//   function (ing1, ing2) {
//     console.log(`Here is your pizza with ${ing1} and ${ing2}`);
//   },
//   3000,
//   ...ingredients
// );
// console.log('Waiting...');
// if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

//////////////////////////////// Set Interval //////////////////////////
// setInterval(() => {
//   const now = new Date();
//   // console.log(`${now.getHours()}:${now.getMinutes()}: ${now.getSeconds()}`);
//   console.log(
//     Intl.DateTimeFormat('bn-BD', {
//       hour: '2-digit',
//       minute: '2-digit',
//       second: '2-digit',
//     }).format(now)
//   );
// }, 1000);
