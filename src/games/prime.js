import runGame from '../run-game';
import getRandomNumber from '../utils';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
let acc = 2;
const isSimpleNumber = (number) => {
  while (acc <= number/ 2) {
    if (number % acc === 0) {
      return false;
    }
    acc += 1;
  }
  return true;
};

const generateRound = () => {
  const randomNumber = getRandomNumber(1, 20);
  const isSimple = isSimpleNumber(randomNumber);
  const question = `${randomNumber}`;
  const answer = isSimple ? 'yes' : 'no';
  return [question, answer];
};
export default () => runGame(condition, generateRound);
