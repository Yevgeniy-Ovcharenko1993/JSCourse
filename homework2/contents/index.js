require('dotenv').config();
const fs = require('fs');

const config = {
  path: process.env.PATH_CL,
};

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
    config.path,
    (filename, content) => {
      data[filename] = content;
    },
    err => {
      throw err;
    },
  );

  await fs.writeFile(
    `/home/yevhenii/Documents/Courses/ma-nodejs-course-2019/homework2/contents/content.txt`,
    `${data}`,
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
