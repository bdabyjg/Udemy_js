# Keyboard Event



There're 3 types of events for the keyboard. There's the "key down", the "key press" or the "key up". Key up, which is the one only happens when we lift or finger off the keyboard basically or off the key. Key press is fired continuously as we keep our finger on a certain key. Key down is fired as soon as we just press down the key and so usually that's the one we use. 



---



`document.addEventListener('keydown',function(e){`

`})`

We don't call a function here. We only define it here. So we say "Hey JavaScript, call function when a key down event happens. When you do so please pass in the "event" object as an argument."



---

`if(!modal.classList.contains('.hidden'))`

If the modal doesn't contain the hidden class then close the modal.

