const fs = require('fs');

function grab(flag) {
  const index = process.argv.indexOf(flag);
  return index === -1 ? null : process.argv[index + 1];
}

function readFiles(dirname, onFileContent, onError) {
  fs.readdir(dirname, (err, filenames) => {
    if (err) {
      onError(err);
      return;
    }
    filenames.forEach(filename => {
      fs.readFile(dirname + filename, 'utf-8', (error, content) => {
        if (error) {
          onError(error);
          return;
        }
        onFileContent(filename, content);
      });
    });
  });
}

async function start() {
  const data = {};

  await readFiles(
    grab('--path'),
    (filename, content) => {
      data[filename] = content;
    },
    err => {
      throw err;
    },
  );

  await fs.writeFile(
    `/home/dev41/Documents/MOC/Practice/ma-nodejs-course-2019/homework2/contents/content.txt`,
    data,
    err => {
      if (err) {
        console.log(err.message);
        return false;
      }
      console.log('file created. data inserted');
    },
  );
}

start();

//   for (let a = 0, len = buf.length; a < len; a++) {
//     if (buf[i] > 127) {
//       break;
//     } else {
//       return files[i];
//     }
//   }
// }
