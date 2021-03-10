
const calcAge = function (birthYear){
    return 2037 - birthYear;
};

const  yearUntilRetirement = function (birthYear,firstName){
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    }else {
        console.log(`${firstName} has already retired.`);
        return  -1;
    }

    // return `${firstName} retires in ${retirement} years`;
}

console.log(yearUntilRetirement(1950,'To'))
console.log(yearUntilRetirement(1996,'To'))