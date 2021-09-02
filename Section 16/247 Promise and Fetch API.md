# Promise and Fetch API

**Promise:**

* An object that is used as a placeholder for the future result of an asynchronous operation.
* A container for an asynchronously delivered value.
* A container for a future value.(Response from AJAX call)
* We no longer need to rely on events and callbacks passed into asynchronous functions to handle asynchronous results;
* Instead of nesting callbacks, we can chain promises for a sequence of asynchronous operations: escaping callback hell.

![](D:\Coding\Udemy_js\Section 16\247 Promises and the fetch API.png)



Call fetch function will then immediately return a promise. As soon as we start a request, promise is still pending because the asynchronous task of getting the data is still running in the background. At a certain point the promise will then be settled and either in a fulfilled or in a rejected state.



```javascript
fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(function (response){
    console.log(response);
    return response.json();
}).then(function (data){
    console.log(data);
});
```

This fetch function here returning a promise. Then we handled that promise use the then method. Then the then method read the data from the response, we need to call the json method on that response object. Now this itself will also return a promise. If we then return that promise from this (then response) method, then basically all of this becomes a new promise itself. So since this is a promise, we can call the then method on that again. Then again we have a callback. This time we get access to the data because the resolved value of this promise here is going to be the data itself. The data we're looking for which is this one here(console: altSpelling).
