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

// book.call(swiss,...flightData);
const bookEW =book.bind(eurowings);
// bookEW(23,'Maine Coon');
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

const bookEW23 = book.bind(eurowings,23);
// bookEW23('Ratha');


lufthansa.planes = 300;
lufthansa.buyPlane = function (){
    console.log(this);
    this.planes++;
    console.log(this.planes);
}
document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(lufthansa));

const addTax = (rate,value)=>value+value*rate;

//addVAT = value =>value+value*0.23;
const addVAT = addTax.bind(null,0.23);
console.log(addVAT(200));

const addTaxRate = function (rate){
    return function (value){
        return value+value*rate
    }
}
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(200));
