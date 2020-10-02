

var years = [1990,1965,1947,2005,1998];

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

function isFullAge(){

}

var ages = arrayCal(years,calculateAge);  // 为什么calculateAge后面没有括号？因为加了括号意味着这个方法就call了，实际上这里需要的是先做完arraycal才call calculateAge。
console.log(ages);