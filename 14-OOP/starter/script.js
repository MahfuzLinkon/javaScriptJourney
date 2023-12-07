'use strict';

// Constructor function
// const Person = function (firstName, birthYear){
//     // instance property
//     this.firstName = firstName;
//     this.birthYear = birthYear;

//     // never create method inside of constructor function
//     // this.calcAge = function (){
//     //     console.log(2023 - this.birthYear);
//     // }
// }

// const jonas = new Person ('Jonas', 1991);

// const mahfuz = new Person ('Mahfuz', 1998);
// console.log(jonas, mahfuz);

// // const x = 'ADH';
// // console.log(mahfuz instanceof Person);
// // console.log(x instanceof Person);

// /// Prototype
// // prototype method
// Person.prototype.calcAge = function (){
//     console.log(2023 - this.birthYear);
// }

// jonas.calcAge();
// mahfuz.calcAge();
// console.log(jonas.__proto__);

// // prototype property

// Person.prototype.species = 'Home Sapiens';

// console.log(jonas.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

///////////////// ES6 CLASS ///////////////////

// class PersonCl {
//     constructor(firstName, birthYear){
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
//     calcAge (){
//         console.log(2023 - this.birthYear);
//     }
// }

// const jessica = new PersonCl('Jessica', 2000);
// console.log(jessica);
// jessica.calcAge();

// console.log(jessica.__proto__ === PersonCl.prototype);

///////////////// Setters And Getters ///////////////////

// Obj
// const account = {
//     owner:'Mahfuz',
//     movements: [200,300,100],

//     get latest (){
//         return this.movements.slice(-1).pop();
//     },

//     set latest(mov){
//         this.movements.push(mov);
//     }
// }
// console.log(account.latest);
// account.latest = 50;
// console.log(account.latest);

// Class
// class PersonCl {
//     constructor(fullName, birthYear){
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }

//     get age (){
//         return 2037 - this.birthYear;
//     }

//     set fullName (name){
//         if(name.includes(' ')) this._fullName = name;
//         else alert('This is not full name');
//     }

//     get fullName (){
//         return this._fullName;
//     }
// }
// const jessica = new PersonCl('Jessica Davis', 2000);
// console.log(jessica.age);
// console.log(jessica.fullName);

// Inheritance Between classes and constructor
// const Person = function (firstName, birthYear){
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// }

// Person.prototype.calcAge = function (){
//     console.log(2037- this.birthYear);
// }

// const Student = function (firstName, birthYear, course){
//     // this.firstName = firstName;
//     // this.birthYear = birthYear;
//     Person.call(this,firstName, birthYear);
//     this.course = course;
// }

// // Linking Prototype
// // Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function (){
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
// }

// const mike = new Student('Mike', 2020, 'CSE');
// console.log(mike);
// // mike.calcAge();

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

//
// Inheritance Between Class ES6
// class PersonCl {
//     constructor(fullName, birthYear){
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }

//     get age (){
//         return 2037 - this.birthYear;
//     }

//     set fullName (name){
//         if(name.includes(' ')) this._fullName = name;
//         else alert('This is not full name');
//     }

//     get fullName (){
//         return this._fullName;
//     }
// }

// class StudentCl extends PersonCl {
//     constructor(fullName, birthYear, course){
//         super(fullName, birthYear);  // Always call super class first
//         this.course = course;
//     }
//     introduce(){
//         console.log(`My name is ${this.firstName} and I study ${this.course}`);
//     }
//     calcAge(){
//         console.log(`I am ${2037 - this.birthYear}`);
//     }
// }

// const martha = new StudentCl ('Marth Jon', 2012, 'CSE');

// martha.calcAge();

//
/////////////////////////  Another Class /////////////////////

// class Account {
//   // public field
//   locale = navigator.language;
//   // Private field
//   #movements = [];
//   #pin;
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//     // this._movements = [];
//     // this.locale = navigator.language;
//   }
//   // Protected Method
//   // _approvedLoan(val) {
//   //   return true;
//   // }

//   // public interface
//   requestLoan(val) {
//     if (this.#approvedLoan(val)) {
//       this.deposit(val);
//       return this;
//     }
//   }
//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }
//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }
//   getMovements() {
//     return this.#movements;
//   }

//   // Private method
//   #approvedLoan(val) {
//     return true;
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// console.log(acc1);
// // acc1.movements.push(225);
// acc1.deposit(100);
// acc1.withdraw(50);
// acc1.requestLoan(1000);
// console.log(acc1.getMovements());
// acc1.deposit(500).withdraw(500).requestLoan(500).deposit(1000);
// console.log(acc1.getMovements());

// // console.log(acc1.#movements);
