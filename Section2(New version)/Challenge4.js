
const bills = [275,40,430];
let tips = [];
let percentage;
let total = [];


function calculateTips(){
    for (i in bills,i = 0, i <bills.length,i++){
        bills>=300 ? percentage = 0.2 : percentage = 0.15;
        tips = bills* percentage;
        total = bills + tips;
        console.log(tips,total)
    }
};
console.log(`tips is ${tips} and total is ${total}`)