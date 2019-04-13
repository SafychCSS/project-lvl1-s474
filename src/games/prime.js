import runGame from '..';
import getRandomNumber from '../utils';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let acc = 2;
  while (acc <= number / 2) {
    if (number % acc === 0) {
      return false;
    }
    acc += 1;
  }
  return true;
};

const generateRound = () => {
  const randomNumber = getRandomNumber(1, 20);
  const answer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, answer];
};
export default () => runGame(condition, generateRound);
