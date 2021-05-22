'use strict';



// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
}
const arr = [2,3,4]
const a = arr[0];
const b = arr[1];
const c = arr[2];
//上面方式通过一项一项地修改非常慢

const [x,y,z] = arr;
console.log(x,y,z);