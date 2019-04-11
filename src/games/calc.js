import runGame from '../run-game';
import getRandomNumber from '../helpers';

const condition = 'What is the result of the expression?';

const generateRound = () => {
  const getOperationRandom = () => {
    const array = ['+', '-', '*'];
    const op = getRandomNumber(0, array.length);
    const getOperation = array[op];
    return getOperation;
  };

  const operand1 = getRandomNumber(1, 10);
  const operand2 = getRandomNumber(1, 10);
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
  const answer = String(res);
  return answer;
};

export default () => runGame(condition, generateRound);
