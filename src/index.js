import './styles.css';
import NewUser from './modules/newUser.js';
import GameCodes from './modules/newGame.js';

const Form = document.getElementById('form');
const refresh = document.getElementById('ref');
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
      const itemsToDisplay = Math.min(4, newAr.length);
      let html = '';
      for (let i = 0; i < itemsToDisplay; i += 1) {
        html += `<li>${newAr[i].user}: ${newAr[i].score}</li>`;
      }
      score.innerHTML = html;
    });
}
refresh.addEventListener('click', display);