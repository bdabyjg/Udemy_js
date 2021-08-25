'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class Workout{
    date = new Date();
    id = (Date.now()+'').slice(-10);

    constructor(coords,distance,duration){
      this.coords = coords;//[lat,lng]
      this.distance = distance;
      this.duration = duration;
    }
}

class Running extends Workout{
    constructor(coords,distance,duration,cadence){
        super(coords,distance,duration);
        this.cadence = cadence;
        this.calcPace();


    }
    calcPace(){
        this.pace = this.duration / this.distance;
    }
}
class Cycling extends Workout{
    constructor(coords,distance,duration,elevationGain){
        super(coords,distance,duration);
        this.elevationGain = elevationGain;
        this.calcSpeed();
    }
    calcSpeed(){
        this.speed = this.distance / (this.duration/60);
        return this.speed;
    }
}

const run1 = new Running([20,-110],5.2,24,178);
const cyc1 = new Cycling([20,-110],27,95,523);
console.log(run1,cyc1);


//APPLICATION ARCHITECTURE
class App{
    #map;
    #mapEvent;
    constructor() {
        this._getPosition();
        form.addEventListener('submit',this._newWorkout.bind(this));
        inputType.addEventListener('change',this._toggleElevationField);
    }
    _getPosition(){if (navigator.geolocation)
        navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),function (){
            alert('Could not get your position.')
        })

    }
    _loadMap(position){
        const {latitude} = position.coords;
        const {longitude} = position.coords;
        // console.log(`https://www.google.pt/maps/@${latitude},${longitude}`);
        const coords = [latitude,longitude];

        //引入Leaflet
        this.#map = L.map('map').setView(coords, 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);
        //Handling clicks on map
        this.#map.on('click',this._showForm.bind(this));

    }
    _showForm(mapE){
        this.#mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
    }
    _toggleElevationField(){
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');

    }
    _newWorkout(e){
        e.preventDefault();
        //Steps:
        // 1 Get data from form
        const type = inputType.value;
        const distance = +inputDistance.value;
        const duration = +inputDuration.value;
        // 2 Check if data is valid
        // 3 If workout running, create running object
        if (type === 'running'){
            const cadence = +inputCadence.value;
            if (!Number.isFinite(distance)) return alert('Inputs have to positive numbers!')

        // 4 If workout cycling, create cycling object
        if (type === 'cycling'){
            const cadence = +inputElevation.value;
        }
        // 5 Add new object to workout array
        // 6 Render workout on map as marker
        const { lat,lng }=this.#mapEvent.latlng;
        L.marker([lat,lng]).addTo(this.#map).bindPopup(L.popup({
            maxWidth:250,
            minWidth:100,
            autoClose:false,
            closeOnClick:false,
            className:'running-popup'
        })).setPopupContent('Workout')
            .openPopup();
        // 7 Render workout on list
        //8 Hide form + Clear input fields;
        inputDistance.value = inputDuration.value = inputCadence.value ='';


    }
}
}

// const app = new App();


//调用地理位置api:navigator.geolocation


