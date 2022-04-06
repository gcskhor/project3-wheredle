/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import { Sequelize } from 'sequelize';

const MAX_GUESSES = 5;

const haversineDistance = (aLat, aLong, gLat, gLong) => {
  const R = 6371.0710; // Radius of the Earth in miles
  const rlat1 = aLat * (Math.PI / 180); // Convert degrees to radians
  const rlat2 = gLat * (Math.PI / 180); // Convert degrees to radians
  const difflat = rlat2 - rlat1; // Radian difference (latitudes)
  const difflon = (gLong - aLong) * (Math.PI / 180); // Radian difference (longitudes)

  const d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat / 2) * Math.sin(difflat / 2) + Math.cos(rlat1) * Math.cos(rlat2) * Math.sin(difflon / 2) * Math.sin(difflon / 2)));
  return d;
};

const bearing = (destLat, destLng, startLat, startLng) => {
  // Converts from degrees to radians.
  const toRadians = (degrees) => (degrees * Math.PI) / 180;

  // Converts from radians to degrees.
  const toDegrees = (radians) => (radians * 180) / Math.PI;
  const startLatRad = toRadians(startLat);
  const startLngRad = toRadians(startLng);
  const destLatRad = toRadians(destLat);
  const destLngRad = toRadians(destLng);

  const y = Math.sin(destLngRad - startLngRad) * Math.cos(destLatRad);
  const x = Math.cos(startLatRad) * Math.sin(destLatRad) - Math.sin(startLatRad) * Math.cos(destLatRad) * Math.cos(destLngRad - startLngRad);
  let brng = Math.atan2(y, x);
  brng = toDegrees(brng);
  return (brng + 360) % 360;
};

export default function initGamesController(db) {
  const findgame = async (req, res) => {
    try {
      console.log(req.params.id);
      const userId = req.params.id;
      const currentGame = await db.Game.findOne({
        where: {
          user_id: userId,
          game_state: {
            active: true,
          },
        },
      });

      // if no active game is found, return latest updated game
      if (!currentGame) {
        const lastPlayedGame = await db.Game.findAll({
          limit: 1,
          where: {
            user_id: userId,
          },
          order: [['createdAt', 'DESC']],
        });

        const gameId = lastPlayedGame[0].dataValues.id;

        console.log(gameId);
        console.log('found a last played game');

        res.send({ gameId });
      }

      else {
        console.log(currentGame);
        const gameId = currentGame.dataValues.id;
        res.send({ gameId });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const gamestate = async (req, res) => {
    try {
      console.log('gameId: ');
      console.log(req.params.id);
      const currentGame = await db.Game.findByPk(req.params.id);
      console.log(currentGame.dataValues.game_state);

      const { guesses, active, answer } = currentGame.dataValues.game_state;

      if (active) {
        console.log('game active');
        res.send({ guesses, active });
      }
      else {
        console.log('game inactive');
        if (guesses[guesses.length - 1].name === answer.name) { // is a win
          console.log('WIN CONDITION MET, SEND OUT GAME:WIN MESSAGE');
          res.send({
            guesses, active, answer, game: 'win',
          });
        }
        else {
          res.send({
            guesses, active, answer, game: 'lose',
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const makeGuess = async (req, res) => {
    const userInput = req.body.guess;
    // console.log(req.body.guess); // works
    try {
      console.log('id');
      console.log(req.params.id);
      const currentGame = await db.Game.findByPk(req.params.id);

      console.log('Current Game: ');
      console.log(currentGame);

      // check if user's guess exists in db
      const guessedLocation = await db.Place.findOne(
        {
          where: {
            name: userInput,
          },
        },
      );

      // CHECK IF GUESS EXISTS IN 'LOCATIONS' TABLE
      if (!guessedLocation) {
        res.send({ status: 'none', guesses: currentGame.game_state.guesses });
        console.log('guessed location not found');
      }

      else { // if guessed location exists
        // UPDATE GAMESTATE JSON WITH NEW GUESS LOCATION
        const guess = guessedLocation.dataValues; // data of guessed location
        console.log(guess);
        const guessLongLat = guess.geometry.location;

        const gameState = currentGame.game_state; // current game's game state

        // CALCULATE DISTANCE AND DIRECTION BTW ANSWER AND GUESS
        const answerLocation = currentGame.game_state.answer;
        const answerLongLat = answerLocation.geometry.location;

        const answerLat = answerLongLat.lat;
        const answerLong = answerLongLat.lng;

        const guessLat = guessLongLat.lat;
        const guessLong = guessLongLat.lng;

        // add clues key to the guess in gamestate
        guess.clues = {
          distance: haversineDistance(answerLat, answerLong, guessLat, guessLong),
          bearing: bearing(answerLat, answerLong, guessLat, guessLong),
        };

        if (gameState.guesses.length < MAX_GUESSES) {
          // only add to db if guesses remaining
          gameState.guesses.push(guess);
        }

        if (guess.name === currentGame.game_state.answer.name) { // WIN CONDITION
          console.log('game has been won!!!');
          gameState.active = false;
          currentGame.changed('game_state', true);
          const updatedGame = await currentGame.save(); // fixes json update problem
          res.send({
            status: 'found', game: 'win', guesses: updatedGame.game_state.guesses, answer: updatedGame.game_state.answer,
          });
        }
        else if (gameState.guesses.length < MAX_GUESSES) { // CONTINUE PLAYING CONDITION
          gameState.active = true;
          currentGame.changed('game_state', true);
          const updatedGame = await currentGame.save(); // fixes json update problem
          res.send({ status: 'found', guesses: updatedGame.game_state.guesses });
        }
        else { // LOSE CONDITION
          gameState.active = false;
          currentGame.changed('game_state', true);
          const updatedGame = await currentGame.save(); // fixes json update problem
          res.send({
            status: 'found',
            game: 'lose',
            guesses: updatedGame.game_state.guesses,
            answer: updatedGame.game_state.answer,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const newGame = async (req, res) => {
    console.log(req.body.userId);
    const { userId } = req.body;

    try {
      // find games from x user where game is active
      const activeGames = await db.Game.findAll({
        where: {
          user_id: userId,
          game_state: {
            active: true,
          },
        },
      });

      if (activeGames.length > 0) { // if games are active, deny newGame
        console.log('active game(s) is/are present, no new game created');
        console.log(activeGames);
        res.send({ message: 'An active game is already in progress.' });
      }
      else {
        // gets a random location from the Place table
        const randomLocation = await db.Place.findAll({
          order: Sequelize.literal('random()'),
          limit: 1,
        });
        console.log(randomLocation);

        // asigns random location as an answer to a new game
        const currentGame = await db.Game.create({
          user_id: userId,
          game_state: {
            active: true,
            guesses: [],
            answer: randomLocation[0],
          },
        });

        const { guesses, active } = currentGame.dataValues.game_state;
        console.log(currentGame);

        res.send({ guesses, active });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    findgame, gamestate, makeGuess, newGame,
  };
}
