
// IIFE stands for: Immediately Invoke Function Expressions

function game(){
    var score = Math.random() * 10;
    console.log(score >=5);
}

game();


(
    function (){
        var score = Math.random() * 10;
        console.log(score >=5);
    }
)();