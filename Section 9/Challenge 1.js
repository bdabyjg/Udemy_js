const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },

};
const [players1,players2]=game.players;
console.log(players1,players2);

const[gk,...fieldPlayers]=players1
console.log(gk,fieldPlayers);

//3.如何获取列表中的列表 Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1,...players2];
console.log(allPlayers);


//4.
const players1Final = [...players1,'Thiago', 'Coutinho','Perisic'];
console.log(players1Final);


//5.
const {odds:{team1,x:draw,team2}} = game;
console.log(team1,draw,team2);


//6.
const printGoals = function (...players){
    console.log(players);
    console.log(`${players.length} goals were scored.`)
}
// printGoals('Davies','Muller','Lewandowski','Kimmich');
printGoals(...game.scored);
