
// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = [1990, 1969, 1948];


console.log(name[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[5] = 'Mary';
console.log(names);

// Different data types
var john = ['John','Smith',1990,'teacher',false];
john.push('blue');  //在数组john的最末尾添加一个叫blue的元素
john.unshift('Mr.'); //在数组john的最首位添加一个叫Mr.的元素
john.pop();  //移走数组john最末尾的一个元素
john.shift() //移走数组john首位元素

john.indexOf(1990);  //查询1990位于数组john的哪个位置
//如果查询的元素不在数组里，则返回的值为-1


var isDesigner = john.indexOf('designer') ===-1 ? 'John is NOT a designer' : 'John IS a designer'
console.log(isDesigner)
