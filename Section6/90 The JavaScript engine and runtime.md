# 90 The JavaScript engine and runtime

Any JavaScript engine always contains a call stack and a heap. The call stack is where our code is actually executed using something called execution contexts. Then the heap is an unstructured memory pool which stores all the objects that our application needs. So with this look at engine, we have answered where our code is executed. How the code is compiled to machine code so that it actually can be executed afterwards.



#### What's the differences between compilation and interpretation?

Every single computer program ultimately needs to be converted into this machine code and this can happen using compilation or interpretation. In compilation, the entire source code is converted into machine code at once. And this machine code is then written into an portable file that can be executed on any computer. So we have 2 different steps here. First, the machine code is built and then it is executed in the CPU so in the processor. And the execution can happen way after the compilation of course. For example, any execution that you're using right now has been compiled before and you're now executing it way after it's compilation. Now in the other hand interpretation there is a interpreter which runs through the source code and executed line by line. So here we don't have the same two steps as before.

Instead, the code is read and executed all at the same time. Of course the source code still needs to be converted into the machine code, but it simply happens right before it's executed and not ahead of time. JavaScript used to be a purely interpreted language. But the problem with interpreted languages is that they are much much slower than compiled languages. This used to be ok in JavaScript. But now in modern JavaScript and fully fledged web applications that we built and use today low performance is no longer acceptable. Now many people still think that JavaScript is an interpreted language but that's not really true anymore. So instead of simply interpretation, modern JavaScript engine now use a mix between compilation and interpretation which is called just-in time compilation. This approach basically compiles the entire code into machine code at once and then executed it right away. So we still have the 2 steps of regular ahead of time compilation but there is no portable file to executed and the execution happens immediately after the compilation.

Anyway, let's now understand how this works in the particular case on JavaScript. So as a piece of JavaScript code enters the engine the first step is to parse the code. The first step is to parse the code which essentially means to read the code. During the parsing process, the code is parsed into a data structure called "the abstract syntax tree" or AST. This works by first splitting up each line of code into pieces that are meaningful to the language like const and function keywords and then saving all these pieces into the tree in a structured way. This step also checks if there are any syntax errors. And resulting tree will later be used to generate the machine code. Let's say we have a very simple program. All it does is to declare a variable like "`const x = 23;`". And this is AST for just one line of code looks like. 

`VariableDeclaration{`

`sart:0 end:13`

`}`

`-declarations:[`

`-VariableDeclarator{`

`start:6 end:12`

`} `

`-id:Indetifier{`

`start:6 `

`end:7 `

`name:"x"`

`} `

`-init:Literal = $node{`

`start:10 `

`end:12 `

`valuer:23 `

`raw:"23"`

`}`

`}]`

`kind:"const"`

The next step is compilation which takes the generate AST and compiles it into machine code. This machine code then gets executed right away because modern JavaScript engine use Just-in-time compilation. Execution happens in JavaScript engines call stack. All right, so far so good. We have our code running and we can finish, right? Well, not so fast. Because modern JavaScript engines actually have some pretty clever optimization strategies. What they do is to create a very unoptimized version of machine code in the beginning just so that it can start executing as fast as possible. Then in the background this code is being optimized in the re-compiled during the already running program execution. And this can be done multiple times. After each optimization, the unoptimized code is simply swept. For the new more optimized code without ever stopping execution. This process is what makes modern JavaScript engines such as V-8 so fast. In all this parsing, compilation and optimization happens in some special threads inside the engine that we cannot access from our code. So completely separate from the main thread that's basically running into call stack executing our own code. Now different engines implemented in slightly different ways.



#### Runtime in the browser

We can image a JavaScript runtime as a big box or a big container which includes all the things that we need in the JavaScript in this case in JavaScript browser. The heart of any JavaScript, runtime is always a JavaScript engine. Without an engine there is no runtime and there is no JavaScript at all. However, the engine alone is not enough. In order to work properly, We also need access to the web API. That's everything related to the DOM or timers or even the "console.log" that we use all the time. Essentially web APIs are a functionalities provided to the engine, but which are actually not part of JavaScript language itself. JavaScript simply gets access to these APIs through the global widow object. But it still makes sense that the web APIs are also part of the runtime, because a runtime is just like a box that contains all the JavaScript related stuff that we need. Next a typical JavaScript runtime also includes a so called callback queue. This is a data structure that contains all the callback functions that are ready to be executed. For example we attach event handler functions to DOM elements like a button to react to certain events. These events handler functions also called callback functions. As the event happens, for example a click, the callback function will be called. Here is how that actually works behind the scenes. So the first thing that actually happens after the event is that the callback function is put into the callback queue. Then when the stack is empty the callback function is passed to the stack so that it can be executed. This happens by something called the event loop. So the event loop takes callback functions from the callback queue and puts them in the call stack so that they can be executed.

However, it's also important to remember that JavaScript can exist outside of browsers, for example in Node.js. And so here's what the Node.JS JavaScript runtime looks like. It's pretty similar but since we don't have a browser. We can't have the Web APIs because it's the browser who provides these. Instead we  have multiple C++ and so called thread pool.

