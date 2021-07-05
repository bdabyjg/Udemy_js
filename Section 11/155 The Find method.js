'use strict'
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const firstWithdrawal = movements.find(mov=> mov<0);
// console.log(movements);
// console.log(firstWithdrawal);


// console.log(accounts);
// const account=accounts.find(acc=>acc.owner === 'Jessica Davis');
// console.log(account);


//Equality
// console.log(movements.includes(-130));


//Some methods
//Condition
// console.log(movements.some(mov=>mov===-130));
const anyDeposits = movements.some(mov=>mov>5000);
// console.log(anyDeposits);


//Every methods
// console.log(movements.every(mov=>mov>0));

//Separate callback
const deposit = mov=> mov>0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));


// Flat and map methods
// const arr=[[1,2,3],[4,5,6],7,8];
// console.log(arr.flat());
//
// const arrDeep =[[[1,2],3],[4,[5,6]],7,8];
// console.log(arrDeep.flat(2));

const accountMovements = accounts.map(acc=>acc.movements);
// console.log(accountMovements);

//
const allMovements = accountMovements.flat();
// console.log(allMovements);
const overallBalance = allMovements.reduce((acc,mov)=>acc+mov,0);
// console.log(overallBalance);
const overallBl = accounts.flatMap(acc=>acc.movements).reduce((acc,mov)=>acc+mov,0);
// console.log(overallBl);


//return < 0, A,B(keep order)
//return > 0, B,A(switch order)
//Ascending
movements.sort((a,b)=>{
    if (a>b)
        return 1;
    if (b>a)
        return -1;
})
console.log(movements);
