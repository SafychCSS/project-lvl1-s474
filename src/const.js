const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isEven = number => number % 2 === 0;
const countRound = 3;
const hi = 'Welcome to the Brain Games!';

export {
  getRandomNumber, isEven, hi, countRound,
};
