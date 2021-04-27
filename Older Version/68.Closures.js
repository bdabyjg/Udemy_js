
// function retirement(retirementAge){
//     var a = ' years left until retirement.';
//     return function (yearOfBirth){
//         var age = 2020 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }
// }
//
// var retirementUS = retirement(66);
// var retirementIceland = retirement(67);
// var retirementGermany = retirement(65);
//
// retirementUS(1990);
// retirementGermany(1990);
// retirementIceland(1990);

function interviewQuestion(job){
    return function (name){ //比较一下66课的代码，66完全是写的一整套if else语句，而使用闭包则是把一套if else打包成了这个return function了
        if(job === 'designer'){
            console.log(name + ', can you please explain what UX design is?');

        }else if(job === 'teacher'){
            console.log('What subject do you teacher,' + name + '?');

        }else {
            console.log('Hello ' + name + ', what do you do?');

        }
    }
}

interviewQuestion('teacher')('John')