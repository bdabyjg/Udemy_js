
calculateAge(1974);
function calculateAge(year){
    console.log(2020 - year);

}


// retirement(1982);
var retirement = function (year){
    console.log(65-(2020-year));
}
//一个函数赋值给变量 是不可以全局定义的,因此这里会报错
console.log(age);
var age = 23;

function foo(){
    var age = 65;
    console.log(age);
}

foo();
console.log(age);



