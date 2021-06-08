'use strict'

const orderSet = new Set([
    'Pasta','Pizza', 'Pizza','Risotto','Pasta','Pizza'
]);

console.log(orderSet.size);

//查看集合内是否包含元素
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Candela'));
orderSet.add('Garlic Bread');
orderSet.delete('Pizza');
console.log(orderSet);

for(const order of orderSet) console.log(order);

//Example
const staff = ['Waiter','Chef','Waiter','Manager','Chef', 'Waiter']
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
