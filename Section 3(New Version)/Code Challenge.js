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

const averDolphins = calcAverage(44,23,71);
const averKoalas = calcAverage(65,54,49);

console.log(averDolphins,averKoalas);

const Winner = function (averDolphins,avgKoala){
    if(averDolphins>= 2* avgKoala){
        console.log(`Dolphins win (${averDolphins} vs. ${avgKoala})`)
    }else if (avgKoala>= 2* averDolphins){
        console.log(`Koalas win (${avgKoala} vs.${averDolphins} )`)
    }else {
        console.log('No team wins.')
    }
}

Winner(averDolphins,averKoalas);

