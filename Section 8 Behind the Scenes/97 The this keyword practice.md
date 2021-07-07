# 97 The this keyword practice



Let's create just a variable called F for function and then say Koala.calcAge and not call it. So we just want to copy now the function into a new variable. Once more that's possible because a function is just a value. So we take this value here and copy it here without calling it. Just like here where we copied the method from one place to the other but we didn't call it. Here we can take a look at f in the console. It's actually this function but now what implications is this going to have for the this keyword? Well, let's just try to call the f function. Now the this keyword should be undefined. Therefore we also get this error that it cannot read year of undefined. So that's coming from here because the this keyword is now undefined. And so undefined the year does, of course not exist. This happens because this f function here is now just a regular function call. It is not attached to any object. There is no owner of this f function anymore here at this point. And therefore it is just a regular function call just like here. So therefore the this keyword is then also undefined.

