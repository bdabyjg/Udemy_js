'use strict'

// const secureBooking = function (){
//     let passengerCount = 0;
//     return function (){
//         passengerCount ++;
//         console.log(`${passengerCount} passengers`);
//     }
// }
//
// const booker = secureBooking();
//
// booker();
// booker();
// console.dir(booker);

let f;
const g = function (){
    const a = 2;
    f = function (){
        console.log(a *2);
    }
};
const h = function (){
    const b = 100;
    f = function () {
        console.log(b * 2);
    }
}

g();
f();
h();
f();
console.dir(f);

const boardPassengers = function (n,wait){
    const perGroup = n/3;
    setTimeout(function (){console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);},wait*1000);
    console.log(`Will start boarding in ${wait} seconds`);
};
boardPassengers(180,3)

