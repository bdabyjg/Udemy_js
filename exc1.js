// var massJohn, massMark, heightJohn, heightMark;
// massJohn = 79;
// massMark = 87;
// heightMark = 1.74;
// heightJohn = 1.82;

// var BMIMark = massMark / (heightMark * heightMark);
// var BMIJohn = massJohn / (heightJohn * heightJohn );
// console.log(BMIJohn,BMIMark); 

// var markHigherBMI = BMIJohn > BMIMark;
// console.log('Is Mark\'s BMI higer than John\'s?' + markHigherBMI);


var massJohn, massMark, heightJohn, heightMark;
massJohn = 79;
massMark = 87;
heightMark = 1.74;
heightJohn = 1.82;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn );

if(BMIMark > BMIJohn){
    console.log('Mark\'s BMI is higher than John\'s.')
}else{
    console.log('John\'s BMI is higher thant Mark\'s.')
}