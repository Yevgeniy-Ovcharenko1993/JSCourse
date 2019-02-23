require('dotenv').config();

const http = require('http');
const url = require('url');

const port = process.env.PORT || 8080;
// const timerResponse = process.env.TIMER;

const server = http.createServer((req, res) => {
  const URL = req.url;
  console.log(URL);

  let response = '';

  const { timer } = url.parse(URL, true).query;
  const intTime = parseInt(timer, 10);

  if (req.method.toString() !== 'GET' || !URL.toString().includes(`/api/ping/?timer=${intTime}`)) {
    response = JSON.stringify({ msg: 'Bad request' });
    res.setHeader('Content-type', 'application/json');
    res.statusCode = 400;
    res.end(response);
  } else {
    response = JSON.stringify({ msg: 'Pong' });
    res.setTimeout(intTime, () => {
      res.setHeader('Content-type', 'application/json');
      res.statusCode = 200;
      res.end(response);
    });
  }
});

server.listen(port, () => {
  console.log(`Server has been started on ${port}`);
});
