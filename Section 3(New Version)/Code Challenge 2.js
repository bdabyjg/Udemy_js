
const bills = [125, 555, 44];
const tips = [];



function calcTip(bills,tips){
    for (i=0;i<bills.length;i++){
        bills[i] <= 300&& bills[i] > 50 ?  tips[i] = bills[i] * 0.15 : tips[i]=bills[i]*0.2
        console.log(tips)}

}
console.log(calcTip(bills,tips))

//老师的写法 箭头函数
// const calcTip = bill => bill>=50 && bill<=300 ? bill * 0.15 : bill * 0.2;
