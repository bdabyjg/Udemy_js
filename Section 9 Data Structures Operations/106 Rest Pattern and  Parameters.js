'use strict'
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    orderDelivery:function ({starterIndex,mainIndex,time,address}){
        console.log(`Order received.
    ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
    will be delivered to ${address} at ${time}`);
    },
    orderPasta:function (ing1,ing2,ing3){
        console.log(`Here is your pasta with ${ing1},${ing2},${ing3}`)
    },
    orderPizza:function (mainIngredient,...otherIngredient){
        console.log(mainIngredient);
        console.log(otherIngredient);
    }
};
restaurant.orderPizza('mushroom','onion','olives','pastrami')

// Spread, because on RIGHT side of =
const ar = [1,2,...[3,4]];

//REST, because on LEFT side of =
const [a,b,...others] = [1,2,3,4,5];
// console.log(a,b,others);

const [pizza,,risotto,...otherFood]=[...restaurant.mainMenu,restaurant.starterMenu]
// console.log(pizza,risotto,otherFood);

//Objects
const {sat,...weekdays} = restaurant.openingHours;
// console.log(weekdays);

const add = function(...numbers){
   let sum = 0;
   for(let i = 0;i<numbers.length;i++)sum += numbers[i];
   // console.log(sum);
}
add(2,3);
add(4,6,8,3);

const x= [34,64,2];
add(...x);
