
//
// for(let rep=1;rep<=10;rep++){
//     console.log(`Weight lift in ${rep} rounds.`)
// }

// const candelaArray = ['Candela', 'Maine Coon', ['Koala','Kitty','Ratha','Airou'], 'Steak']
// for(let i=candelaArray.length-1;i>=0;i--){
//     console.log((i,candelaArray[i]));
// }

// for(let exercise=1;exercise<4;exercise++){
//     console.log(`Starting exercise${exercise}`);
//     for (let rep=1; rep<6;rep++){
//         console.log(`Exercise ${exercise}:Lifting weight repetition ${rep}`)
//     }
// }


// const types = [];
//
//
// for(let i=0;i<candelaArray.length;i++){
//     //javaScirpt的向列表添加元素的方法，跟python的append不一样
//     // types.push(typeof candelaArray[i]);
//     // console.log(candelaArray[i],types[i]);
//     if(typeof candelaArray[i] !== 'string') continue;
//     console.log('ONLY STRINGS ',candelaArray[i], typeof candelaArray[i])
//
// }
// console.log('BREAKING WITH NUMBER')
// for(let i=0;i<candelaArray.length;i++){
//     if(typeof candelaArray[i] === 'number') break;
//     console.log(candelaArray[i], typeof candelaArray[i])
// }


// const years = [1991,2007,1969,2020];
// const ages = [];
//
// for(let i = 0;i<years.length;i++){
//     ages.push(2037-years[i]);
// }
// console.log(ages);

//While LOOP
// for(let rep = 1; rep<=10;rep++){
//     console.log(`Lifting weights repetition ${rep}`)
// }
//
// let rep = 1;
// while(rep<=10){
//     console.log(`WHILE Lifting weights repetition ${rep}`);
//     rep++;
// }

let dice = Math.trunc(Math.random()*6) +1;
while (dice !== 6){
    console.log(`You rolled a ${dice}.`);
}