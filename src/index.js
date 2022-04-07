/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable no-undef */
import 'regenerator-runtime/runtime';
import './styles.scss';
import styleArr from './mapStyle.js';
import {
  createLoginPage, checkUserLogin, forceLoginPage, createSignupPage,
} from './login.js';

const ColorScale = require('color-scales');

const colorScale = new ColorScale(0, 150, ['#E36055', '#F5F5F3', '#91D1D1']);

const distToColour = (distance) => {
  const multiplier = 15;
  let distNum = Math.floor(distance * multiplier);
  if (distNum > 150) {
    distNum = 150;
  }
  if (distNum < 0) {
    distNum = 0;
  }
  const hexStr = colorScale.getColor(distNum).toHexString();
  return hexStr;
};

// GLOBAL VARIABLES
let allLocs = null;
let gamestateGuesses = null;
let gameIsActive = true;
let gameWon = null;
let gameAnswer = null;
let markersOn = false;

const initGlobalVars = () => {
  gamestateGuesses = null;
  gameIsActive = true;
  gameWon = null;
  gameAnswer = null;
  markersOn = false;
};

// GOOGLE API CONFIG + API KEY
const axios = require('axios');

let map;
const markers = [];
const allLocationMarkers = [];

function clearMarkers() {
  // console.log('clearing markers...');
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers.length = 0;
}

function setMapOnAll(map) {
  for (let i = 0; i < allLocationMarkers.length; i += 1) {
    allLocationMarkers[i].setMap(map);
  }
}

function hideMarkers() {
  setMapOnAll(null);
}

function showMarkers() {
  setMapOnAll(map);
}

const infoWindowHTMLContent = (location) => {
  const content = `
  <h5>${location.name}</h5>
  <div>Address: 
    </br>
    <b>${location.formatted_address}</b>
  </div>
  <div style="margin-top:3px">
    Rating: </br>
    <b>${location.rating}</b>
  </div>
  `;
  return content;
};

const addMapLocationMarkers = (location) => {
  const marker = new google.maps.Marker({
    position: location.geometry.location,
    map,
    icon: {
      // url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
      url: '/images/loc_pin.png',
      scaledSize: new google.maps.Size(22, 35),

    }, // disable this if pinIcon is removed
    zIndex: 10,
  });

  const infoWindowContent = infoWindowHTMLContent(location);

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
  allLocationMarkers.push(marker);

  hideMarkers(); // turn off markers on init
};

const addAllMapLocationMarkers = (locations) => {
  locations.forEach((location) => {
    addMapLocationMarkers(location);
  });
};

// ADD MARKER FUNCTION
const addMarkerStatic = (guess) => {
  const marker = new google.maps.Marker({
    position: guess.geometry.location,
    map,
    zIndex: 99,

    // icon: pinIcon, // disable this if pinIcon is removed
  });

  const infoWindowContent = infoWindowHTMLContent(guess);

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
  markers.push(marker);
};

const addMarkerAnimation = (guess) => {
  const marker = new google.maps.Marker({
    position: guess.geometry.location,
    animation: google.maps.Animation.DROP,
    map,
    zIndex: 99,

    // icon: pinIcon, // disable this if pinIcon is removed
  });

  // pan map to marker
  map.panTo(marker.getPosition());

  const infoWindowContent = infoWindowHTMLContent(guess);

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
  markers.push(marker);
};

const addMarkerAnswer = (guess) => {
  const marker = new google.maps.Marker({
    position: guess.geometry.location,
    animation: google.maps.Animation.DROP,
    map,
    icon: {
      url: '/images/answer_pin2.png',
      scaledSize: new google.maps.Size(27, 43),
    },
    zIndex: 9999,

  });

  // pan map to marker
  map.panTo(marker.getPosition());

  const infoWindowContent = infoWindowHTMLContent(guess);

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
  markers.push(marker);
};

