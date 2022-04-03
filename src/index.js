/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable no-undef */
import './styles.scss';
import styleArr from './mapStyle.js';
import { createLoginPage, checkUserLogin } from './login.js';

// GLOBAL VARIABLES
let allLocs = null;
let gamestateGuesses = null;

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
const addMarkerStatic = (guess) => {
  const marker = new google.maps.Marker({
    position: guess.geometry.location,
    map,
    // icon: pinIcon, // disable this if pinIcon is removed
  });

  const infoWindowContent = `
  <h4>${guess.name}</h4>
  <div>${guess.formatted_address}</div>
  <div>Rating: ${guess.rating}</div>
  `;

  // ADD INFO WINDOW
  const infowindow = new google.maps.InfoWindow({
    content: infoWindowContent,
  });

  marker.addListener('click', () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });

  // map.addListener('click', () => {
  //   infowindow.close();
  // });
};

const addMarkerAnimation = (guess) => {
  const marker = new google.maps.Marker({
    position: guess.geometry.location,
    animation: google.maps.Animation.DROP,
    map,
    // icon: pinIcon, // disable this if pinIcon is removed
  });

  const infoWindowContent = `
  <h4>${guess.name}</h4>
  <div>${guess.formatted_address}</div>
  <div>Rating: ${guess.rating}</div>
  `;

  // ADD INFO WINDOW
  const infowindow = new google.maps.InfoWindow({
    content: infoWindowContent,
  });

  marker.addListener('click', () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });

  infowindow.addListener('');
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

  // CLICK MAP TO CREATE MARKER
  google.maps.event.addListener(map, 'click', (event) => {
    addMarkerStatic(event.latLng);
  });

  // SET MAP STYLE FROM IMPORTED STYLE VARIABLE
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');
}

// ENSURE MAP IS MADE GLOBAL TO THE WINDOW TO OVERCOME WEBPACK ISSUES
window.initMap = initMap;

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

// TEST -  GET ALL LOCATIONS
const getAllLocations = () => {
  axios.get('/all-locations')
    .then((response) => {
      console.log('getting all locations: getAllLocations()');
      allLocs = response.data.places;
    })
    .catch((error) => {
      console.log(error);
    });
};

const getGameState = () => {
  axios.get('/gamestate/2')
    .then((response) => {
      const guesses = response.data;
      console.log(guesses);
      gamestateGuesses = guesses;
      console.log('getting gameState: getGameState()');

      // return guesses;
    }).catch((error) => {
      console.log(error);
    });
};

const displayGuesses = (guesses) => {
  // DISPLAY ALL GUESSES IN ORDER
  const guessesDiv = document.querySelector('#guesses-div');
  guessesDiv.innerHTML = ''; // clear innerhtml before repopulating
  console.log('displaying guesses: displayGuesses()');

  guesses.forEach((guess, index) => {
    const guessContainer = document.createElement('div');
    guessContainer.setAttribute('id', `guess-${index}`);
    guessContainer.innerHTML = `
    <div class='guess-container' id='guess-${index}'>
    ${guess.name}   distance: ${guess.clues.distance.toFixed(2)} km <img src="./images/direction_pointer.png" style='transform:rotate(${guess.clues.bearing}deg)' class="direction-pointer"/> 
    </div>
    `;
    guessesDiv.appendChild(guessContainer);
  });
};

const addAllGuessPins = (guesses) => {
  guesses.forEach((guess) => {
    addMarkerStatic(guess);
  });
};

const addLastGuessPin = (guesses) => {
  addMarkerAnimation(guesses[guesses.length - 1]);
};

submitGuessBtn.addEventListener('click', () => {
  const guessInput = searchInput.value;
  axios.post('/submit-guess/2', { guess: guessInput }) // TODO: ADJUST ID VARIABLE
    .then((res) => {
      console.log(res);
      const { guesses } = res.data;
      if (res.data.status !== 'found') {
        console.log('invalid guess');
        displayGuesses(guesses);
      } else {
        console.log('valid guess!');
        // displayGuesses(guesses);
        displayGuesses(guesses);
        addLastGuessPin(guesses);
        searchInput.value = '';
        console.log(guesses);
      }
    });
});

// // LOG IN
const loginNavElement = document.querySelector('#login-nav');
loginNavElement.addEventListener('click', () => {
  const gameDiv = document.querySelector('#game');
  gameDiv.style.display = 'none';
  createLoginPage();
});

// INIT GAME FUNCTIONS
checkUserLogin();
getAllLocations();
getGameState();
setTimeout(() => {
  displayGuesses(gamestateGuesses);
  addAllGuessPins(gamestateGuesses);
  console.log(gamestateGuesses);
},
300);

// const initGame = async () => {
//   await getAllLocations();
//   await getGameState();

//   // displayGuesses(guesses);
//   // addAllGuessPins(guesses);
//   // console.log(guesses);
// };

// getAllLocations(); // extracts all possible guesses from the db and places into the allLocs variable
// getGameState(); // places all guesses into the gamestateGuesses variable
