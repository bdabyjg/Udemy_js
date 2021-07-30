'use strict';
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}
const koala = new Person('Koala', 1989);
// console.log(koala);
//
// console.log(koala instanceof Person);


Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
}
// 1 New{} is created
// 2 function is called, this = {}
// 3 {} linked to prototype
// 4 function automatically return {}

// console.log(Person.prototype);

// console.log(koala.__proto__ === Person.prototype);

Person.prototype.species = 'Homo Sapiens';
// console.log(koala.species);
// console.log(koala.hasOwnProperty('firstName'));
// console.log(koala.hasOwnProperty('species'));
//
// console.log(koala.__proto__);
// console.log(koala.__proto__.__proto__);
// console.log(koala.__proto__.__proto__.__proto__);
// console.dir(Person.prototype.constructor);

const arr = [3, 5, 4, 4, 3, 4, 5, 8];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function () {
    return [...new Set(this)];
};
// console.log(arr.unique());

const Car = function (make,speed){
    this.make = make;
    this.speed = speed;
}
const bmw = new Car('BMW',120);
const mercedes = new Car('Mercedes',95);

Car.prototype.accelerate = function (){
  this.speed +=10;
  console.log(`${this.make} is going at ${this.speed}km/h.`);
};
Car.prototype.brake = function (){
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
};

class PersonCl{
    constructor(fullName,birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
    }

    // Methods will be added to .prototype property
    calcAge(){
        console.log(2037-this.birthYear);
    }

    get age(){
        return 2037-this.birthYear;
    }

    set fullName(name){
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`)
    }

    get fullName(){
        return this._fullName;
    }
};
const jessica = new PersonCl('Jessica Davis',1996);
// console.log(jessica);
jessica.calcAge();
console.log(jessica.age);


const account = {
    owner: 'Ratha',
    movements:[200,300,530,120],

    get latest(){
        return this.movements.slice(-1).pop()
    },
    set latest(mov){
        this.movements.push(mov);
    }
}
account.latest = 50;
console.log(account.movements);