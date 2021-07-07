# 103 De-structuring Arrays

Now learning complex topics like the ones we're gonna dive into in the section is really best done in isolation. 

Starting with array de-structuring. So de-structuring is an ES6 feature and it's basically a way of unpacking values from an array or an object into separate variables. So in other words de-structuring is to break a complex data structure down into a smaller data structure like a variable（“解构”是ES5的一个特点，所谓“解构”，指的是把一个数组或者对象重新展开，变成独立的变量。换句话说，解构是把一个复杂的数据结构重组成较小的数据结构，例如一个变量）. So for arrays we use de-structuring to retrieve elements from the array and store them into variables in a very easy way.





So if we were to like to switch these two variables then without de-structuring, we would have to do it like this:

```javascript
let [main, ,secondary]=restaurant.categories;
console.log(main,secondary);

// Switching variables
// const temp=main;
// main = secondary;
// secondary = temp;
// console.log(main,secondary);

```

We would need to create a temporary variable and then so that we would assign one of them. We would say "main" is equal to the "secondary" and then "secondary" is equal to "temp" because that's where we temporarily stored the value of main. We could not just do "main" equals "secondary" and then "secondary" equals "main" because by then we could already have overwritten the "main" variable. That's why we need this "temporary" variable in the middle. But with de-structuring we can make it a lot easier. First we create an array with both of them and the first one is gonna be the "secondary" and then the second on will be to "main". In order to switch to 2 variables using de-structuring we would first start by creating a new array with the two variables inverted. So first "secondary" and then "main", and then we can simply distract them.

```javascript
[main,secondary] = [secondary,main];
console.log(main,secondary);
```

So "main" and "secondary" equals the de-structuring of this array. Now we're not using "let" or "const" here because we are simply reassigning the values of the two variables. But now we do not need a temporary variable in the middle. A trick with de-structuring is that we can have a function, return an array and then we can immediately destruct the result into different variables. This basically allows us to return multiple values from a function.

Nested we mean one array inside another. Nested array means an array inside an array. How can we get this value here and this entire array?

```javascript
const nested = [2,4,[5,6]];
```

Well, we simply define two new variables using the de-structuring assignment let's call them "i" and "j". We don't want in the middle, so we just skip it. So simply leave a space and then another comma and then this one is gonna be "j" equals to the array from which they should be taken.

```javascript
const nested = [2,4,[5,6]];
const [i, ,j]= nested;
```

What if we actually wanted all the individual values? Then we would essentially have to do de-structuring inside of de-structuring. So we used the restructuring here into now "j" for the first element and "k" for the second.

```javascript
const[i,,[j,k]] = nested;
```

Basically we need to do de-structuring inside of de-structuring.

Another feature of de-structuring: we can also set default values for the variables when we are extracting them. That's gonna be very useful in the case that we don't know the length of the array. This can sometimes happen in real world applications. So if we have an array that is shorter than we might think then we might try to unpack the array in positions that don't even exist.
