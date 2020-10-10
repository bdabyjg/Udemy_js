
function retirement(retirementAge){
    var a = ' years left until retirement.';
    return function (yearOfBirth){
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);