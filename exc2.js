var John_teamScore_ave = (89 + 120 + 103)/3;
var Mike_teamScore_ave = (116 + 94 + 123) /3;
var Mary_teamScore_ave = (97 + +134 + 105)/3;
console.log(John_teamScore_ave,Mike_teamScore_ave,Mary_teamScore_ave)


//想用switch语句，三个元素两两比较，没做出来
//看了视频  试着用去交集来做
// var teamScore_ave;
// switch(teamScore_ave){
//     case John_teamScore_ave > Mike_teamScore_ave &&John_teamScore_ave > Mary_teamScore_ave :
//         console.log('John\'s team wins with ' + John_teamScore_ave + ' points');
//         break;
//     case Mike_teamScore_ave > John_teamScore_ave && Mike_teamScore_ave > Mary_teamScore_ave :
//         console.log('Mike\'s team wins with ' + Mike_teamScore_ave + ' points');
//         break;
//     case Mary_teamScore_ave > John_teamScore_ave && Mary_teamScore_ave > Mike_teamScore_ave :
//         console.log('Mary\'s team wins with ' + Mike_teamScore_ave + ' points');
//         break;
//     default:
//         console.log('There is a draw.')
// }

if (John_teamScore_ave > Mike_teamScore_ave && John_teamScore_ave > Mary_teamScore_ave){
    console.log('John\'s team wins with ' + John_teamScore_ave + ' points');
}else if (Mike_teamScore_ave > John_teamScore_ave && Mike_teamScore_ave > Mary_teamScore_ave){
    console.log('Mike\'s team wins with ' + Mike_teamScore_ave + ' points');
}else if (Mary_teamScore_ave > John_teamScore_ave && Mary_teamScore_ave > Mike_teamScore_ave){
    console.log('Mary\'s team wins with ' + Mike_teamScore_ave + ' points');
}else {
    console.log('There is a draw.')
}