

// const calcAge2 = function(birthYear){
//     return 2037 - birthYear;
// }


// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 =  calcAge3(1998);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) =>{
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement(1993,'JSON'));