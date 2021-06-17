'use strict'

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum,name){
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({flight:`${this.iataCode} ${flightNum}`, name});
    }
};
const eurowings = {
    airline:'Eurowings',
    iataCode:'EW',
    bookings: [],
};
const book = lufthansa.book;
const swiss = {
    airline:'Swiss Air Lines',
    iataCode:'LX',
    bookings:[]
};


book.bind(eurowings);

