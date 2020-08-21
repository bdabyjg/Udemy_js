var john = {
    firstName:'John',
    lastName:'Smith',
    birthYear:1990,
    family:['Jane','Mark','Bob','Emily'],
    job:'teacher',
    isMarried:false,
    calcAge:function (birthYear){
        // return 2020 - this.birthYear;  //"this.birthYear" means john.birthYear,注意this 用法
        //this是js语言的一个关键字，它是函数运行时，在函数体内部生成的一个对象，只能在函数体内部使用
        this.age = 2020 - this.birthYear;
    }

};

john.calcAge();   //调用对象里的函数方法，跟Python差不太多
console.log(john);

