

const hasDriversLicense = true;
const hasGoodVision = false;


console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasGoodVision);


const shouldDrive = hasDriversLicense && hasGoodVision;
if(shouldDrive){
    console.log('Sarah is able to drive.')
}else {
    console.log('Someone else should drive')
}


const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired);

if(hasDriversLicense && hasGoodVision && !isTired){
    console.log('Sarah is able to drive.')
}else {
    console.log('Someone else should drive.')

}