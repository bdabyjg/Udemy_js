'use strict';

const car = function (make,speed){
    this.make = make;
    this.speed = speed;
};
car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h.`);
}
car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h.`);
}

const EV = function (make,speed,charge){
    car.call(this,make,speed);
    this.charge = charge;
}

//这一步是关键
EV.prototype = Object.create(car.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
}
EV.prototype.accelerate = function () {
    this.speed +=20;
    this.charge --;
    console.log(`${this.make} is going at ${this.speed}km/h, with a charge of ${this.charge}.`);
}

const tesla = new EV('Tesla',120,23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.accelerate();