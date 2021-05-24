# 104 De-structuring Objects

Start with "const" in order to actually define some variable name. We need to write the exact property names here to now extract variables from this object. Now since in an object, the order of elements does not matter, we don't need to manually skip elements like we did in an array. So we can simply write name and we have to specify the name of the properties. Just like with arrays, this now create new variables based on this restaurant object.

Now what if we wanted the variable names to be different from the property names? We still need to reference the property names as before otherwise JavaScript has no way of knowing what we actually want.

```javascript
const {name:restaurantName,openingHours:hours,categories:tags} = restaurant
```

