

var years = [1990,1965,1947,2005,1998];


// this function is used to receive an array and return a new array.
function arrayCal(arr,fn){
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i])) ; //push:inserts an element at the end of an array.
    }
    return arrRes;
}

function calculateAge(el){
    return 2020 - el ;
}

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el){
    if( el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67* el)) ;
    }else
        return -1;

}

var ages = arrayCal(years,calculateAge);  // 为什么calculateAge后面没有括号？因为加了括号意味着这个方法就call了，实际上这里需要的是先做完arraycal才call calculateAge。

var fullAges = arrayCal(ages, isFullAge);

var rates = arrayCal(ages,maxHeartRate);


console.log(ages);
console.log(rates);