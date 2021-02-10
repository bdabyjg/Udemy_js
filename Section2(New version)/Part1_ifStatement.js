

// const age = 14;
// const isOldEnough = age >=18;
//
// if(isOldEnough){
//     console.log('Sarah can start driving license ');
// }

const age = 15;
if (age>=18){
    console.log('Sarah can start driving license ');
}else{
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} year :)`);
}


const birthYear = 1992;
let century;
if (birthYear <=2000){
    century = 20;
}else{
    century = 21;
}

console.log(century);
