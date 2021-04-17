
const Mark = {
    firstName:'Mark',
    weight: 78,
    height: 1.69,
    BMIcalc:function (){
        this.BMI = this.weight/this.height**2 ;
        return this.BMI
    }
};

const John = {
    firstName:'John',
    weight: 92,
    height: 1.95,
    BMIcalc:function (){
        this.BMI = this.weight/this.height**2 ;
        return this.BMI
    }
}

function summary(){
  return John.BMI>Mark.BMI? `John's BMI is greater than Mark's.`:`Mark's BMI is greater than John's.`
}
console.log(summary());





