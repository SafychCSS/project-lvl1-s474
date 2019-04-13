import runGame from '..';
import getRandomNumber from '../utils';

const isEven = number => number % 2 === 0;
const condition = 'Answer "yes" if number even otherwise answer "no".';


const generateRound = () => {
  const question = getRandomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};
export default () => runGame(condition, generateRound);
