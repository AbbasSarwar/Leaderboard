import './styles.css';
import NewUser from './modules/newUser.js';
import GameCodes from './modules/newGame.js';

fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${GameCodes}/scores/`)
  .then((res) => res.json())
  .then((data) => console.log(data));