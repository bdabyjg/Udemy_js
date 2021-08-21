'use strict'
//Public fields

//Public methods
//Private methods

class Account{
    //Public fields(instances)
    locale = navigator.language;
    //Private fields(#)
    #movements = [];
    #pin;


    constructor(owner,currency,pin){
        this.owner = owner;
        this.currency = currency;
        //protected property
        this.#pin = pin;
        // this.locale = navigator.language;
        console.log(`Thanks for opening an account, ${owner}.`);
    }

    //Public methods
    //Public interface
    getMovments(){
        return this.#movements;
    }

    deposit(val){
        this.#movements.push(val);
        return this;
    }
    withdraw(val){
        this.deposit(-val);
        return this;
    }


    requestLoan(val){
        if(this._approveLoan(val)){
            this.deposit(val);
            console.log(`Loan approved `);
        }
        return this;
    }

    _approveLoan(val){
        return true;
    }

    static helper(){
        console.log('Helper');
    }
}
const acc1 = new Account('Candela','USD',2333);
console.log(acc1);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovments());

acc1.deposit(300).deposit(500).withdraw(32);
console.log(acc1.getMovments());