

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
    }
}
john.calculateAge();