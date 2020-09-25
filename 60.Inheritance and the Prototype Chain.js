

// var john = {
//     name:'John',
//     yearOfBirth:1999,
//     job:'teacher'
// };

//constructor
var Person = function (name,yearoOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearoOfBirth;
    this.job = job;

}
Person.prototype.calculateAge= function (){
    console.log((2020-this.yearOfBirth));
};
Person.prototype.lastName = 'Smith';

var john = new Person('John',1999,'teacher');

var jane = new Person('Jane',1994,'Designer');

var mark = new Person('Mark',1958,'retired');

john.calculateAge();
jane.calculateAge();

console.log(john.lastName);