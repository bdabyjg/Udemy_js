

// var johnbills = [124,48,268,180,42];
//
// var tipsjohn = function(johnbills){
//     var percentage;
//     for (var i = 0; i < johnbills.length;){
//         if (johnbills[i] < 50){
//             percentage = .2;
//         }else if(johnbills[i] > 50 && johnbills[i] < 200){
//             percentage = .15
//         }else {
//             percentage = .1
//         }
//         return percentage * johnbills;
//     }
//
// }
// //难点：怎样像append一样把每一项计算的结果添加到空列表里
// var tips = [tipsjohn(johnbills[0]),tipsjohn(johnbills[1]),tipsjohn(johnbills[2]),tipsjohn(johnbills[3]),tipsjohn(johnbills[4])];
// var total = [johnbills[0]+tips[0],johnbills[1]+tips[1],johnbills[2]+tips[2],johnbills[3]+tips[3],johnbills[4]+tips[4]]


//解答
var john = {
    fullname:'John Smith',
    bills:[124,48,268,180,42],
    calcTips:function (){
        this.tips = [];
        this.total = [];

        for(var i = 0;i < this.bills.length;i++){
            // 确定percentage
            var percentage;
            var bill = this.bills[i];
            if(bill < 50){
                percentage = .2;
            }else if(bill >= 50 && bill < 200){
                percentage = .15;
            }else {
                percentage = .1;
            }


            // Add result to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.total[i] = bill + bill * percentage;
        }
    }
}

var mark = {
    fullname:'Mark Miller',
    bills:[77,475,110,45],
    calcTips:function (){
        this.tips = [];
        this.total = [];

        for(var i = 0;i < this.bills.length;i++){
            // 确定percentage
            var percentage;
            var bill = this.bills[i];
            if(bill < 100){
                percentage = .2;
            }else if(bill >= 100 && bill < 300){
                percentage = .1;
            }else {
                percentage = .25;
            }


            // Add result to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.total[i] = bill + bill * percentage;
        }
    }
}
function calcAverage(tips){
    var sum = 0;
    for(var i = 0; i <tips.length; i++){
        sum = sum + tips[i];
        //这里的逻辑是这样的：如果sum=[2,6,4],那么起始为sum=0,2+0=2,接下来sum=2,2+6=8,接下来sum=8,8+4=12,最后结果就是12
    }
    return sum / tips.length;
}

john.calcTips();
mark.calcTips();
john.average = calcAverage(john.tips);
//将计算平均tips的结果存储起来，john的tips存储到john.average这个变量里。
//括号里为什么是john.tips？因为上面定义的对象中已经是this.tips.
mark.average = calcAverage(mark.tips);

console.log(john,mark);

if(john.average > mark.average){
    console.log(john.fullname + '\'s family pays higher tips, with an average of $' + john.average);
}else if(mark.average > john.average){
    console.log(mark.fullname + '\'s family pays higher tips, with an average of $' + mark.average);
}