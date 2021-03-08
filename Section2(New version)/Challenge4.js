
const bills = [275,40,430];
let tips = [];
let percentage;
let total = [];


function calculateTips(bills,tips,percentage,total){
    for (i = 0;i <bills.length;i++){
        bills[i]>=300 ? percentage = 0.2 : percentage = 0.15;
        tips[i] = bills[i]* percentage;
        total[i] = bills[i] + tips[i];

    };
    console.log(tips,total)
};
calculateTips(bills,tips,percentage,total);
// console.log(`tips is ${tips} and total is ${total}`)
