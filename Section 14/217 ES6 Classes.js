'use strict'



class PersonCl{
    constructor(fullName,birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Methods will be added to .prototype property
    calcAge(){
        console.log(2037-this.birthYear);
    }

    get age(){
        return 2037-this.birthYear;
    }

    set fullName(name){
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`)
    }

    get fullName(){
        return this._fullName;
    }

    static hey(){
        console.log('Hey there!');
    }

};
class studentCl extends PersonCl{
    constructor(fullName,birthYear,course) {
        // Always needs to happen first!
        super(fullName,birthYear);
        this.course = course;
    }
    introduce(){
        console.log(`My name is ${this.fullName}`);
    }

    calcAge(){
        console.log(`I'm ${2034-this.birthYear}`);
    }
};
const martha = new studentCl('Martha Jone',2000,'Maths')


///

const PersonProto = {
    calcAge(){
        console.log(2037-this.birthYear);
    },
    init(firstName,birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear
    }
}

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName,birthYear,course){
    PersonProto.init.call(this,firstName,birthYear);
    this.course = course;
}

///


