import runGame from '../run-game';
import {
  getRandomNumber, isEven, hi, countRound, 
} from '../const';


const condition = 'Answer "yes" if number even otherwise answer "no".';


const generateRound = () => {
  const randomNumber = getRandomNumber(1, 100);
  const question = `Question: ${randomNumber}`;
  return question;
};
/*
for (let i = 0; i < 3; i += 1) {
  
  const question = `Question: ${randomNumber}`;
  console.log(question);
  const answer = readlineSync.question('Your answer: ');
  const correct = (isEven(randomNumber) && answer === 'yes') || (!isEven(randomNumber) && answer === 'no');
  if (correct) {
    console.log('Correct!');
  } else {
    console.log(`'yes' is wrong answer ;(.Correct answer was 'no'.\nLet's try again, ${userName}!`);
    return;
  }
}
*/
export default () => runGame(hi, condition, countRound, generateRound);
