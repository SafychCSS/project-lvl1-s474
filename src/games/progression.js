import runGame from '../run-game';
import getRandomNumber from '../utils';

const condition = 'What number is missing in the progression?';

const generateRound = () => {
  const beginProgression = getRandomNumber(1, 10);
  const stepProgression = getRandomNumber(1, 10);
  const lengthProgression = 10;
  const changeElementNumber = getRandomNumber(1, 9);

  const generateProgression = () => {
    let nextNumb = beginProgression + stepProgression;
    const res = [beginProgression];
    for (let i = 0; i < lengthProgression - 1; i += 1) {
      res.push(nextNumb);
      nextNumb += stepProgression;
    }
    return res;
  };

  const progr = generateProgression();
  const answer = String(progr.splice(changeElementNumber, 1, '...'));
  progr.splice(changeElementNumber, 1, '...');
  return [progr.join(' '), answer];
};
export default () => runGame(condition, generateRound);
