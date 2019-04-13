import runGame from '..';
import getRandomNumber from '../utils';

const condition = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const generateRound = () => {
  const getOperationRandom = () => {
    const getRandomIndex = getRandomNumber(0, operators.length - 1);
    const getOperation = operators[getRandomIndex];
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

  const question = `${operand1} ${operation} ${operand2}`;
  const answer = String(res);
  return [question, answer];
};

export default () => runGame(condition, generateRound);
