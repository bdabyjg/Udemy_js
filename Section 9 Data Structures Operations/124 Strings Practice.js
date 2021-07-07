'use strict'


const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25' +
    '+_Arrival;bru0943384722;fao93766109;11:45' +
    '+_Delayed_Arrival;hel7439299980;fao93766109;12:05' +
    '+_Departure;fao93766109;lis2323639855;12:30';


const getDode = str => str.slice(0,3).toUpperCase();

for(const flight of flights.split('+')){
    const [type,from,to,time] = flight.split(';');
    //写的不够简洁
    // const output = `${type.startsWith('_Delayed')?'🔴':''}${type.replace('_',' ')} ${from.slice(0,3).toUpperCase()} to ${to.slice(0,3).toUpperCase()} (${time.replace(':','h')})`;
    const output = `${type.startsWith('_Delayed')?'🔴':''}${type.replace('_',' ')} ${getDode(from)} to ${getDode(to)} (${time.replace(':','h')})`.padStart(37);

    console.log(output);
}
