
var a = 23;
var b = a;
a = 46;
console.log(a)
console.log(b)


var obj1 = {
    name:'John',
    age:20
};
var  obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);


var age = 39;
var obj = {
    name: 'Mark',
    city:'Lisbon'
};

function change(a,b){
    a = 28;
    b.city = 'LA';
}
change(age,obj);
console.log(age);
console.log(obj.city)