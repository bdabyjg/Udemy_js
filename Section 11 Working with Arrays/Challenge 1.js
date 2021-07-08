'use strict'

// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];
const checkDogs = function (dogsJulia,dogsKate){
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0,1);
    dogsJuliaCorrected.splice(-2);
    const dogs = dogsJuliaCorrected.concat(dogsKate);

    dogs.forEach(function (age,i){
        if(age>=3){
            console.log(`Dog number ${i+1} is an adult, and is ${age} years old.`);
        }else {
            console.log(`Dog number ${i+1} is still a puppy.`);
        }
    })
};
checkDogs([3, 5, 2, 12, 7],[4, 1, 15, 8, 3]);



