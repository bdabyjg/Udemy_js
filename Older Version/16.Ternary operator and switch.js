//


var firstName = 'John';
var age = 22;

// age >= 18  ? console.log(firstName + ' drinks beer.')
// : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer':'juice';
/** 
 * 含义：1.执行判断 age和18的大小关系，如果age比18大，返回的结果为true,反之是false;
 *      2.把true或者false的结果赋值给drink，也就是说，drink是一个布尔值的量，只有true和false两种可能；
 *      3.如果drink值为true,则执行冒号前的语句，即返回beer;如果drink值为false,则执行冒号后面的语句，即'juice'；
 *      4. x ? a : b的结构均如此：
 *          - x的结果最终必须是true 或者 false;
 *          - 如果x的结果是true, 执行冒号前面的a，
 *          - 如果x的结果是false，执行冒号后面的b。
*/
console.log(drink);


//和上面等价的if语句写法
// if (age >= 18){
//     var drink = 'beer';
// }else{
//     var drink = 'juice';
// }



//switch ... default语句：

var job = 'cop';
switch(job){
    case 'teacher':
        console.log(firstName + ' teaches kids how to code. ');
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon. ');
    case 'designer':
        console.log(firstName + ' designs beautiful websites. ');
        break;
    default:
        console.log(firstName + ' does something else. ');
}

switch(true){
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >=13 && age <20:
        console.log(firstName + ' is a is a teeanager.');
        break;
    case age > 20 && age <30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a is a man.');
}