function LocationToggleControl(controlDiv) {
  // Set CSS for the control border.
  const controlUI = document.createElement('div');

  controlUI.style.backgroundColor = '#fff';
  controlUI.style.border = '2px solid #fff';
  controlUI.style.borderRadius = '3px';
  controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.2)';
  controlUI.style.cursor = 'pointer';
  controlUI.style.marginTop = '8px';
  controlUI.style.marginBottom = '22px';
  controlUI.style.marginRight = '10px';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Click to recenter the map';
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  const controlText = document.createElement('div');

  controlText.style.color = 'rgb(25,25,25)';
  controlText.style.fontFamily = 'Quicksand,Arial,sans-serif';
  controlText.style.fontSize = '16px';
  controlText.style.lineHeight = '25px';
  controlText.style.paddingBottom = '1px';
  controlText.style.paddingLeft = '5px';
  controlText.style.paddingRight = '5px';
  // controlText.innerHTML = 'toggle all locations';
  controlText.innerHTML = '<img src="/images/pin.png" id="all-locations-pin-img" width="15">';
  controlUI.appendChild(controlText);
  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener('click', () => {
    // let markersOn = false;
    if (markersOn) {
      hideMarkers();
      console.log('hiding markers');
      markersOn = false;
    }
    else {
      showMarkers();
      console.log('showing markers');
      markersOn = true;
    }
  });
}

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
    keyboardShortcuts: false, //
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

  // CUSTOM BUTTON
  const locationButtonControlDiv = document.createElement('div');
  LocationToggleControl(locationButtonControlDiv);
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(locationButtonControlDiv);

  // CLICK MAP TO CREATE MARKER
  google.maps.event.addListener(map, 'click', (event) => {
    addMarkerStatic(event.latLng);
  });

  // SET MAP STYLE FROM IMPORTED STYLE VARIABLE
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');
}

// troubleshooting google maps appearing:
// https://stackoverflow.com/questions/48705066/initmap-is-not-a-function-error-in-js-console-google-maps-api

// AUTO COMPLETE GUESS INPUT
const searchInput = document.getElementById('search-input');
const matchList = document.getElementById('match-list');
const submitGuessBtn = document.getElementById('submit-guess');

const outputHtml = (matches) => {
  if (matches.length > 0) {
    const html = matches.map((match, index) => `<div id="place-${index}" class="card card-body">
        <p>${match.name}</p>
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

  outputHtml(matches);
};

searchInput.addEventListener('input', () => {
  searchLocations(searchInput.value);
});

// TEST -  GET ALL LOCATIONS
const getAllLocations = () => {
  axios.get('/all-locations')
    .then((response) => {
      allLocs = response.data.places;
      console.log(allLocs);
      addAllMapLocationMarkers(allLocs);
    })
    .catch((error) => {
      console.log(error);
    });
};

const getUserId = () => {
  const cookies = document.cookie.split('; ');
  const userId = cookies
    .find((cookie) => cookie.startsWith('userId'))
    ?.split('=')[1];
  return userId;
};

const getGameId = () => {
  const userId = getUserId();
  console.log(`userId:  ${userId}`);

  return axios.get(`/findgame/${userId}`).then((response) => response.data.gameId);
  // if no game found, create new game and respond with new game
};

const getGameState = async () => {
  const gameId = await getGameId();
  console.log('getgamestate');

  console.log(gameId);

  await axios.get(`/gamestate/${gameId}`)
    .then((response) => {
      console.log(response);
      const {
        guesses, answer, active, game,
      } = response.data;
      console.log('getting gameState: getGameState()');
      gamestateGuesses = guesses;
      console.log(guesses);

      if (!active) {
        gameIsActive = false;
        gameAnswer = answer;
        console.log(gameAnswer);
        gameWon = game === 'win';
      }

      // return guesses;
    }).catch((error) => {
      console.log(error);
    });
};

const guessContainerInnerHTML = (guess, index) => {
  const innerHTMLStr = `
    <div class='row guess-container rounded' id='guess-${index}'>
      <div class="col-8 p-1">
        <b>${guess.name}</b>
      </div>
      <div class="col-4 p-1 text-right">
        ${guess.clues.distance.toFixed(2)} km 
        <img 
          src="./images/direction_pointer.png" 
          style='transform:rotate(${guess.clues.bearing}deg)' 
          class="direction-pointer"
        />
      </div>
    </div>
    `;
  return innerHTMLStr;
};

const displayGuesses = async (guesses) => {
  // DISPLAY ALL GUESSES IN ORDER
  const guessesDiv = document.querySelector('#guesses-div');
  guessesDiv.innerHTML = ''; // clear innerhtml before repopulating
  document.querySelector('#submit-guess-input').style.display = 'flex';

  console.log('displaying guesses: displayGuesses()');

  if (!guesses) {
    console.log('no guesses found');
  }

  guesses.forEach((guess, index) => {
    const guessContainer = document.createElement('div');
    guessContainer.setAttribute('id', `guess-${index}`);
    guessContainer.innerHTML = guessContainerInnerHTML(guess, index);
    guessContainer.classList.add('rounded');
    guessContainer.style.background = distToColour(guess.clues.distance);
    guessesDiv.appendChild(guessContainer);
  });

  console.log(`gameIsActive:   ${gameIsActive}`);
};

const hideGuessInput = () => {
  document.querySelector('#submit-guess-input').style.display = 'none';
};

const displayGuessesWin = (guesses) => {
  // DISPLAY ALL GUESSES IN ORDER
  const guessesDiv = document.querySelector('#guesses-div');
  guessesDiv.innerHTML = ''; // clear innerhtml before repopulating
  console.log('displaying guesses: displayGuessesWin()');

  guesses.forEach((guess, index) => {
    if (index < guesses.length - 1) { // all guesses except last
      const guessContainer = document.createElement('div');
      guessContainer.setAttribute('id', `guess-${index}`);
      // guessContainer.innerHTML = `
      // <div class='guess-container' id='guess-${index}'>
      // ${guess.name}       ${guess.clues.distance.toFixed(2)}km <img src="./images/direction_pointer.png" style='transform:rotate(${guess.clues.bearing}deg)' class="direction-pointer"/>
      // </div>
      // `;
      guessContainer.innerHTML = guessContainerInnerHTML(guess, index);
      guessContainer.classList.add('rounded');
      guessContainer.style.background = distToColour(guess.clues.distance);

      guessesDiv.appendChild(guessContainer);
      // buildGuessContainer(guess, index);
    }
    else { // last guess
      const guessContainer = document.createElement('div');
      guessContainer.setAttribute('id', `guess-${index}`);
      guessContainer.innerHTML = `
      <div class='guess-container' id='guess-${index} guess-correct'>
      <b>${guess.name}</b>
      <div>Congrats, you guessed right!</div>
      </div>
      `;
      guessContainer.classList.add('rounded');
      guessContainer.style.background = distToColour(guess.clues.distance);
      guessesDiv.appendChild(guessContainer);
      hideGuessInput();
    }
  });
};

