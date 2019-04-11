import runGame from '../run-game';
import {
  getRandomNumber, hi, countRound,
} from '../const';

const isEven = number => number % 2 === 0;
const condition = 'Answer "yes" if number even otherwise answer "no".';


const generateRound = () => {
  const question = getRandomNumber(1, 100);
  console.log(`Question: ${question}`);
  const answer = isEven(question) ? 'yes' : 'no';
  return answer;
};
export default () => runGame(hi, condition, countRound, generateRound);
