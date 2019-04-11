import readlineSync from 'readline-sync';
import runGame from '../run-game';
import {
  getRandomNumber, hi, condition, countRound,
} from '../const';

const getOperationRandom = () => {
  const operationNumber = getRandomNumber(0, 2);

  switch (operationNumber) {
    case 0:
      return ('+');
    case 1:
      return ('-');
    case 2:
      return ('*');
    default:
      return null;
  }
};

const calc = () => {
  console.log(hi);
  console.log(condition);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < countRound; i += 1) {
    const operand1 = getRandomNumber(1, 100);
    const operand2 = getRandomNumber(1, 100);
    const operation = getOperationRandom();
    let res = 0;
    if (operation === '+') {
      res = operand1 + operand2;
    } else if (operation === '-') {
      res = operand1 - operand2;
    } else if (operation === '*') {
      res = operand1 * operand2;
    }
    const question = `Question: ${operand1} ${operation} ${operand2}`;
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    const correct = res === Number(answer);
    if (correct) {
      console.log('Correct!');
    } else {
      console.log(`'yes' is wrong answer ;(.Correct answer was 'no'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default calc;
