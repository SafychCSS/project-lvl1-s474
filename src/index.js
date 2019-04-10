import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
};

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const hi = 'Welcome to the Brain Games!';
const condition = 'Answer "yes" if number even otherwise answer "no".';

export const gameEven = () => {
  console.log(hi);
  console.log(condition);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const iter = (acc) => {
    const randomNumber = getRandomNumber(1, 20);
    const question = `Question: ${randomNumber}`;
    if (acc === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    const yes = randomNumber % 2 === 0 && answer === 'yes';
    const no = randomNumber % 2 !== 0 && answer === 'no';
    const correct = (yes || no);
    if (correct) {
      console.log('Correct!');
      return iter(acc + 1);
    }
    return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.Let's try again, ${userName}!`);
  };
  return iter(0);
  /*
  let i = 1;
  while (i < 4) {
    const randomNumber = getRandomNumber(1, 20);
    const question = `Question: ${randomNumber}`;
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    const yes = randomNumber % 2 === 0 && answer === 'yes';
    const no = randomNumber % 2 !== 0 && answer === 'no';
    const correct = (yes || no);
    if (correct) {
      console.log('Correct!');
      if (i === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`
        'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!
      `);
      break;
    }
    i += 1;
  }
  */
};
export default welcome;