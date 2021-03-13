// const Dolphins = [44, 23, 71];
// const Koalas = [65, 54, 49];
//
// function calcAverage(Dolphins, Koalas) {
//     let dolphinsAverage = Dolphins.reduce / Dolphins.length;
//     let koalasAverage = Koalas.reduce / Koalas.length;
//     console.log(dolphinsAverage)
//     console.log(koalasAverage)
// }


const calcAverage = (a,b,c) =>(a+b+c)/3;

const avgDolphins = calcAverage(44,23,71);
const averKoalas = calcAverage(65,54,49);

console.log(avgDolphins,averKoalas);

const Winner = function (avgDolphins,avgKoala){
    if(avgDolphins>= 2* avgKoala){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoala})`)
    }else if (avgKoala>= 2* avgDolphins){
        console.log(`Koalas win (${avgKoala} vs.${avgDolphins} )`)
    }else {
        console.log('No team wins.')
    }
}

Winner(avgDolphins,averKoalas);

