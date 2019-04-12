import runGame from '../run-game';
import getRandomNumber from '../utils';

const condition = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};

const generateRound = () => {
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);
  const question = `${num1} ${num2}`;
  const answer = String(getGcd(num1, num2));
  const data = [question, answer];
  return data;
};
export default () => runGame(condition, generateRound);
