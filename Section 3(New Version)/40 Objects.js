
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
        console.log(this);
        return 2037 - this.birthYear
    }
};

console.log(Kitty.calcAge());

