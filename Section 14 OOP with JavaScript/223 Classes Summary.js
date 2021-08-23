'use strict'
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

class Student extends Person{
    university = 'Princeton';
    #studyHours = 0;
    #course;
    static  numSubjects = 10;

    constructor(fullName,birthYear,startYear,course) {
        super(fullName,birthYear);
        this.startYear = startYear;
        this.#course = course;
    }
    introduce(){
        console.log(`I study ${this.#course} at ${this.university}`);
    }
    study(h){
        this.#makeCoffee();
        this.#studyHours += h;
    }
    #makeCoffee(){
        return 'Here\'s a coffee for you.'
    }
    get testScore(){
        return this._testScore;
    }
    set testScore(score){
        this._testScore = score <= 20? score :0;
    }
    static printCurriculum(){
        console.log(`There are ${this.numSubjects} subjects.`);
    }

}

const student = new Student('Toadette',2008,2030,'Computer Science')