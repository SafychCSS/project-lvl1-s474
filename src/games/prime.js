import runGame from '../run-game';
import getRandomNumber from '../utils';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';


const generateRound = () => {
  const randNumb = getRandomNumber(1, 20);
  let acc = 2;
  const isSimpleNumber = (numb) => {
    while (acc <= numb / 2) {
      if (numb % acc === 0) {
        return false;
      }
      acc += 1;
    }
    return true;
  /*
    const iter = (item, acc) => {
      if (acc > item / 2) {
        return true;
      }
      if (item % acc === 0) {
        return false;
      }
      return iter(item, acc + 1);
    };
    return iter(numb, 2);
  };
  */
  };
  const isSimple = isSimpleNumber(randNumb);
  const question = `${randNumb}`;
  const answer = isSimple ? 'yes' : 'no';
  return [question, answer];
};
export default () => runGame(condition, generateRound);
