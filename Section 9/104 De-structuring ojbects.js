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
  }
};
restaurant.orderDelivery({
  time:'22:30',
  address:'Via del Sole,21',
  mainIndex:2,
  starterIndex:1
})


const {name,openingHours,categories} = restaurant;
// console.log(name,openingHours,categories);

const {name:restaurantName,openingHours:hours,categories:tags} = restaurant
// console.log(restaurantName,hours,tags);

//Default values
const {menu=[],starterMenu:starters=[]} = restaurant;
// console.log(menu,starters);

//Mutating variables
let a =11;
let b = 34;
const  obj ={a:23,b:53,c:49};
({a,b}=obj);
// console.log(a,b);



//Nested objects
const {fri:{open:o,close:c}} = openingHours;
console.log(o,c);

