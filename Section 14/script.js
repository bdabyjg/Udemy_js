'use strict';
const Person = function (firstName,birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
}
const koala = new Person('Koala',1989);
console.log(koala);

console.log(koala instanceof Person);


Person.prototype.calcAge = function (){
    console.log(2037-this.birthYear);
}
// 1 New{} is created
// 2 function is called, this = {}
// 3 {} linked to prototype
// 4 function automatically return {}

// console.log(Person.prototype);
console.log(koala.__proto__);
console.log(koala.__proto__ === Person.prototype);

Person.prototype.species = 'Homo Sapiens';
console.log(koala.species);
console.log(koala.hasOwnProperty('firstName'));
console.log(koala.hasOwnProperty('species'));

console.log(koala.__proto__.__proto__);
console.dir(Person.prototype.constructor);

const arr = [3,5,4,7,3,0,8];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function (){
    return [...new Set(this)];
};
console.log(arr.unique());

console.dir(x=>x+1)