const displayGuessesLose = (guesses) => {
  // TODO: FINISH THIS FUNCTION
  const guessesDiv = document.querySelector('#guesses-div');
  guessesDiv.innerHTML = ''; // clear innerhtml before repopulating
  console.log('displaying Lose guesses: displayGuessesLose()');

  guesses.forEach((guess, index) => {
    const guessContainer = document.createElement('div');
    guessContainer.setAttribute('id', `guess-${index}`);
    guessContainer.innerHTML = guessContainerInnerHTML(guess, index);
    guessContainer.classList.add('rounded');
    guessContainer.style.background = distToColour(guess.clues.distance);

    guessesDiv.appendChild(guessContainer);
    // buildGuessContainer(guess, index);
  });

  // ANSWER CONTAINER
  const answerContainer = document.createElement('div');
  answerContainer.setAttribute('id', 'answer-container');

  answerContainer.innerHTML = `
    <div class='row rounded guess-container' id='lose-answer'>
      <div class='col-12 rounded p-1'>
        <b>${gameAnswer.name}</b>
        <div>was the right answer. Better luck next time!</div>
      </div>
    </div>
  `;
  answerContainer.classList.add('rounded');
  guessesDiv.appendChild(answerContainer);
  hideGuessInput();
};

const addAllGuessPins = (guesses, answer) => {
  console.log('adding guess pins');
  guesses.forEach((guess) => {
    addMarkerStatic(guess);
  });

  addMarkerAnswer(gameAnswer);
};

const addLastGuessPin = (guesses) => {
  addMarkerAnimation(guesses[guesses.length - 1]);
};

const submitGuess = async () => {
  const guessInput = searchInput.value;
  const gameId = await getGameId();
  console.log(gameId);

  axios.post(`/submit-guess/${gameId}`, { guess: guessInput })
    .then((res) => {
      console.log(res);
      const { guesses, game, answer } = res.data;
      if (res.data.status !== 'found') {
        console.log('invalid guess');
        displayGuesses(guesses);
      } else {
        console.log('valid guess!');
        displayGuesses(guesses);
        addLastGuessPin(guesses);
        searchInput.value = '';
        console.log(guesses);
        if (game === 'win') {
          console.log('WIN BY SUBMIT');

          gameAnswer = answer; // update global answer variable
          // change last box to something different!
          displayGuessesWin(guesses);
          addMarkerAnswer(answer);
          showNewGameButton();
        }
        if (game === 'lose') {
          console.log('LOSE BY SUBMIT');
          gameAnswer = answer; // update global answer variable
          // DISPLAY GUESSES LOSE ()
          displayGuessesLose(guesses);
          addMarkerAnswer(answer);
          showNewGameButton();
        }
      }
    });
};

