'use strict';
/*console.log(document.querySelector('.message').textContent);  //选取相应位置的文字内容并打印出来；

document.querySelector('message').textContent = 'Correct Number';  //修改相应位置的文本内容


console.log(document.querySelector('.guess').value);// 获取输入框中的值 */

const secretNumber = Math.trunc(Math.random()*20+1);
let score = 20;


document.querySelector('.check').addEventListener('click',function (){
    const guess = Number(document.querySelector('.guess').value);
    //when there is no input
    if(!guess){
        document.querySelector('.message').textContent = 'No number!';
        //when player wins
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        // change the css style
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

    //when guess is too high
    }else if(guess > secretNumber){
        if(score>1){
            document.querySelector('.message').textContent = 'Too high!';
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    // when guess is too low
    }else if(guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;

        }
    }


});

document.querySelector('.again').addEventListener('click',function (){

})
