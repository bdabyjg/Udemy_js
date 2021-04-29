# Events

An event is something that happens on the page. For example, a mouse click, or a mouse moving, or a key press, or many other events. Then with an event listener, we can wait for a certain event to happen, and then react to it.

In order to listen for events, we first need to select the element where the event should happen. In this case, we want to listen to the event on this button element here--So this check button. Because this is where the click that we're interested in will happen. So we click this button and something should happen.



`document.querySelector('.check').addEventListener('click',function(){`

`console.log(document.querySelector('.guess').value);`

`})`

We simply did not assign the function to any variable. Instead, we passed it directly here into the "addEventListener" method. So as the first argument, we had the name of the event that we're listening for which is a "click".And then as the second argument, we have this function value. This function simply contains the code that we want to execute whenever the event happens. Also, note that we do not call this function here anywhere. We only define the function here and then pass it into the event handler. But it is the JavaScript engine who will call this function as soon as the event happens. This function will not be called immediately once the script here is executed. This function will only be called as soon as the event happens. And you can also see that here in the code, because we don't call the function anywhere using the parenthesis.