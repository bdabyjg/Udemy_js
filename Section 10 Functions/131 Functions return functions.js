'use strict'

const greet = function (greeting){
    return function (name){
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('Candela');
greet('Meow')('Candela');

// Arrow function
const greetArr = greeting => name =>console.log(`${greeting} ${name}`);
