

// console.log(this);

calculateAge(1995);

function calculateAge(year){
    console.log(2020- year);
    console.log(this);
}


var john = {
    name: 'john',
    yearOfBirth: 1990,
    calculateAge: function () {
        console.log(this);
        console.log(2020 - this.yearOfBirth);


        // function innerFunction(){
        //     console.log(this);
        // }
        // innerFunction();
    }
}
john.calculateAge();

var mark = {
    name: 'Mark',
    yearOfBirth: 1986,

}
//borrowing method
mark.calculateAge = john.calculateAge;
mark.calculateAge();