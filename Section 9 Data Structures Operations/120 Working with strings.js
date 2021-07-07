'use strict'

const airline = 'TAP Air Portugal';

//Fix capitalization in name
// const passenger = 'caNdEla';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

//Comparing email
const email = 'airou@mh.hub';
const loginEmail = '   Airou@mh.hub\n';
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

//Replacing
const priceGB = '288,98￡';
const priceUS = priceGB.replace('￡','$').replace(',','.');
// console.log(priceUS);
const announcement = 'All passengers come to boarding door 23. Boarding door 23!'
// console.log(announcement.replace('door','gate'));
// // 正则表达式：/ /g
// console.log(announcement.replace(/door/g,'gate'));


// Booleans
const plane = 'Airbus A320neo';
// console.log(plane.includes('A32'));
// console.log(plane.includes('Bad'));
// console.log(plane.startsWith('Air'));

const checkBaggage = function (items){
  const baggage = items.toLowerCase();
  baggage.includes('knife') || baggage.includes('gun')?console.log('You are NOT allowed on board'):console.log('Welcome')
}
// checkBaggage('I have a laptop, some food and a pocket Knife');
// checkBaggage('socks');
// checkBaggage('snacks and gun');

// console.log(airline.slice(4));
// console.log(airline.slice(4,7));

// console.log(airline.slice(0,airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ')+1));
// console.log(airline.slice(-2));
// console.log(airline.slice(1,-1));

const checkMiddleSeat = function (seat){
    //B E are middle seats
    const s = seat.slice(-1);
    s ==='B' || s ==='E' ? console.log('Middle seat') : console.log('lucky');
}

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('Candela'));
// console.log(typeof new String('Candela'));
// console.log(typeof new String('Candela').slice(1));

//拆分，通过+来拆分
// console.log('a+very+nice+string'.split('+'));

//split和join方法
const [firstName,lastName] = 'Airou Teostra'.split(' ');
const newName = ['Cat',firstName,lastName.toUpperCase()].join(' ');


//
const capitalizeName = function (name){
    const names = name.split(' ');
    const namesUpper = [];
    for(const n of names){
        //
        namesUpper.push(n.replace(n[0],n[0].toUpperCase()))
    }
     console.log(namesUpper.join(' '));
}


//Padding
const  message = 'Go to gate 23!';
//整个字符串的长度是25，自动加了11个加号
// console.log(message.padEnd(25,'+'));
// console.log('Teostra'.padStart(25,'+'));

const maskCreditCard = function (number){
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length,'*');
}
// console.log(maskCreditCard(493857802930583));
// console.log(maskCreditCard('590409093949400302394'));



//Repeat
const message2 = 'Bad weather.. All departures delayed';
console.log(message2.repeat(3));


const planesInLine = function (n){
    console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
}
planesInLine(2);
planesInLine(6);
