const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function buildPiramide() {
  rl.question('Please, the height of the pyramid: \n', height => {
    const parsed = parseInt(height, 10);
    if (typeof parsed === 'number');
    const symbol = '##';
    const empty = ' ';
    for (let i = 0; i < parsed; i++) {
      console.log(empty.repeat(parsed - i) + symbol.repeat(i + 2));
    }
    console.log('You entered wrong value program will be closed');
    rl.close();
  });
}

buildPiramide();
