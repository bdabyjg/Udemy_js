'use strict'

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Map method
const euroToUsd = 1.1;
// const movementsUSD = movements.map(function (mov){
//     return Math.trunc(mov * euroToUsd);
// });
//改写成箭头函数
const movementsUSD = movements.map( (mov)=>
    Math.trunc(mov * euroToUsd)
);

// console.log(movements);
// console.log(movementsUSD);
//  const movementUSDfor = [];
//  for(const mov of movements)movementUSDfor.push(Math.trunc(mov*euroToUsd));
//  console.log(movementUSDfor);

const movementsDescriptions = movements.map((mov,i)=>
    `Movement ${i+1}: You ${mov>0 ? `deposited` : `withdrew`} ${Math.abs(mov)}`
);
// console.log(movementsDescriptions);

//Filter method
const deposits = movements.filter(function (mov){
    return mov>0;
});
// console.log(movements);
// console.log(deposits);

//filter写法和下面方法等价
// const depositsFor = [];
// for(const mov of movements) if(mov>0)depositsFor.push(mov);

const withdrawals = movements.filter(mov=>mov<0);
// console.log(withdrawals);

//Reduce method
const balance = movements.reduce(function (acc,cur,i,arr){
    // console.log(`Iteration:${i}: ${acc}`);
    return acc+cur;
},0);
// console.log(balance);
// let balance2 =0;
// for(const mov of movements)balance2+=mov;
// console.log(balance2);


//
const max = movements.reduce((acc,mov)=>{
    if(acc>mov)return acc;
    else return mov;
},movements[0]);
console.log(max);
