const fs = require('fs');

const path = require('path');

const readFile = path.resolve(
  __dirname,
  '../csv-json-converter/files/annual-enterprise-survey-2017-financial-year-provisional.csv',
);
const writeFile = path.resolve(__dirname, '../csv-json-converter/files/result.json');

// const PATH_CL = process.argv[2];

function cSVFileConverter(pathParam, callback) {
  const stream = fs.createReadStream(pathParam);
  const data = [];
  stream.on('readable', () => {
    const chunk = stream.read();
    if (chunk) {
      const lines = chunk.toString().split('\n');
      const headers = lines[0].split(',');
      for (let i = 1; i < lines.length; i += 1) {
        const obj = {};
        const currentLine = lines[i].split(',');
        for (let j = 0; j < headers.length; j += 1) {
          obj[headers[j]] = currentLine[j];
        }
        data.push(obj);
      }
    }
  });

  stream.on('close', () => {
    callback(null, data);
  });

  stream.on('error', err => {
    callback(err);
  });
}

cSVFileConverter(readFile, (err, data) => {
  console.log(err);
  const stream = fs.createWriteStream(writeFile);
  stream.write(JSON.stringify(data));
});
