'use strict';
const flight = 'LI203';
const candela = {
    name:'Candela',
    passport:39489823,
}

const checkIn = function (flightNum,passenger){
    flightNum = 'LH999';
    passenger.name = 'Miss ' + passenger.name;
    if(passenger.passport === 39489823){
        alert('Check in');
    }else {
        alert('Wrong passport!')
    }
}
// checkIn(flight,candela);
console.log(flight);
console.log(candela);

// Is the same as doing..
const flightNum = flight;
const passenger = candela;

const newPassport = function (person){
    person.passport = Math.trunc(Math.random() * 10000000000);
}
newPassport(candela);
checkIn(flight,candela);
