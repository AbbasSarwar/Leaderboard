import './styles.css';

const Form = document.getElementById('form');
const refresh = document.getElementById('ref');
async function GameCreate() {
  const UniqueCode = () => {
    const Unique = fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: 'New Game',
      }),
    }).then((res) => res.json())
      .then((v) => {
        const spl = v.result;
        const code = spl.split(' ')[3];
        return code;
      });
    return Unique;
  };
  const codee = await UniqueCode();
  return codee;
}
async function GameCodes() {
  const callGame = await GameCreate();
  return callGame;
}
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
async function addNewUser(e) {
  e.preventDefault();
  const userInp = document.getElementById('Name').value;
  const scoreInp = document.getElementById('Score').value;
  await NewUser(userInp, scoreInp);
}
Form.addEventListener('submit', (event) => {
  event.preventDefault();
  addNewUser(event);
  const userInp = document.getElementById('Name');
  const scoreInp = document.getElementById('Score');
  userInp.value = '';
  scoreInp.value = '';
});
async function display() {
  const score = document.querySelector('.score');
  await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${GameCodes}/scores/`)
    .then((res) => res.json())
    .then((data) => {
      const allData = data.result;
      const newAr = allData.sort((a, b) => b.score - a.score);
      const itemsToDisplay = Math.min(6, newAr.length);
      let html = '';
      for (let i = 0; i < itemsToDisplay; i += 1) {
        html += `<li>${newAr[i].user}: ${newAr[i].score}</li>`;
      }
      score.innerHTML = html;
    });
}
refresh.addEventListener('click', display);