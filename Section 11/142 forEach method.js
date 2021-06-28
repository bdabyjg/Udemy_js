'use strict'
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//forEach with arrays
for(const [i,movement] of movements.entries()){
    if(movement>0){
        console.log(`Movement ${i+1}: You deposited ${movement}`);
    }else {
        console.log(`Movement ${i+1}:You withdrew ${Math.abs(movement)}`);
    }
};
console.log('-----------FOREACH----------');
movements.forEach(function (mov,i,array){
    if(mov>0){
        console.log(`Movement ${i+1}:You deposited ${mov}`);
    }else {
        console.log(`Movement ${i+1}:You withdrew ${Math.abs(mov)}`);
    }
});

// forEach with maps
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);
currencies.forEach(function (value,key,map){
    console.log(`${key}: ${value}`);
})

//set
const currenciesSet = new Set(['USD','GBP','USD','EUR'
]);
console.log(currenciesSet);
currenciesSet.forEach(function (value,_,set){
    console.log(`${value}: ${value}`);
})
