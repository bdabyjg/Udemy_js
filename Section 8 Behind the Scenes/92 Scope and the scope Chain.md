# 92 Scope and the scope Chain



Lexical scoping means that the way variables are organized and accessed is entirely controlled by the placement of functions and of blocks in the programs code. For example, a function that is written inside another function has access to the variables of the parent function. Variable scoping is influenced by where exactly we write our functions and code blocks. Scope is the space or environment in which a certain variable is declared. In the case of functions, that's essentially the variable environment which is stored in the functions execution context. What's the differences between scope and variable environment? The answer is that for the case of functions, it's basically the same. Now in JavaScript, we have the global scope, function scope and block scope.

First, lets define what the scope of a variable is. So the scope of a variable is basically the entire region of our code where a certain variable can be accessed. If you take a close look at it, scope is not the same as scope of a variable.

Let's now talk about the three different types of scope in JavaScript. So that's global scope, function scope and block scope. Remember scope is the place in our code where variables are declared. First, the global scope is once more for top level code. So this is for variables that are declared outside of any function or block. These variables will be accessible everywhere in our program, in all functions and blocks. Next, each and every function creates a scope. The variables declared inside that function scope are only accessible inside that function. This is also called a local scope opposed to the global scope. So local variables live in the function so to say. Outside the function the variables are then not accessible at all. This is technically the same as the functions variable environment, but we still need to give it the name of scope in this context, because blocks also create scopes. It actually does not matter what kind of function we're using. So function declarations, function expressions and arrow functions all create their own scope. Now traditionally, only functions used to create scopes in JavaScript. But starting in ES6, blocks also creates scopes now. In blocks, we mean everything that is between curly braces, such as the block of an "if" statement or a "for" loop. Just like with functions, variables declared inside a block are only accessible inside that block and not outside of it. Now the big difference is that block scopes only apply to variables declared with "let" or "const". Only "let" and "const" variables are restricted to the block in which they were created. That's why we say that "let" and "const" variables are block scoped. So if I declared a variable using "var" in this block, then that variable would actually still be accessible outside the block, and would be scoped to the current function or to the global scope. So we say that "var" is function scoped. In ES5 and before we only had global scope and function scope. That's why ES5 variables declared with "var" only care about functions but not about blocks. They simply ignore them. Finally also starting in ES6, all functions are now also block scoped at least in strict mode. Just like with "let" and "const" variables, this means that function declared inside a block are only accessible inside that block. "Let" and "const" variables as well as functions are blocked scoped.



Now it's important to understand that our purple blocks scope does not get access to any variables from the yellow second function scope. And the same, the other way around.

And why is that? Well it's because of lexical scoping as we learned in the last slide. So the way that we can access variables depends on where the scope is placed, so where it is written in the code. In this case, none of these two scopes is written inside of one another. They're both child scopes of the first function. We could even say that they are a sibling scopes. And so by the rules of lexical scoping, they cannot have access to each others variables,

simply because one is not written inside the other one. We can also say that the scope chain only works upwards, not sideways. Okay, so this was a lot to take in, but I hope that everything's still keeps making sense at this point. But for now, though, there is one more thing that we need to talk about, which is the difference between the scope chain and to call stack. I decided to talk about how the call stack, execution context, variable environments and scope are all related to one another.

So we have three functions called first, second and third, in order to make this easier to understand. We start by calling the first function, which then calls the second function, which in turn calls the third function. So from what we learned before, the call stack for this example will look like. One execution context for each function in the exact order in which they were called. They also included the variable environment of each execution context.

For now, all this has nothing to do with scopes or the scope chain. All I'm doing is creating one execution context for each function call and filling it with the variables of that function. Now that you did that and we have all these variable environments in place, we can actually start building the scope chain. As always, we're gonna start with the global scope. The variables available in the global scope are exactly the ones stored in the variable environment of the global execution context. 

Now in the global scope, we also call the first function, which is the reason why we have an execution context for it in the call stack. This function also gets its own scope, which contains all the variables that are declared inside of the function. And once again, this is exactly the same as the variable environment of the functions execution context.

So the first scope also gets access to all the variables from its parent scope, thanks to the scope chain. Now the scope chain is all about the order in which functions are written in the code. But what's really important to note here is that the scope chain has nothing to do with the order in which functions were called. Or in other words, the scope chain has nothing to do with the order of the execution contexts in the call stack. The scope chain does get the variable environments from the execution context as shown by the red arrows here, but that's it. The order of function calls is not relevant to the scope chain at all.

Now, moving on to the second function now, once again, its scope is equal to its variable environment. Also it's lexically written within the first function. And so of course, it will have access to all its parent scopes as well. So we can say that the scope chain in a certain scope is equal to adding together all the variable environments of all the parent scopes. And so this is our scope and the scope chain are built in the JavaScript engine behind the scenes.

Okay. Now in the second function, we try to call the third function. But why does that work? Well, it works because the third function is in the scope chain of the second function scope as we can see here in our scope chain diagram. It's a function in the global scope or a global function, and therefore it's accessible everywhere. Of course, this will create a new scope along with the scope chain as we already know. So what happens in this third function? Well, we're trying to act as variables "b", "c","d" and "a" here. "d" is no problem because it's right there in the third function scope. Then variable "c" is not in a local scope and so JavaScript needs to do a variable lookup. So it looks up in a scope chain looking for variable "c", but it's not there. And of course it isn't, because "c" is defined in the second function, and there is just no way in which the third function can access variables defined in the second function. And that is true, even though it was the second function who called the third. And so here is even more proof that the order in which functions are called does not affect the scope chain at all. And so here as a result, we get the reference error because both "c" and "b" cannot be found in the third scope nor in the scope chain.

And with this, I hope I made it crystal clear that execution context, variable environments, the call stack scope and the scope chain are all different, but still very related concepts. So here is a handy summary with the main takeaways from this video. 

So to start, scoping asks the question, "Where do variables live?" Or "Where can we access a certain variable, and where not?" That's what scoping is all about. Now, there are three types scope in JavaScript. The global scope, scopes defined by functions and scopes defined by blocks, starting in ES6. However, only let and const variables are block scoped. Variables declared with var automatically end up in the closest function scope.

Next in JavaScript, we have lexical scoping, which means that the rules of where we can access variables are based on where in the code functions and blocks are written. Because every scope always has access to all the variables from all it's outer scopes. And this is what we call the scope chain. When a certain variable is not in the current scope, the engine looks up in the scope chain until it finds the variable that it's looking for, and this process is called variable lookup. It's important to note that the scope chain is a one way street. So a scope will never ever have access to the variables of an inner scope, only of outer scopes. We can also think of the scope chain in a certain scope as being equal to adding together all the variable environments of all the parent scopes.

And finally, we need to keep in mind that the scope chain has nothing to do with the order in which functions were called. So the order of function calls does not affect the scope chain at all.
