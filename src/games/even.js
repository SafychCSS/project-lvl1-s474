import runGame from '../run-game';
import getRandomNumber from '../utils';

const isEven = number => number % 2 === 0;
const condition = 'Answer "yes" if number even otherwise answer "no".';


const generateRound = () => {
  const question = getRandomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  const data = [question, answer];
  return data;
};
export default () => runGame(condition, generateRound);
