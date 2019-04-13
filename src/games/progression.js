import runGame from '..';
import getRandomNumber from '../utils';

const condition = 'What number is missing in the progression?';
const length = 10;

const generateProgression = () => {
  const step = getRandomNumber(1, length);
  const res = [];
  for (let i = 0; i < length; i += 1) {
    res.push(`${step}` * `${i}`);
  }
  return res;
};

const generateRound = () => {
  const changeElementNumber = getRandomNumber(1, length - 1);

  const listNumbers = generateProgression();
  const answer = String(listNumbers.splice(changeElementNumber, 1, '...'));
  listNumbers.splice(changeElementNumber, 1, '...');
  const getStrFromListNumbers = listNumbers.join(' ');
  return [getStrFromListNumbers, answer];
};
export default () => runGame(condition, generateRound);
