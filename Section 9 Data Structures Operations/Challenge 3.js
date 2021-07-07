'use strict'

const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);


//1.
console.log(gameEvents.values());
const events = [...new Set(gameEvents.values())];
console.log(events);

//2.
gameEvents.delete(64);
console.log(gameEvents);

//3.
//获取数组最后一位  pop（）
const time = [...gameEvents.keys()].pop();
console.log(`An event happened, on average, every ${time/gameEvents.size} minutes`)

//4.
for(const [min,game] of gameEvents){
    // if(min<= 45)console.log(`[FIRST HALF] ${min}:${game}`)
    // else console.log(`[SECOND HALF] ${min}:${game}`)
    min<= 45 ? console.log(`[FIRST HALF] ${min}:${game}`) :console.log(`[SECOND HALF] ${min}:${game}`)
//老师写法更简单
//     const half = min <= 45 ? 'FIRST':'SECOND';
//     console.log(`[${half} HALF] ${min}:${game}`);
}