submitGuessBtn.addEventListener('click', submitGuess);

// COLLAPSE NAVBAR
const collapseNavbar = () => {
  const navLinks = document.getElementById('.nav-item');
  const menuToggle = document.getElementById('navbarNav');
  const bsCollapse = new bootstrap.Collapse(menuToggle);
  navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle(); });
  });
};

// GO TO GAME
const gameNavElement = document.querySelector('#game-nav');
gameNavElement.addEventListener('click', () => {
  initGame();
  document.querySelector('#game').style.display = 'block';
  document.querySelector('#signup-page').style.display = 'none';
  document.querySelector('#login-page').style.display = 'none';
  collapseNavbar();
});

// LOG IN NAV
const loginNavElement = document.querySelector('#login-nav');
loginNavElement.addEventListener('click', () => {
  const gameDiv = document.querySelector('#game');
  gameDiv.style.display = 'none';
  document.querySelector('#game').style.display = 'none';
  document.querySelector('#signup-page').style.display = 'none';
  createLoginPage();
  collapseNavbar();
});

// SIGN UP NAV
const signupNavElement = document.querySelector('#signup-nav');
signupNavElement.addEventListener('click', () => {
  const gameDiv = document.querySelector('#game');
  gameDiv.style.display = 'none';
  document.querySelector('#game').style.display = 'none';
  document.querySelector('#login-page').style.display = 'none';

  createSignupPage();
  collapseNavbar();
});

// SIGNUP LINK
const signupLink = document.querySelector('#signup-link');
signupLink.addEventListener('click', () => {
  document.querySelector('#login-page').style.display = 'none';
  createSignupPage();
});

// SIGNUP REDIRECT TO LOGIN
const signupSubmit = document.querySelector('#signup-submit');
signupSubmit.addEventListener('click', () => {
  forceLoginPage();
  collapseNavbar();
});

// LOG OUT
const logoutNavElement = document.querySelector('#logout-nav');
logoutNavElement.addEventListener('click', async () => {
  const gameDiv = document.querySelector('#game');
  gameDiv.style.display = 'none';
  await axios.post('/logout');
  forceLoginPage();
  collapseNavbar();
});

// HIDE MAP BUTTON
const hideMapButton = document.querySelector('#hide-map-button');
let mapShown = true;
hideMapButton.addEventListener('click', () => {
  const mapEle = document.getElementById('map');
  if (mapShown) {
    console.log('hiding map');
    mapEle.style.display = 'none';
    mapShown = false;
  }
  else {
    mapEle.style.display = 'block';
    mapShown = true;
    console.log('showing map');
  }
  collapseNavbar();
});

const startNewGame = async () => {
  const newGameButton = document.querySelector('#new-game-button');

  const userId = await getUserId();
  await axios.post('/newgame', { userId })
    .then(
      initGame(),
    );
  newGameButton.style.display = 'none'; // hides button
};

const showNewGameButton = () => {
  const newGameButton = document.querySelector('#new-game-button');
  newGameButton.style.display = 'block';
  newGameButton.addEventListener('click', startNewGame);
};

const initGame = () => {
  // INIT GAME FUNCTIONS
  initGlobalVars();
  clearMarkers();
  checkUserLogin();
  getAllLocations(); // extracts all possible guesses from the db and places into the allLocs variable
  getGameState(); // places all guesses into the gamestateGuesses variable
  // showNewGameButton();
  setTimeout(() => {
    if (gameIsActive) {
      displayGuesses(gamestateGuesses);
      document.querySelector('#new-game-button').style.display = 'none';
    }
    else if (gameWon) {
      displayGuessesWin(gamestateGuesses);
      showNewGameButton();
      console.log('this shows that GAME WIN is true');
    }
    else {
      displayGuessesLose(gamestateGuesses);
      showNewGameButton();
      console.log('this shows that GAME LOSE is true');
    }

    addAllGuessPins(gamestateGuesses);
    console.log(gamestateGuesses);
  },
  300);
};
export default initGame;

// ENSURE MAP IS MADE GLOBAL TO THE WINDOW TO OVERCOME WEBPACK ISSUES
window.initMap = initMap;

initGame();
