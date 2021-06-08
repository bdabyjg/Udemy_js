'use strict'

const rest = new Map();
rest.set('name','Classico Italiano');
rest.set(1,'Firenze, Italy');
rest.set(2,'Lisbon, Portugal');
console.log(rest);

rest.set('categories',['Italian','Pizzeria','Vegetarian','Organic'])
    .set('open',11)
    .set('close',23)
    .set(true,'We are open :D')
    .set(false,'We are closed :(');

//在map里找“键值对”的get方法
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
// If the current time is between 23 and 11.
console.log(rest.get(time>rest.get('open') && time<rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);

const arr = [1,2];
rest.set(arr,'Test');
rest.set(document.querySelector('h1'),'Heading');
console.log(rest.size);
console.log(rest.get(arr));
