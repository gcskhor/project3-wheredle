import './styles.scss';
import styleArr from './mapStyle.js';

console.log('hello yo WORKS???');

const testEle = document.createElement('button');
testEle.innerText = 'whatsup';
document.body.appendChild(testEle);

const axios = require('axios');

const config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+singapore&key=AIzaSyAZJ3xmSE-qQq3a37nzAQqw6Uwk2C8tr1g',
  headers: { },
};

axios(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });

// Initialize and add the map
/*

function initMap() {
  // The location of Uluru
  const styledMapType = new google.maps.StyledMapType(styleArr);
  const testLocation = { lat: 1.3056712, lng: 103.8102465 };
  // The map, centered at Uluru
  const map = new window.google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: testLocation,
  });
  // The marker, positioned at Uluru

  const pinIcon = new google.maps.MarkerImage(
    '/images/pin.png',
    null,
    null,
    null,
    new google.maps.Size(30, 45),
  );

  const addMarker = (coords) => {
    const marker = new google.maps.Marker({
      position: coords,
      map,
      icon: pinIcon,
    });
  };

  const locations = [
    { lat: 1.296816794731764, lng: 103.84844472447658 },
    { lat: 1.2843594052784335, lng: 103.78211236351044 },
    { lat: 1.3044386614460384, lng: 103.81206727361928 },
  ];

  locations.forEach((location) => {
    addMarker(location);
  });

  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');
}

window.initMap = initMap;

*/

// troubleshooting google maps appearing:
// https://stackoverflow.com/questions/48705066/initmap-is-not-a-function-error-in-js-console-google-maps-api
