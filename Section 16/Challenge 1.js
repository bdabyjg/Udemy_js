'use strict'

const whereAmI = function (lat,lng){
   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
       .then(res=>res.json())
       .then(data=>{
       console.log(data);
   })
}
whereAmI(110.3,20.0);