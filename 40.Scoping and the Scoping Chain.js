

// var a = "hello";
// first();

// function first(){
//     var b = "hi";
//     second();

//     function second(){
//         var c = "hey";
//         console.log(a+b+c);
//     }
// }

//Another example

var a = "hello";
first();

function first(){
    var b = "hi";
    second();

    function second(){
        var c = "hey";
        third();
    }
}
function third(){
    var d = 'John';
    console.log(c);
}