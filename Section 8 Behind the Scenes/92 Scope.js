'use strict';
function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        let output = `You are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1989 && birthYear <= 1996) {
            var millenial = true;
            //creating new variable with same name as outer scope's variable
            const firstName = 'Candela';
            // Reassigning outer scope's variable
            output = "NEW output";
            const str = 'Oh, you\'re a millenial.'
            console.log(str);

            function add(a, b) {
                return a + b;
            }

            console.log(millenial);
            console.log(output);
        }
        //这行命令被执行的时候，JavaScript在目前的scope里没有找到firstname这个变量，
        // 所以它在scope chain里进行变量的搜寻，看是否能找到这个变量。最终在全局变量中找到了着如果变量。
        // console.log(firstName);
        printAge();
        return age;
    }
}

const firstName = 'Koala';
calcAge(1989)
