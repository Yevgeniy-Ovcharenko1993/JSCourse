const fs = require('fs');

const PATH_CL = process.argv[2];

function readFiles(pathCl) {
  fs.readdir(pathCl, (e, filenames) => {
    if (e) {
      console.log(e.message);
      return;
    }
    filenames.forEach(filename => {
      fs.readFile(pathCl + filename, 'utf-8', (err, content) => {
        if (err) {
          console.log(err.message);
        }
        fs.appendFile(`${PATH_CL}/contents.txt`, `${content}\n`, error => {
          if (error) throw error;
          console.log('Saved!');
        });
      });
    });
  });
}

readFiles(PATH_CL);
