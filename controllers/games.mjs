/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import { Sequelize } from 'sequelize';

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
  /*
const create = async (req, res) => {
  const cardDeck = shuffleCards(makeDeck());
  const player1Card = cardDeck.pop();
  const player2Card = cardDeck.pop();
  let player1Score = 0;
  let player2Score = 0;

  // determine winner
  let result;

  if (player1Card.rank > player2Card.rank) {
    result = 'Player 1 wins!!';
      player1Score += 1;
    } else if (player1Card.rank < player2Card.rank) {
      result = 'Player 2 wins!!';
      player2Score += 1;
    } else {
      result = 'Draw';
    }

    try {
      // find game in progress or create new game
      const [currentGame, created] = await db.Game.findOrCreate({
        where: {
          gameState: { status: 'active' },
        },
        defaults: {
          gameState: {
            status: 'active',
            cardDeck,
            player1Card,
            player2Card,
            result,
            score: {
              player1: player1Score,
              player2: player2Score,
            },
          },
        },
      });

      console.log('game created/ joined', currentGame);

      if (created) {
        // add 2 entries to join table game_users
        console.log('player user id', req.cookies.userId);

        let player2Id;
        if (Number(req.cookies.userId) === 1) {
          player2Id = 2;
        } else if (Number(req.cookies.userId) === 2) {
          player2Id = 1;
        }
        console.log('player 2 id', player2Id);

        const player1 = await db.User.findOne({
          where: {
            id: req.cookies.userId,
          },
        });
        console.log('player 1', player1);

        const player2 = await db.User.findOne({
          where: {
            id: player2Id,
          },
        });
        console.log('player 2', player2);

        const joinTableEntry = await currentGame.addUser(player1);
        console.log('player1 game users table', joinTableEntry);

        const joinTableEntry2 = await currentGame.addUser(player2);
        console.log('player2 game users table', joinTableEntry2);
      }

      res.send({
        id: currentGame.id,
        player1Card: currentGame.gameState.player1Card,
        player2Card: currentGame.gameState.player2Card,
        result: currentGame.gameState.result,
        score: currentGame.gameState.score,
        status: currentGame.gameState.status,
      });
    }
    catch (error) {
      console.log(error);
    }
  };

  // gets another 2 cards from the current card deck
  const deal = async (req, res) => {
    console.log('game id', req.params.id);
    try {
      const currentGame = await db.Game.findByPk(req.params.id);
      console.log('current game', currentGame);

      const player1Card = currentGame.gameState.cardDeck.pop();
      const player2Card = currentGame.gameState.cardDeck.pop();

      let result;

      if (player1Card.rank > player2Card.rank) {
        result = 'Player 1 wins!!';
        currentGame.gameState.score.player1 += 1;
      } else if (player1Card.rank < player2Card.rank) {
        result = 'Player 2 wins!!';
        currentGame.gameState.score.player2 += 1;
      } else {
        result = 'Draw';
      }

      console.log('player 1 score', currentGame.gameState.score.player1);
      console.log('player 2 score', currentGame.gameState.score.player2);

      const updatedGame = await currentGame.update({
        gameState: {
          status: 'active',
          cardDeck: currentGame.gameState.cardDeck,
          player1Card,
          player2Card,
          result,
          score: {
            player1: currentGame.gameState.score.player1,
            player2: currentGame.gameState.score.player2,
          },
        },
      });
      console.log('updated', updatedGame);

      res.send({
        id: updatedGame.id,
        player1Card: updatedGame.gameState.player1Card,
        player2Card: updatedGame.gameState.player2Card,
        result: updatedGame.gameState.result,
        score: updatedGame.gameState.score,
      });
    }
    catch (error) {
      console.log(error);
    }
  };

  // gets the latest entry with the user in it
  const update = async (req, res) => {
    console.log('request body', req.body);

    try { const updatedGame = await db.Game.findOne({
      where: {
        id: req.body.id,
      },
    });
    console.log('updated game', updatedGame);

    res.send({
      id: updatedGame.id,
      player1Card: updatedGame.gameState.player1Card,
      player2Card: updatedGame.gameState.player2Card,
      result: updatedGame.gameState.result,
      score: updatedGame.gameState.score,
    });
  }
  catch (error) {
    console.log(error);
  }
};
*/

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
      console.log(currentGame);
      const { id } = currentGame.dataValues;
      res.send({ id });
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
        res.send({ guesses, active, answer });
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

      // ADD LOGIC TO CHECK DB IF GUESS EXISTS
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

        gameState.guesses.push(guess);

        if (guess.name === currentGame.game_state.answer.name) { // WIN CONDITION
          console.log('game has been won!!!');
          gameState.active = false;
          currentGame.changed('game_state', true);
          const updatedGame = await currentGame.save(); // fixes json update problem
          res.send({
            status: 'found', game: 'win', guesses: updatedGame.game_state.guesses, answer: updatedGame.game_state.answer,
          });
        }
        else if (gameState.guesses.length < 10) { // CONTINUE PLAYING CONDITION
          // end game
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
            answer: randomLocation,
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
  /*
  const logout = async (req, res) => {
    console.log('current game id', req.params.id);
    try {
      const currentGame = await db.Game.findByPk(req.params.id);
      console.log('current game', currentGame);

      const updateStatus = await currentGame.update({
        gameState: {
          status: 'completed',
        },
      });

      console.log('status updated', updateStatus);
      res.send({ status: updateStatus.gameState.status });
    }
    catch (error) {
      console.log(error);
    }
  };
  */

  return {
    findgame, gamestate, makeGuess, newGame,
  };
}
