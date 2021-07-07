'use strict';

const bookings =[];
//ES6可以直接在函数后面的括号里写
const createBooking = function (flightNum,numPassengers=1,price=199*numPassengers){

    //ES5 old style
    // numPassengers = numPassengers || 1;
    // price = price || 199;
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH124');
createBooking('LH304',2);

