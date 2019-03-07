const fs = require('fs');

const path = require('path');

const readFile = path.resolve(__dirname, '../csv-json-converter/files/Small.csv');
const writeFile = path.resolve(__dirname, '../csv-json-converter/files/result.json');

function converter(headers, lines) {
  const data = [];
  for (let i = 1; i < lines.length; i += 1) {
    const obj = {};
    const currentLine = lines[i].split(',');
    for (let j = 0; j < headers.length; j += 1) {
      obj[headers[j]] = currentLine[j];
    }
    data.push(obj);
  }
  return data;
}

function applyConvertedData() {
  const readStream = fs.createReadStream(readFile);
  const writeStream = fs.createWriteStream(writeFile);

  let headers = '';
  let lines = '';

  readStream.on('data', chunk => {
    console.log('New Chunk received');
    lines = chunk.toString().split('\n');
    headers = lines[0].split(',');
    if (headers.length > 0) {
      writeStream.write(JSON.stringify(converter(headers, lines)));
    } else {
      writeStream.write(JSON.stringify(converter(headers, lines)));
    }
  });
}

applyConvertedData();
