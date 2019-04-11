import runGame from '../run-game';
import getRandomNumber from '../const';

const condition = 'What is the result of the expression?';

const generateRound = () => {
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
