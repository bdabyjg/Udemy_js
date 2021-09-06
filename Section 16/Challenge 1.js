'use strict'

const renderCountry = function (data, className = '') {
    const html = `
          <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    // countriesContainer.style.opacity = 1;
};


const whereAmI = function (lat,lng){
   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
       .then(res=>{
           if (!res.ok) throw new Error(`Problem with geocodidng ${res.status}`);
           return res.json();
       })
       .then(data=>{
       console.log(data);
       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`)
   })
       .then(res=>{
           if (!res.ok)
               throw new Error(`Country not found (${res.status}`);
           return res.json();
       })
       .then(data=>renderCountry(data,'neighbour'))
       .catch(err=>console.error(`${err.message}`))
}
whereAmI(52.508,13.381);