import runGame from '..';
import getRandomNumber from '../utils';

const condition = 'What number is missing in the progression?';
const length = 10;

const generateProgression = () => {
  const step = getRandomNumber(1, length);
  const startNumber = getRandomNumber(1, 10);
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(startNumber + `${step}` * `${i}`);
  }
  return result;
};

const generateRound = () => {
  const changeElementNumber = getRandomNumber(1, length - 1);

  const progression = generateProgression();
  const answer = String(progression[changeElementNumber]);
  progression.splice(changeElementNumber, 1, '...');
  const question = progression.join(' ');
  return [question, answer];
};
export default () => runGame(condition, generateRound);
