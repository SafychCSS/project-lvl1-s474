import readlineSync from 'readline-sync';

const countRound = 3;

const runGame = (condition, getFunction) => {
  console.log('Welcome to the Brain Games!');
  console.log(condition);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < countRound; i += 1) {
    const getQuestion = getFunction();
    const question = getQuestion[0];
    const answer = getQuestion[1];
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
