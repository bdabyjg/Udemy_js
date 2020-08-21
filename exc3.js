function tipsCal(bill){
    var percentage;
    if (bill < 50){
        percentage = 0.2;
    } else if (bill >= 50 && bill < 200){
        percentage = 0.15;
    } else {
        percentage = 0.1;
    }
    return percentage * bill;
}
console.log(tipsCal(200))
var bills = [124,48,268];
var tips = [tipsCal(bills[0]),tipsCal(bills[1]),tipsCal(bills[2])];
var totalcost = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];

console.log(tips,totalcost);