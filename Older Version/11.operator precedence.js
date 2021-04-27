var now = 2020;
var yearJohn = 2005;
var fullAge = 18;

// muiltiple operators 
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);


//Grouping(括号的优先级是最高的)
var yearAlice = 1989;
var ageAlice = now - yearAlice;
var ageMark = 35;
var average = (ageAlice + ageMark)/2;
console.log(average) 

//Muiltiple assignments
var x,y;
x =y = (3 + 5) * 4 - 6; // 8 * 4 -6
console.log(x, y);
// 顺序不是从左往右，而是从右往左。


//应该是自操作
x *= 2;
console.log(x)
x += 10;
console.log(x)