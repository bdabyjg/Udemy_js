# 36 Functions Calling Other Functions

```
function cutFruitPieces(fruit){
    return fruit * 4
}

function  fruitProcessor(apples,oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges. `;
    return juice;
}

fruitProcessor(2,3)`
```

...Down here we are calling the "fruitProcessor" function with the arguments "2" and "3". This will then replace the "apples" parameter in the function with the number 2 and the "oranges" parameter in the function with the number 3. We are simply replacing the parameter replace orders with the actual values. And now let's analyze what's gonna happen with these apple value. So apple right now holds the number 2. And that value "2" will then be used to call the "cutPieces" function. Now as we called the "cutPieces" this "2" is actually the argument for the "cutPieces" function. And it will basically replace the "fruit" parameter. So now fruit here in this "cutPieces" function is also 2. And they hope that these arrows here make the data flow quite obvious. Then inside this function of course the fruit is then also 2 which we'll get multiplied by a "4". And so the result here is gonna be "8". And so the result of calling this "cutPieces" function with apples will be "8". And so that's the value that we then store into the "applePieces" variable. From there we will then built this juice string that we have down here.

(截图在onenote里)



# 37 Review

...

The return statement immediately exits or immediately returns the function. So therefore there's no chance that this code here is even reached. So if we want this one here to execute, we need to put it before return.<br/>

### 3 different function types

1. Function declaration: Function can be used before it's declared.

   `function calcAge(birthYear){`

   `return 2037 - birthYear;`

   `}`

2. Function expression: Essentially a function value store in a variable.

   `const calcAge = function calcAge(birthYear){`

   `return 2037 - birthYear;`

   `}`

3. Arrow function: also function expressions. Great for quick one line functions where we don't need to explicitly use the return keyword and no curly braces either. And they can output data.

   `const calcAge = birthYear => 2037 - birthYear;`

   

   **Summary:**

   Three different ways of writing functions, but they all work in a similar way: receive input data, transform data and then output data.