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

//Use ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'abc');
// console.log('' || 'ken');
// console.log(0 || true);

// if (restaurant.orderPizza){
//     restaurant.orderPizza('mushrooms','spinach')
// }
//
// restaurant.orderPizza && restaurant.orderPizza('mushroom','spinach');

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);


