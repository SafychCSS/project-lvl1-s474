import readlineSync from 'readline-sync';

const runGame = (welcom, condition, round, getFunction) => {
  console.log(welcom);
  console.log(condition);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < round; i += 1) {
    const answer = getFunction();
    const getAnswer = readlineSync.question('Your answer: ');
    if (answer === getAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'yes' is wrong answer ;(.Correct answer was 'no'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
