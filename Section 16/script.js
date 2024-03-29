'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
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
const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    // countriesContainer.style.opacity = 1;
}

///////////////////////////////////////
// const getCountryData = function (country) {
//     const request = new XMLHttpRequest();
//
//     request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//     request.send();
//
//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);
//         const html = `<article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//           </div>
//         </article>`;
//         countriesContainer.insertAdjacentHTML('beforeend', html);
//         countriesContainer.style.opacity = 1;
//     })
// }
//
// getCountryData('usa');
// getCountryData('japan')


//
// const getCountryAndNeighbor = function (country) {
//
//     // AJAX call country 1
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//     request.send();
//
//     //
//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);
//         //Render country 1
//         renderCountry(data);
//         // Get neighbor country 2
//         const [neighbor] = data.borders;
//         if (!neighbor) return;
//         // AJAX call country 2
//         const request2 = new XMLHttpRequest();
//         request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbor}`);
//         request2.send();
//         request2.addEventListener('load', function () {
//             const data2 = JSON.parse(this.responseText);
//             console.log(data2);
//             renderCountry(data2,'neighbour');
//         })
//     });
// }
// getCountryAndNeighbor('usa');

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
// request.send();
// const request = fetch('https://restcountries.eu/rest/v2/name/usa');
// console.log(request);

const getJSON = function (url,errorMsg = `Something went wrong`) {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
        return response.json();
    });

}

// const getCountryData = function (country) {
//     //country 1
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//         .then(response => {
//             console.log(response);
//             if (!response.ok)
//                 throw new Error(`Country not found ${response.status}`)
//             response.json()
//         }).then(data => {
//         renderCountry(data[0]);
//         const neighbour = data[0].borders[0];
//         if (!neighbour) return;
//         // Country 2
//         return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     })
//         .then(response => response.json())
//         .then(data => renderCountry(data, 'neighbour'))
//         .catch(err => {
//             console.error(`${err} 🎇🎇🎇`);
//             renderError(`Something went wrong 🎇🎇 ${err.message}. Try again!`);
//         })
//         .finally(() => {
//             countriesContainer.style.opacity = 1;
//         });
// };

const getCountryData = function (country) {
    // Country 1
    getJSON(`https://restcountries.eu/rest/v2/name/${country}`, 'Country not found').then(data => {
        renderCountry(data[0]);
        const neighbour = data[0].borders[0];
        if (!neighbour) throw new Error('No neighbour found!');

        //Country 2
        return getJSON(`https://restcountries.eu/rest/v2/alpha/${neighbour}`, 'Country not found')
            .then(data => renderCountry(data, 'neighbour'))
            .catch(err => {
                console.error(`${err} 🎇🎇🎇`);
                renderError(`Something went wrong 🎇🎇 ${err.message}. Try again!`);
            })
            .finally(() => {
                countriesContainer.style.opacity = 1;
            });
    })
}

btn.addEventListener('click', function () {
    getCountryData('germany');
})


