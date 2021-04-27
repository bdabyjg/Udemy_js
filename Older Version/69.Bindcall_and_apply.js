
var john = {
    name:'John',
    age:29,
    job:'teacher',
    presentation:function(style,timeOfday){
        if(style === 'formal'){
            console.log('Good ' + timeOfday + ', Ladies and gentlemen! I\'m '+ this.name + ',I\'m a '+
                this.job + ' and I\'m '+this.age + ' years old.');
        }else if(style === 'friendly'){
            console.log('Hey! What\'s up? I\'m '+this.name + ',I\'m a '+
                this.job + ' and I\'m '+this.age + ' years old. Have a nice ' + timeOfday +'.');
        }
    }
}
var emily = {
    name: 'Emily',
    age: 36,
    job: 'designer'
};

john.presentation('formal','morning');
john.presentation.call(emily,'friendly', 'afternoon');  // method bowrrowing, actually borrowed the method from john to use it here on the Emily object.

// john.presentation.apply(emily,['friendly','afternoon'])  apply方法是适用于传入数组（列表）

var johnFriendly = john.presentation.bind(john,'friendly');  //bind方法
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily,'formal');
emilyFormal('afternoon');

//年龄计算，使用bind方法sample
var years = [1990,1959,1938,2004,1996];
function  arrayCalc(arr,fn){
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}
function  calculateAge(el){
    return 2020- el;
}
function isFullage(limit,el){
    return el >= limit;
}

var ages = arrayCalc(years,calculateAge);
var fullJapan = arrayCalc(ages,isFullage.bind(this,20));

console.log(ages);
console.log(fullJapan);