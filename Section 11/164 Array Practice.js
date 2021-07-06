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

const bankDepositSum = accounts.flatMap(acc=>acc.movements).filter(mov=>mov>0).reduce((sum,cur)=>sum+cur,0);
console.log(bankDepositSum);

// const numDeposits1000 = accounts.flatMap(acc=>acc.movements).filter(mov=>mov>=1000).length;
const numDeposits1000 = accounts.flatMap(acc=>acc.movements).reduce((count,cur)=>cur>=1000?count++:count,0);
console.log(numDeposits1000);

const {deposits,withdrawals} =
    accounts.flatMap(acc=>acc.movements).reduce((sums,cur)=>{
    // cur >0 ?sums.deposits +=cur :sums.withdrawals+=cur;
    sums[cur>0?'deposits':'withdrawals']+=cur;
    return sums;
}, {deposits:0,withdrawals:0})
console.log(deposits,withdrawals);

//
const converTitleCase = function (title){
    const capitalize = str=>str[0].toUpperCase()+str.slice(1);
    const exceptions = ['a','an','but','the','or','on','in','with','and'];
    const titleCase = title.toLowerCase()
        .split(' ').
        map(word=>exceptions.includes(word)?word: capitalize(word)).join(' ');
    return capitalize(titleCase);
}

console.log(converTitleCase('this is a nice title'));
console.log(converTitleCase('this is a LONG title but not too long'));
console.log(converTitleCase('here is another title with an EXAMPLE'));
