'use strict'
const weekdays = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

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

const menu = [...restaurant.starterMenu,...restaurant.mainMenu];

//WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
for(const day of days){
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0,1)??'Methods does not exist');
console.log(restaurant.orderRisotto?.(0,1)??'Methods does not exist')


//Arrays
const users = [
    {name:'Rathaloes',
    email:'Rathaloes@mh.com'}
];
console.log(users[0]?.name??'User array empty');

// for..A of B可以理解为“对于B中的A来说……”
// for (const item of menu) console.log(item);
// for (const item of menu.entries()){
//     console.log(`${item[0]+1}:${item[1]}`);
// }
//上述de-structuring更好的方式:
// for(const [i,el] of menu.entries()){
//     console.log(`new ways: ${i+1}:${el}`);
// }

// console.log([...menu.entries()]);

