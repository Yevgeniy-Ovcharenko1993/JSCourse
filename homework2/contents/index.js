const fs = require('fs');

const PATH_CL = process.argv[2];

function readFiles() {
  fs.readdir(PATH_CL, (readDirError, filenames) => {
    if (readDirError) {
      console.log(readDirError.message);
      return false;
    }
    filenames.forEach(filename => {
      fs.readFile(PATH_CL + filename, 'utf-8', (filesError, content) => {
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
    });
  });
}

readFiles();
