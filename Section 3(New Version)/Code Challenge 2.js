
const bills = [125, 555, 44];
const tips = [];
let percentage;


function calcTip(bills,tips,percentage){
    for (i=0;i<bills.length;i++){
        bills[i] >= 300 ? percentage = 0.2 : percentage = 0.15;
        tips[i] = bills[i] * percentage;
        console.log(tips)}

}
console.log(calcTip(bills,tips,percentage))

//老师的写法 箭头函数
const calcTip = bill => bill>=50 && bill<=300 ? bill * 0.15 : bill * 0.2;
