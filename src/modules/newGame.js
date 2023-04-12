async function GameCreate() {
  const UniqueCode = () => {
    const Unique = fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Falcon',
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
export default GameCodes;