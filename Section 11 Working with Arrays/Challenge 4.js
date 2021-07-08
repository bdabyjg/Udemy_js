'use strict'

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
];

//1.
dogs.forEach(dog=>(dog.recFood=Math.trunc(dog.weight **0.75*28)));
console.log(dogs);


// 2.Find the owner
const dogSarah = dogs.find(dog=>dog.owners.includes('Sarah'));
console.log(`Sarah's dog eating ${dogSarah.curFood>dogSarah.recFood ?'too much':'little'}.`);


//3
const ownerEatTooMuch = dogs.filter(dog=>dog.curFood>dog.recFood).flatMap(dog=>dog.owners);
console.log(ownerEatTooMuch);

const ownerEatTooLittle = dogs.filter(dog=>dog.curFood<dog.recFood).flatMap(dog=>dog.owners);
console.log(ownerEatTooLittle);


//4 Output the strings
console.log(`${ownerEatTooMuch.join(' and ')}'s dog eat too much!`);
console.log(`${ownerEatTooLittle.join(' and ')}'s dog eat too little!`);


//5
console.log(dogs);
console.log(dogs.some(dog=>dog.curFood> dog.curFood));

//6 Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
const checkEatingOkay = dog=>dog.curFood>dog.recFood*0.9 && dog.curFood<dog.recFood*1.1;
console.log(dogs.some(checkEatingOkay));
console.log(dogs.filter(checkEatingOkay));

//8. sort it by recommended food
const dogSorted = dogs.slice().sort((a,b)=>a.recFood - b.recFood);
console.log(dogSorted);
