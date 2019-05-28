const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const TIMER = [1000, 2000, 3000];

function firstCallback(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = number + 10;
      console.log(`First result: ${result}`);
      result > 0 ? resolve(result) : reject('Your number is lees than zero');
    }, TIMER[0]);
  });
}

function secondCallback(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = number * 3;
      console.log(`Second result: ${result}`);
      result > 0 ? resolve(result) : reject('Error while processing secondCallback');
    }, TIMER[1]);
  });
}

function thirdCallback(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = number - 20;
      console.log(`Third result: ${result}`);
      result > 0 ? resolve(result) : reject('Error while processing third callback');
    }, TIMER[2]);
  });
}

function calculateByPromise() {
  rl.question('Enter the number what you want to calculate:', arg => {
    const parsed = parseInt(arg, 10);
    firstCallback(parsed)
      .then(secondCallback)
      .then(thirdCallback);
  });
}

calculateByPromise();
