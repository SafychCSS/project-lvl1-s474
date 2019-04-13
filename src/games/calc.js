import runGame from '..';
import getRandomNumber from '../utils';

const condition = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const generateRound = () => {
  const operand1 = getRandomNumber(1, 10);
  const operand2 = getRandomNumber(1, 10);
  const index = getRandomNumber(0, operators.length - 1);
  const operation = operators[index];
  let result = 0;
  switch (operation) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    default:
      result = 'Error. Operation is empty';
  }

  const question = `${operand1} ${operation} ${operand2}`;
  const answer = String(result);
  return [question, answer];
};

export default () => runGame(condition, generateRound);
