import './styles.css';

async function Game() {
  const UniqueCode = () => {
    const Unique = fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Dragon',
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

  const newUser = (User, score) => {
    const user = fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${codee}/scores/`, {
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
    console.log(user);
  };
  await newUser('Abbas', 100);
}
Game();