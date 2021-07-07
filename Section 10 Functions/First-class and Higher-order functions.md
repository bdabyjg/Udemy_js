# First-class and Higher-order functions

JavaScript is a language that has first class functions which in technical terms means that functions are so-called first citizens. In practice, that means that functions are simply treated as values.

Now, why does JavaScript work this way? Well, it's simply because functions are really just another type of objects in JavaScript. And since objects are values, functions are values too. Since functions are values,there is a bunch of interesting things that we can do with them, like storing them in variables or object properties.

`const add =(a,b)=>a+b;`

`const counter = {`

​	`value:23,`

​	`inc:function(){`

​		`this.value++;	`

​	`}`

`}`

We create a function expression in the first example and an object method in the second example. The function value itself that we can store wherever we like. We can also pass functions as arguments to other functions. We did that before when adding event listeners or event handlers to DOM objects.

`const greet = ()=>console.log('Hey,Jonas');`

`btnClose.addEventListener('click',greet);`

So here we have the "addEventListener" function and we clearly passed the "greet" function into the "addEventListener" function here as a value. We can also return a function from another function.

Finally, remember that functions are objects. Many types of objects in JavaScript have methods. For example, like array methods. There are also function methods. So methods that we can call on functions. This bind method is an example of that:

`counter.inc.bind(someOtherObjects);`

Now the fact that JavaScript has first-class functions make it possible for us to use and write higher order functions. So a higher order function is either a function that receives another function as an argument or a function that returns a new function.

First, for functions that receive another function we have the same example as before.

`const greet = () => console.log('Hey Jonas'); btnClose.addEventListener.('click',greet);`

Here the "addEventListener" function is the higher order function. Because it receives another function as an input. In this case, the greet function. We usually say that the function that is passed in is a "callback" function. That's because the callback function will be called later by the higher order function. In this case, the "addEventListener" function will call the "greet" callback later as soon as the click event happens. It's like the greet function saying "Hey there, don't greet me yet, but call me back once you're ready." This work not only in the context of the "addEventListener" function, but in many other use cases as well.

Second, we can also have functions that return another function.

`function count(){`

`let counter = 0;`

`return function(){`

`counter++;`

`}`

`}`

So we have the higher-order function here(the `function counter(){}`), basically the whole code block which clearly returns a new function which is `function(){counter++;}`. This style of functions is also used a lot in JavaScript.

There may be some confusion between first-class functions and higher-order functions. Some people think that they are the same thing. But actually they mean different things. First class functions is just a feature that a programming language either has or does not have. All it means is that all functions are values.

There are no "first-class" function in practice. It's just a concept. However there are "higher-order function" in practice which are possible because the language supports first-class functions. So it's a subtle difference.