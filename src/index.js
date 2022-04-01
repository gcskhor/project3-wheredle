/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable no-undef */
import './styles.scss';
import styleArr from './mapStyle.js';
import { countries } from './autocomplete.js';

// GLOBAL VARIABLES
let allLocs = null;

// TEST BUTTON
const testEle = document.createElement('button');
testEle.innerText = 'RE-INIT MAP';
document.body.appendChild(testEle);

// TEST BUTTON2
const testEle2 = document.createElement('button');
testEle2.innerText = 'get locations';
document.body.appendChild(testEle2);

// GOOGLE API CONFIG + API KEY
const axios = require('axios');

const config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+singapore&key=AIzaSyAvFStCxa8h0bJEyVvKKe93gCUsEcJYZO4',
  headers: { },
};

axios(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });

let map;

// CUSTOM PIN ICON -> pin icon outside the initmap function seems to cause errors with displaying the map
// const pinIcon = new google.maps.MarkerImage(
//   '/images/pin.png',
//   null,
//   null,
//   null,
//   new google.maps.Size(30, 45),
// );

// ADD MARKER FUNCTION
const addMarker = (coords) => {
  const marker = new google.maps.Marker({
    position: coords,
    animation: google.maps.Animation.DROP,
    map,
    // icon: pinIcon, // disable this if pinIcon is removed
  });

  // ADD INFO WINDOW
  const infowindow = new google.maps.InfoWindow({
    content: '<h1>this!<h1>',
  });

  marker.addListener('click', () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });
};

// INITIALISE MAP
function initMap() {
  const styledMapType = new google.maps.StyledMapType(styleArr);

  const testLocation = { lat: 1.3056712, lng: 103.8102465 };
  map = new window.google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: testLocation,
    disableDefaultUI: true,
    // mapTypeControl: true,
    // scaleControl: true,
    zoomControl: true,
    keyboardShortcuts: false,
    restriction: {
      latLngBounds: {
        north: 1.48,
        south: 1.2,
        west: 103.60,
        east: 104.04,
      },
      strictBounds: false,
    },
  });

  // // CUSTOM PIN ICON
  // const pinIcon = new google.maps.MarkerImage(
  //   '/images/pin.png',
  //   null,
  //   null,
  //   null,
  //   new google.maps.Size(30, 45),
  // );

  // // ADD MARKER FUNCTION
  // const addMarker = (coords) => {
  //   const marker = new google.maps.Marker({
  //     position: coords,
  //     animation: google.maps.Animation.DROP,
  //     map,
  //     icon: pinIcon,
  //   });
  // };

  // // STATIC LOCATIONS
  // const locations = [
  //   { lat: 1.296816794731764, lng: 103.84844472447658 },
  //   { lat: 1.2843594052784335, lng: 103.78211236351044 },
  //   { lat: 1.3044386614460384, lng: 103.81206727361928 },
  // ];
  // locations.forEach((location) => {
  //   addMarker(location);
  // });

  // CLICK MAP TO CREATE MARKER
  google.maps.event.addListener(map, 'click', (event) => {
    addMarker(event.latLng);
  });

  // SET MAP STYLE FROM IMPORTED STYLE VARIABLE
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');
}

// STATIC LOCATIONS
const locations = [
  { lat: 1.296816794731764, lng: 103.84844472447658 },
  { lat: 1.2843594052784335, lng: 103.78211236351044 },
  { lat: 1.3044386614460384, lng: 103.81206727361928 },
];

const addStaticPins = () => {
  locations.forEach((location) => {
    addMarker(location);
  });
};

// ENSURE MAP IS MADE GLOBAL TO THE WINDOW TO OVERCOME WEBPACK ISSUES
window.initMap = initMap;

testEle.addEventListener('click', addStaticPins); // RE-INIT MAP BUTTON

// TEST -  GET ALL LOCATIONS
const getAllLocations = () => {
  axios.get('/all-locations')
    .then((response) => {
    // handle success
      allLocs = response.data.places;
    })
    .catch((error) => {
      console.log(error);
    });
};

getAllLocations();

// testEle2.addEventListener('click', getAllLocations);

// troubleshooting google maps appearing:
// https://stackoverflow.com/questions/48705066/initmap-is-not-a-function-error-in-js-console-google-maps-api

// AUTO COMPLETE GUESS INPUT
const searchInput = document.getElementById('search-input');
const matchList = document.getElementById('match-list');
const submitGuessBtn = document.getElementById('submit-guess');

const outputHtml = (matches) => {
  if (matches.length > 0) {
    const html = matches.map((match, index) => `<div id="place-${index}" class="card card-body">
        <h4>${match.name}</h4>
      </div>`).join('');

    matchList.innerHTML = html;

    matches.forEach((match, index) => {
      const selectedMatchCard = document.querySelector(`#place-${index}`);
      selectedMatchCard.classList.add('temporary');
      selectedMatchCard.addEventListener('click', () => {
        // fill input box with selected text
        searchInput.value = selectedMatchCard.innerText;

        // delete match cards after clicking
        const eleToDelete = document.querySelectorAll('.temporary');
        eleToDelete.forEach((ele) => {
          ele.remove();
        });
      });
    });
  }
};
// test5
const searchLocations = (searchText) => {
  const dataArr = allLocs;

  let matches = dataArr.filter((location) => {
    // need to figure out better regex for more precise searching
    const regex = new RegExp(`${searchText}`, 'gi');
    return location.name.match(regex);
  });
  // matches is now an array of objects

  if (searchText.length === 0) {
    matches = [];
    matchList.innerHTML = '';
  }

  console.log(matches);
  outputHtml(matches);
};

searchInput.addEventListener('input', () => {
  console.log(searchInput.value);
  searchLocations(searchInput.value);
});

submitGuessBtn.addEventListener('click', () => {
  const guessInput = searchInput.value;
  axios.post('/submit-guess', { guess: guessInput })
    .then((res) => {
      console.log(res.data);
      // if (res.data.status === 'none') {
      //   // input validation on FE
      //   console.log('invalid guess');
      // }
      // if (res.data.status === 'found') {
      //   // show distance/direction data
      //   console.log(`guessed ${res.data.locationData.name}`);
      // }
    });
});
