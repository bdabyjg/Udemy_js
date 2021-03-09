# Function Declaration VS Expressions



So the functions that I showed you in the last lecture are called function declarations because we simply use the function keyword to declare a function a bit like we declare a variable. Let's now write another function declaration. This time a function to calculate an age based on a given birth year. So let's again use the function keyword and we're gonna call this caclAge1 and that's because we're gonna have another one later. A parameter remember it's a bit like a local variable that's only available inside of this function . Then the function body with the curly braces and now the code that we want to create here.<br/>

`function calAge1(birthYear){`

`const age = 2037 - birthYear;`

`return age;`

`}`

Then to take this value now out of the function, we return it using the"return" keyword. So we calculate the age first and then we return that value. Actually we can simplify this and basically return all in one go. So there's actually no need to store this value here in a variable if all we do is then later return that value. So in fact, we can just take this value here, get rid of this and then simply return the result of this expression here basically of this operation. So we're taking the "birthyear" that we're gonna receive and then use that to calculate the age. This is a generic function which is then gonna work for any birth year that we give it. So let's now call or invoke or execute this function. I can use all of these 3 words interchangeably, they all mean the same thing. So "calcAge1" and then remember to call the function we use parenthesis and then we specify the actual value of the parameter which is called the argument. Now some people use the words arguments and parameters as if they were the same and actually that's not a big deal but to be really precise. The parameter is a kind of placeholder in the function and the argument is then the actual value that we use to fill in that placeholder that is the parameter.

calAge1(1991)

This will now create a value. And the value that this will create is the value that's returned from the "calcAge" function so basically this returned value. We need to capture or to save that value into a variable.

`const age1 = calcAge1(1991);`<br/>

So that is a function declaration.<br/>

Instead of writing a function with the function's name, we simply write function basically without a name then we still define the parameter, we still define the function body which is gonna be the same as this one because we want another "caclAge" function here. So we write a function like this and then we what we have to do is to store all of this here into a variable and that variable will then be the function. So let's call it "calcAge2":<br/>

`const calcAge2 = function(birthyear){`

`return 2037 - birthYear;`

`}`<br/>

We did write the function in a very similar way but we didn't give it a name here, so it's a function without a name basically which is also called an "Anonymous" function. So all of this here is basically an expression and remember that an expression produces a value. And so we use that value in store it into calcAge2 and this will then be the function.<br/>

The expressions produce values. "calcAge2" will then hold this function value basically. This here is just a value. In JavaScript functions are actually just values. So function is not a type. It's not like a string or number type but it's also a value. And so if it's a value, we can store it in a variable.<br/>

### What's the differences between function declarations and function expressions?

The main practical difference is that we an actually call function declarations before they are defined in the code. You can call a function declaration before you define it even though that might not be such a good idea in many case but you can do it if necessary.

