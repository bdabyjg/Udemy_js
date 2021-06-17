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
}
// lufthansa.book(561,'Candela');
// console.log(lufthansa);

const eurowings = {
    airline:'Eurowings',
    iataCode:'EW',
    bookings: [],
};


const book = lufthansa.book;
// book.call(eurowings,45,"Meow");
// console.log(eurowings);

const swiss = {
    airline:'Swiss Air Lines',
    iataCode:'LX',
    bookings:[]
}

const flightData = [790,'Maine Coon'];
// book.apply("apply method:",swiss,flightData);
// console.log(swiss);
book.call(swiss,...flightData);
console.log("Modern Javascript:",swiss);
