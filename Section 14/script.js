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

    static hey(){
        console.log('Hey there!');
    }
};
const jessica = new PersonCl('Jessica Davis',1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);


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
// console.log(account.movements);

const PersonProto = {
    calcAge(){
        console.log(2037- this.birthYear);
    },
    init(firstName,birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

const steven = Object.create(PersonProto);
// console.log(steven);
// console.log(steven.__proto__);
const  sarah = Object.create(PersonProto);
sarah.init('Sarah',1984);

//使用ES6的class
class CarCl{
    constructor (make,speed){
        this.make = make;
        this.speed = speed;
    };
    accelerate(){
        this.speed +=10;
        console.log(`${this.make} is going at ${this.speed}km/h.`);
    };
    brake(){
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed}km/h`);
    };
    get speedUS(){
        return this.speed/1.6;
    };
    set speedUS(speed){
        this.speed = speed*1.6;
    }
}

const ford = new CarCl('Ford',120);


//
const Student = function (firstName,birthYear,course){
    // this.firstName = firstName;
    // this.birthYear = birthYear;
    Person.call(this,firstName,birthYear);
    this.course = course;
};

Student.prototype = Object.create(Person.prototype)

Student.prototype.introduce = function (){
    console.log(`My name is ${this.firstName} and I study ${this.course}.`);
}
const mike = new Student('Mike',2000,'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();
console.log(mike.__proto__);