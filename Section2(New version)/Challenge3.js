

const Dolphins = [97,112,101];
const Koalas = [109,95,123 ];

const scoreDolphins = (Dolphins[0]+Dolphins[1]+Dolphins[2])/Dolphins.length;
const scoreKoalas = (Koalas[0]+Koalas[1]+Koalas[2])/Koalas.length;

console.log(scoreDolphins,scoreKoalas);

// if(scoreKoalas > scoreDolphins){
//     console.log("Koalas🐨 win!")
// }else if(scoreKoalas < scoreDolphins){
//     console.log("Dolphins win!")
// }else if(scoreDolphins == scoreKoalas){
//     console.log('Both win the trophy!')
// }




if(scoreKoalas > scoreDolphins && scoreKoalas >= 100){
    console.log("Koalas🐨 win!")
}else if(scoreKoalas < scoreDolphins && scoreDolphins >= 100){
    console.log("Dolphins win!")
}else if(scoreDolphins == scoreKoalas){
    console.log('Both win the trophy!')
}