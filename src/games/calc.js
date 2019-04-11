import runGame from '../run-game';
import {
  hi, countRound,
} from '../const';

const condition = 'What is the result of the expression?';

/*
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
*/

export default () => runGame(hi, condition, countRound);
