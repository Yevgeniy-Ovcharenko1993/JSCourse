const path = require('path');
const readline = require('readline');
const fs = require('fs');

const readFile = path.resolve(
  __dirname,
  '../csv-json-converter/files/annual-enterprise-survey-2017-financial-year-provisional.csv',
);
const writeFile = path.resolve(__dirname, '../csv-json-converter/files/result.json');

const rl = readline.createInterface({
  input: fs.createReadStream(readFile),
});

function converter(headers, line) {
  let data = '';
  for (let i = 1; i < line.length; i += 1) {
    const obj = {};
    for (let j = 0; j < headers.length; j += 1) {
      obj[headers[j]] = line[j];
    }
    data = obj;
  }
  return data;
}

function applyConvertedData() {
  const writeStream = fs.createWriteStream(writeFile);

  let headers;
  let lines;
  writeStream.write('[');
  rl.on('line', line => {
    if (!headers) {
      headers = line.toString().split(',');
      return;
    }
    if (!lines) {
      lines = line.split(',');
      writeStream.write(JSON.stringify(converter(headers, line.split(','))));
    } else {
      writeStream.write(`, ${JSON.stringify(converter(headers, line.split(',')))}`);
    }
  });

  rl.on('close', line => {
    writeStream.write(']');
  });
}

applyConvertedData();
