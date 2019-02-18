require('dotenv').config();
const fs = require('fs');

const config = {
  path: process.env.PATH_CL,
};

function getContentOfCheckedFiles(path) {
  fs.readdir(path, (error, files) => {
    if (error) {
      console.log(error.message);
      return false;
    }
    for (let i = 0; i < files.length; i++) {
      fs.readFile(`${path}${files[i]}`, (err, buf) => {
        if (err) throw err;
        for (let a = 0, len = buf.length; a < len; a++) {
          if (buf[i] > 127) {
            break;
          } else {
            return files[i];
          }
        }
      });
    }
  });
}

async function start() {
  const result = await getContentOfCheckedFiles(config.path);
  if (result.length === 0) {
    console.log('Failed!!! YOU ARE LOOOOOSER BLATb');
  } else {
    await fs.readFile(config.path, 'utf8', (err, data) => {
      if (err) {
        console.log(err.message);
      }
      fs.writeFile(
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
  };
}