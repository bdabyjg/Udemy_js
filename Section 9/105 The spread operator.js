'use strict';

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
    }
};

// const ingredients = [prompt("Let\'s make pasta! Ingredient 1?"),
//     prompt("Ingredient 2?"),
//     prompt("Ingredient 3?")]
// console.log(ingredients);
// restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);
// restaurant.orderPasta(...ingredients);

// const arr = [7,8,9];
// const newArr = [1,2,...arr];
// const aNarr = [1,2,arr];
// console.log(newArr);
// console.log(aNarr);
// console.log(...newArr);
//
// const newMenu = [...restaurant.mainMenu,'Gnocci'];
// console.log(newMenu);
//
// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// //join 2 arrays
// const menu =[...restaurant.mainMenu,...restaurant.starterMenu];
// console.log(menu);
//
// // Iterables: arrays,strings, maps,sets NOT objects;
// const str = 'Candela';
// const letters = [...str,'','Koala'];
// console.log(letters);
// console.log(...str);

//Objects
const newRestaurant = {foundedIn:1998,...restaurant,founder:'Guiseppe'}


const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante';
console.log(restaurantCopy.name);
console.log(restaurant.name);