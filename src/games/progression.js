import runGame from '../run-game';
import getRandomNumber from '../utils';

const condition = 'What number is missing in the progression?';
const countNumber = 10;
const lastChangeNumber = 9;

const generateRound = () => {
  const startNumber = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const changeElementNumber = getRandomNumber(1, lastChangeNumber);

  const generateProgression = () => {
    let nextNumberInList = startNumber + step;
    const res = [startNumber];
    for (let i = 0; i < countNumber - 1; i += 1) {
      res.push(nextNumberInList);
      nextNumberInList += step;
    }
    return res;
  };

  const listNumbers = generateProgression();
  const answer = String(listNumbers.splice(changeElementNumber, 1, '...'));
  listNumbers.splice(changeElementNumber, 1, '...');
  const getStrFromListNumbers = listNumbers.join(' ');
  return [getStrFromListNumbers, answer];
};
export default () => runGame(condition, generateRound);
