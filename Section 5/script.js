'use strict';
/*console.log(document.querySelector('.message').textContent);  //选取相应位置的文字内容并打印出来；

document.querySelector('message').textContent = 'Correct Number';  //修改相应位置的文本内容


console.log(document.querySelector('.guess').value);// 获取输入框中的值 */

const secretNumber = Math.trunc(Math.random()*20+1);
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click',function (){
    const guess = Number(document.querySelector('.guess').value);

    if(!guess){
        document.querySelector('.message').textContent = 'No number!';
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct Number!';
    }else if(guess > secretNumber){
        document.querySelector('.message').textContent = 'Too high!';
    }else if(guess < secretNumber){
        document.querySelector('.message').textContent = 'Too low!';
    }


})
