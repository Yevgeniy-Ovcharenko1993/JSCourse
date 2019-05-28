const fs = require('fs');
const { exec } = require('child_process');

const PATH_CL = process.argv[2];

function readFiles() {
  fs.readdir(PATH_CL, (readDirError, filenames) => {
    if (readDirError) {
      console.log(readDirError.message);
      return false;
    }
    filenames.forEach(filename => {
      exec(`file ${PATH_CL + filename}`, (error, stdout) => {
        if (error) {
          console.log(error.message);
          return false;
        }
        if (stdout.includes('ASCII'))
          fs.readFile(PATH_CL + filename, 'UTF-8', (filesError, content) => {
            if (filesError) {
              console.log(filesError.message);
            }
            fs.appendFile(`${PATH_CL}/contents.txt`, `${content}\n`, appendError => {
              if (appendError) {
                console.log(appendError.message);
              }
              console.log('Saved!');
            });
          });
        return true;
      });
    });
    return true;
  });
}

readFiles();
