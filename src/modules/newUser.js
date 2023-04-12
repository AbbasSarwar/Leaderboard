import GameCodes from './newGame.js';

const userInp = document.getElementById('Name').value;
const scoreInp = document.getElementById('Score').value;
async function NewUser() {
  const newUser = (User, score) => {
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
  };
  await newUser(userInp, scoreInp);
}
export default NewUser;