


// const years = new Array(1991,1984,2008,2020);
// const calcAge = function (birthYear){
//     return 2037 - birthYear
// }
// const years = [1990, 1989, 1994, 1997 , 1983];
//
// const age1 = calcAge(years[0])
// const age2 = calcAge(years[years.length - 1]);
//
// console.log(age1,age2)
//
// const  ages = [calcAge(years[0]), calcAge(years[3]),calcAge(years[years.length - 1])]
// console.log(ages)
//



const friends = ['Michael','Steven','Peter'];
// console.log(friends);
//
// console.log(friends[0]);
// console.log(friends.length);
// console.log((friends[friends.length - 1]));//获取数组中最后一个元素的好方法

friends[2] = 'Jay';
// add elements
const newLength = friends.push('Peter');
friends.unshift('John');
// console.log(newLength);

//remove elements
// friends.pop();
// const popped = friends.pop()
// console.log(popped)
console.log(friends.indexOf('Steven'));  //查看元素在数组的位置
console.log(friends.includes('Steven')) //查看元素是否在数组里，适合写在判断里
if(friends.includes('Peter')){
    console.log('You have a friend called Peter.')
}

// console.log(friends)


