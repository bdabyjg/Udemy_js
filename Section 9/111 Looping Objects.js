'use strict'

const openingHours= {
    Thu: {
        open: 12,
        close: 22,
    },
    Fri: {
        open: 11,
        close: 23,
    },
    Sat: {
        open: 0, // Open 24 hours
        close: 24,
    },
}
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours,
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    orderDelivery:function ({starterIndex,mainIndex,time,address}){
        console.log(`Order received.
    ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
    will be delivered to ${address} at ${time}`);
    },
    orderPasta:function (ing1,ing2,ing3){
        // console.log(`Here is your pasta with ${ing1},${ing2},${ing3}`)
    },
    orderPizza:function (mainIngredient,...otherIngredient){
        // console.log(mainIngredient);
        // console.log(otherIngredient);
    }
};


const properties = Object.keys(openingHours);
// console.log(properties);
// console.log(properties.length);

let openStr = `We are open on ${properties.length} days:`;
for (const day of properties){
    // console.log(day);
   openStr += `${day},`;
}
// console.log(openStr);

//Property VALUES
const values = Object.values(openingHours);
console.log(values);


//Entire object
const entires = Object.entries(openingHours);
// console.log(entires);
for (const [key,{open,close}] of entires){
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}
