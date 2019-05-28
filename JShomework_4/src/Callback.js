const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const TIMER = [1000, 2000, 3000];

function firstCallback(number, callback) {
  callback(number + 10);
}

function secondCallback(number, callback) {
  callback(number * 3);
}

function thirdCallback(number, callback) {
  callback(number - 20);
}

function calculate() {
  rl.question('Enter a number what you want to calculate: ', initialNumber => {
    const parsed = parseInt(initialNumber, 10);
    setTimeout(() => {
      firstCallback(parsed, firstResult => {
        console.log(firstResult);
        setTimeout(() => {
          secondCallback(firstResult, secondResult => {
            console.log(secondResult);
            setTimeout(() => {
              thirdCallback(secondResult, thirdResult => {
                console.log(thirdResult);
              });
            }, TIMER[2]);
          });
        }, TIMER[1]);
      });
    }, TIMER[0]);
  });
}

calculate();
