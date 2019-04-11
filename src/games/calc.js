import runGame from '../run-game';
import getRandomNumber from '../helpers';

const condition = 'What is the result of the expression?';
const randomOperators = ['+', '-', '*'];

const generateRound = () => {
  const getOperationRandom = () => {
    const getRandomIndex = getRandomNumber(0, randomOperators.length - 1);
    const getOperation = randomOperators[getRandomIndex];
    return getOperation;
  };

  const operand1 = getRandomNumber(1, 10);
  const operand2 = getRandomNumber(1, 10);
  const operation = getOperationRandom();
  let res = 0;
  switch (operation) {
    case '+':
      res = operand1 + operand2;
      break;
    case '-':
      res = operand1 - operand2;
      break;
    case '*':
      res = operand1 * operand2;
      break;
    default:
      res = null;
  }

  const question = `Question: ${operand1} ${operation} ${operand2}`;
  const answer = String(res);
  const data = [question, answer];
  return data;
};

export default () => runGame(condition, generateRound);
