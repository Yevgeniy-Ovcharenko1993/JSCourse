const TIMER = [1000, 2000, 3000];

function firstCallback(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = number + 10;
      result > 0 ? resolve(result) : reject('Your number is lees than zero');
    }, TIMER[0]);
  });
}

function secondCallback(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = number * 3;
      result > 0 ? resolve(result) : reject('Error while processing secondCallback');
    }, TIMER[1]);
  });
}

function thirdCallback(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = number - 20;
      result > 0 ? resolve(result) : reject('Error while processing third callback');
    }, TIMER[2]);
  });
}

async function start() {
  const first = await firstCallback(5);
  console.log(`First result: ${first}`);
  const second = await secondCallback(first);
  console.log(`First result: ${second}`);
  const third = await thirdCallback(second);
  console.log(`First result: ${third}`);
}

start();
