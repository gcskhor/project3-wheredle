import GooglePlaces from 'google-places';
import db from './models/index.mjs';

const places = new GooglePlaces('AIzaSyAvFStCxa8h0bJEyVvKKe93gCUsEcJYZO4');

const CENTRAL = [1.3007666248625829, 103.84961939463003];
const EAST = [1.3509391451359394, 103.94877581844166];
const SOUTH = [1.2981199253487095, 103.79031807858485];
const WEST = [1.3452307569342026, 103.69951293146265];
const NORTH = [1.431245356216933, 103.80593761990768];

const gPlaceOptions = {
  location: [1.225202239786671, 103.85031700253556],
  radius: 5000,
  sensor: false,
  language: 'en',
  rankby: 'prominence',
  types: [],
  keyword: ['attraction'],
};

places.search(gPlaceOptions, (err, response) => {
  console.log('search: ', response.results);
  console.log(`length   ${response.results.length}`);

  const placeResults = response.results;

  placeResults.forEach(async (result) => {
    console.log(result.name);
    const {
      name, vicinity, geometry, rating,
    } = result;

    try {
      await db.Place.create({
        name,
        formatted_address: vicinity,
        geometry,
        rating,
      });
    }
    catch (error) {
      console.log(error);
    }
  });
});
