/* eslint-disable no-undef */
import './styles.scss';
import styleArr from './mapStyle.js';

const testEle = document.createElement('button');
testEle.innerText = 'this button does nothing';
document.body.appendChild(testEle);

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

// INITIALISE MAP
function initMap() {
  const styledMapType = new google.maps.StyledMapType(styleArr);

  const testLocation = { lat: 1.3056712, lng: 103.8102465 };
  const map = new window.google.maps.Map(document.getElementById('map'), {
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

  // CUSTOM PIN ICON
  const pinIcon = new google.maps.MarkerImage(
    '/images/pin.png',
    null,
    null,
    null,
    new google.maps.Size(30, 45),
  );

  // ADD MARKER FUNCTION
  const addMarker = (coords) => {
    const marker = new google.maps.Marker({
      position: coords,
      animation: google.maps.Animation.DROP,
      map,
      icon: pinIcon,
    });
  };

  // STATIC LOCATIONS
  const locations = [
    { lat: 1.296816794731764, lng: 103.84844472447658 },
    { lat: 1.2843594052784335, lng: 103.78211236351044 },
    { lat: 1.3044386614460384, lng: 103.81206727361928 },
  ];
  locations.forEach((location) => {
    addMarker(location);
  });

  // CLICK MAP TO CREATE MARKER
  google.maps.event.addListener(map, 'click', (event) => {
    addMarker(event.latLng);
  });

  // SET MAP STYLE FROM IMPORTED STYLE VARIABLE
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');
}

// ENSURE MAP IS MADE GLOBAL TO THE WINDOW TO OVERCOME WEBPACK ISSUES
window.initMap = initMap;

// troubleshooting google maps appearing:
// https://stackoverflow.com/questions/48705066/initmap-is-not-a-function-error-in-js-console-google-maps-api
