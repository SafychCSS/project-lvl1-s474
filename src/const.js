const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const countRound = 3;
const hi = 'Welcome to the Brain Games!';

export {
  getRandomNumber, hi, countRound,
};
