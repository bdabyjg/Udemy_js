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
//Does not work such as:
//book(56,'Someone')

// book.call(eurowings,45,"Meow");
// console.log(eurowings);

const swiss = {
    airline:'Swiss Air Lines',
    iataCode:'LX',
    bookings:[]
}

const flightData = [790,'Maine Coon'];
//Apply 除了第一个是指派的this是那里的对象，后面传入的就是数组
book.apply(swiss,flightData);
//ModernJavascript不怎么用apply，多用call。De-structuring一样变成了数组
book.call(swiss,...flightData);
// book.apply("apply method:",swiss,flightData);
// console.log(swiss);

console.log("Modern Javascript:",swiss);
