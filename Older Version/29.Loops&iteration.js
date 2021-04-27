
//for loop
// for (var i = 0; i < 10; i++){
//     console.log(i)
// }

//i = 0, 0<10 is true, so log i to console,and i ++(自加1),第1个loop完成;
//此时i = 1, 1<10 is true, so log i to console,and i ++(自加1),第2个loop完成;
//.....
//此时i = 9, 9<10 is true, so log i to console,and i ++(自加1),第9个loop完成;
//此时i = 10, 1<10 is FALSE, exit the loop!



for (var i = 1; i <= 20; i+=2){
    console.log(i)
}



//对列表的元素进行遍历
// var john = ['John','Smith',1990,'designer',false];
// for (var i = 0;i<john.length;i++){
//     console.log(john[i])
// }


//while loop
// var i = 0;
// while(i<john.length){
//     console.log(john[i]);
//     i++;
// }


//continue & break iteration
var john = ['John','Smith',1990,'designer',false];
for (var i = 0;i<john.length;i++){
    if (typeof john[i]!== 'string') continue;
    console.log(john[i])
}

//Looping backwards从最后一位开始算起
var john = ['John','Smith',1990,'designer',false];
for (var i = john.length; i>=0;i--){
    console.log(john[i])
}