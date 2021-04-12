
// Creating Objects
// const Candela = {
//     firstName : 'Candela',
//     lastName :'Koala',
//     type: 'Maine Coon',
//     favorite : 'Meats',
//     friends:['Palico','Tigrex','Ratha']
// }
// console.log(Candela.favorite);
// console.log(Candela['type']);
//
// const nameKey = 'Name';
// console.log(Candela['first' + nameKey]);
// console.log(Candela['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Candela? Choose between firstName,lastName,type,favorite');
// console.log(Candela[interestedIn]);
// if(Candela[interestedIn]){
//     console.log(Candela[interestedIn])
// }else{
//     console.log('Wrong request!')
// }
//
// Candela.location = 'New York';
// console.log(`${Candela.firstName} has  ${Candela.friends.length} friends, and her best friend is called ${Candela.friends[0]} `);

// Objects Operation
const Kitty = {
    firstName:'Toadette',
    birthYear:1989,
    job:'Developer',
    friends:['Koala','Maine Coon','Airou','Palico','Ratha'],
    hasDriveLicense:false,
    calcAge:function(){
        this.age = 2037 - this.birthYear;
        return this.age;
    }
};
// console.log(Kitty.calcAge());
// console.log(Kitty.age);


const Candela = {
    firstName: 'Candela',
    type:'Maine Coon',
    friends: ['Koala','Kitty','Ratha','Airou'],
    favorite:'Steak',
    hasDriveLicense: false,
    getSummary:function (){
        return (`${this.firstName} is a ${this.type}, whose favorite food is ${this.favourite}, and ${this.firstName} have ${this.hasDriversLicense?' the' : 'no'} drivers license.`)
    }


}
console.log(Candela.getSummary());


