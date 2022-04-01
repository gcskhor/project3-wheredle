import { resolve } from 'path';
import db from './models/index.mjs';
import initPlacesController from './controllers/places.mjs';
import initGamesController from './controllers/games.mjs';

export default function bindRoutes(app) {
  const PlacesController = initPlacesController(db);
  const GamesController = initGamesController(db);

  // special JS page. Include the webpack index.html file
  app.get('/home', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });

  app.get('/all-locations', PlacesController.allLocations);
  app.post('/submit-guess', GamesController.makeGuess);
}
