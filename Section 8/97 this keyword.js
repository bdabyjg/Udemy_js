'use strict'

// console.log(this);
//
// const calcAge = function(birthYear){
//     console.log(2037 - birthYear);
//     console.log(this);
// }
// calcAge(1991);
//
//
// const calcAgeArrow = birthYear =>{
//     console.log(2037 - birthYear);
//     console.log(this);
// }
// calcAgeArrow(1991);

const Koala = {
    year: 1989,
    calcAge:function (){
        console.log(this);
        console.log(2037 - this.year);
    }
}
Koala.calcAge();

const rilakkuma = {
    year: 2005,
}
rilakkuma.calcAge = Koala.calcAge;
rilakkuma.calcAge();
