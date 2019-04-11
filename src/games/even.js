import readlineSync from 'readline-sync';
import {
  getRandomNumber, isEven, hi, condition,
} from '../const';

const gameEven = () => {
  console.log(hi);
  console.log(condition);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber(1, 20);
    const question = `Question: ${randomNumber}`;
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    const correct = (isEven(randomNumber) && answer === 'yes') || (!isEven(randomNumber) && answer === 'no');
    if (correct) {
      console.log('Correct!');
    } else {
      console.log(`'yes' is wrong answer ;(.Correct answer was 'no'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameEven;