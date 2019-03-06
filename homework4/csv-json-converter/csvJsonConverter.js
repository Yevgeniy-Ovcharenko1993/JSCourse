const fs = require('fs');

const path = require('path');

const readFile = path.resolve(__dirname, '../csv-json-converter/files/Small.csv');
const writeFile = path.resolve(__dirname, '../csv-json-converter/files/result.json');

function cSVFileConverter() {
  const readStream = fs.createReadStream(readFile);
  const writeStream = fs.createWriteStream(writeFile);
  let headers = '';
  let lines = '';
  readStream.on('data', chunk => {
    console.log('New Chunk received');
    lines = chunk.toString().split('\n');
    if (headers.length > 0) {
      for (let i = 1; i < lines.length; i += 1) {
        const obj = {};
        const currentLine = lines[i].split(',');
        for (let j = 0; j < headers.length; j += 1) {
          obj[headers[j]] = currentLine[j];
        }
        writeStream.write(JSON.stringify([obj]));
      }
    } else {
      headers = lines[0].split(',');
      lines = chunk.toString().split('\n');
      for (let i = 1; i < lines.length; i += 1) {
        const obj = {};
        const currentLine = lines[i].split(',');
        for (let j = 0; j < headers.length; j += 1) {
          obj[headers[j]] = currentLine[j];
        }
        writeStream.write(JSON.stringify([obj]));
      }
    }
  });
}

cSVFileConverter();
