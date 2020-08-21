var John={
    name:'John Smith',
    mass:69,
    height:1.79,
    BMIcal:function (){

        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    },

};
var Mark={
    name: 'Mark Brown',
    mass:83,
    height:1.82,
    BMIcal:function (){

        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    },
};
John.BMIcal();
Mark.BMIcal();
console.log(Mark.BMIcal(),John.BMIcal())

if (John.BMI >Mark.BMI ){
    console.log(john.name + 'has a higher BMI of ' + john.BMI);
}else if(Mark.BMI > John.BMI){
    console.log(Mark.name + 'has a higher BMI of ' + Mark.BMI);
} else {
    console.log('They have the same BMI.');
}
