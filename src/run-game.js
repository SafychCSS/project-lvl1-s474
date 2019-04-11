import readlineSync from 'readline-sync';

const runGame = (welcom, condition, round, getFunction) => {
  console.log(welcom);
  console.log(condition);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < round; i += 1) {
    console.log(getFunction());
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
