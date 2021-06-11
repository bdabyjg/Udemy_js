'use strict'
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value.toLowerCase().split('\n');
    for(const [i,single] of text.entries()){
        const [first,second] =single.trim().split('_');
        const camelCase = `${first}${second[0].toUpperCase()}${second.slice(1)}`;
        //或者用replace
        // const output = `${first}${second.replace(second[0],second[0].toUpperCase())}`
        // console.log('the output:'+output);

        console.log(`${camelCase.padEnd(20)}${'✅'.repeat(i+1)}`);

    };

})



