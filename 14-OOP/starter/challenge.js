'use strict';

/// Challenge 1
// const Car = function (make,speed){
//     this.make = make;
//     this.speed = speed;
// }

// Car.prototype.accelerate = function (){
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
// }

// Car.prototype.brake = function (){
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
// }

// const bmw = new Car('bmw',120);
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();

/// Challenge 2
// class CarCl {
//     constructor(make, speed){
//         this.make = make;
//         this.speed = speed;
//     }

//     accelerate(){
//         this.speed += 10;
//         console.log(`${this.make} is going at ${this.speed} km/h`);
//     }

//     brake(){
//         this.speed -= 5;
//         console.log(`${this.make} is going at ${this.speed} km/h`);
//     }

//     get speedUs(){
//         return this.speed /1.6;
//     }

//     set speedUs (speed){
//         this.speed = speed * 1.6;
//     }
// }

// const ford = new CarCl('Ford', 120);
// console.log(ford.speedUs);
// ford.accelerate();
// ford.accelerate();
// ford.accelerate();
// ford.accelerate();
// ford.speedUs = 50;

// console.log(ford);

////////////////////// Challenge 3
// const Car = function (make,speed){
//     this.make = make;
//     this.speed = speed;
// }

// Car.prototype.accelerate = function (){
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
// }

// Car.prototype.brake = function (){
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
// }

// const EV = function(make, speed, charge){
//     Car.call(this, make, speed);
//     this.charge = charge;
// }
// // Linking Property
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo){
//     this.charge = chargeTo;
// }

// EV.prototype.accelerate = function (){
//     this.speed += 20;
//     this.charge--;
//     console.log(`${this.make} is going to ${this.speed} km/h, with a charge of ${this.charge}`);
// }

// const tesla = new EV ('Tesla', 120, 23);

// tesla.chargeBattery(50);
// tesla.brake();
// tesla.accelerate();

///////////////////////////// Challenge 4 /////////////////////
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUs() {
    return this.speed / 1.6;
  }

  set speedUs(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCL extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge += chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going to ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCL('Rivian', 120, 23);
rivian.accelerate().brake().accelerate().chargeBattery(50).accelerate();
