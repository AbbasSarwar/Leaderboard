import GameCodes from './newGame.js';

async function NewUser(User, score) {
  fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${GameCodes}/scores/`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      user: User,
      score,
    }),
  }).then((res) => res.json())
    .then((data) => data);
}
export default NewUser;