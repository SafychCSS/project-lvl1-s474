const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isEven = number => number % 2 === 0;
const hi = 'Welcome to the Brain Games!';
const condition = 'Answer "yes" if number even otherwise answer "no".';

export {
  getRandomNumber, isEven, hi, condition,
};
