import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
};

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isEven = number => number % 2 === 0;
const hi = 'Welcome to the Brain Games!';
const condition = 'Answer "yes" if number even otherwise answer "no".';

export const gameEven = () => {
  console.log(hi);
  console.log(condition);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  /*
  const iter = (acc) => {
    const randomNumber = getRandomNumber(1, 20);
    const question = `Question: ${randomNumber}`;
    if (acc === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    const isAnswer = (isEven(randomNumber) && answer === 'yes') ||
    (!isEven(randomNumber) && answer === 'no');
    if (isAnswer) {
      console.log('Correct!');
      return iter(acc + 1);
    }
    return console.log(`'yes' is wrong answer ;(.
    Correct answer was 'no'.Let's try again, ${userName}!
    `);
  };
  return iter(0);
  */
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber(1, 20);
    const question = `Question: ${randomNumber}`;
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    const isAnswer = (isEven(randomNumber) && answer === 'yes') || (!isEven(randomNumber) && answer === 'no');
    if (isAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'yes' is wrong answer ;(.Correct answer was 'no'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default welcome;
