import readlineSync from 'readline-sync';

const roundsCount = 3;

const runGame = (condition, getRound) => {
  console.log('Welcome to the Brain Games!');
  console.log(condition);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = getRound();
    console.log(`Question: ${question}`);
    const getAnswer = readlineSync.question('Your answer: ');
    console.log(getAnswer);
    if (answer === getAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${getAnswer}' is wrong answer ;(.`);
      console.log(`Correct answer '${answer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
