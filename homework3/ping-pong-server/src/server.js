const http = require('http');
const url = require('url');

const port = process.env.PORT || 8080;
let maxTime = 10000;

const server = http.createServer((req, res) => {
  const URL = url.parse(req.url, true);
  if (URL.pathname !== '/api/ping') {
    res.end(JSON.stringify({ msg: 'Bad URL' }));
  }

  let response = '';

  const { timer } = url.parse(URL, true).query;
  console.log(timer);
  const intTime = parseInt(timer, 10);

  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
      maxTime = JSON.parse(body);
    });
    req.on('end', () => {
      console.log(parseInt(maxTime.timer, 10));
      res.end(JSON.stringify(maxTime));
    });
  } else if (req.method.toString() !== 'GET') {
    response = JSON.stringify({ msg: 'Bad request' });
    res.setHeader('Content-type', 'application/json');
    res.statusCode = 400;
    res.end(response);
  } else if (parseInt(maxTime.timer, 10) < intTime) {
    response = JSON.stringify({ msg: `Your time is bigger than max time which is ${maxTime} ms` });
    const timerMAX = parseInt(maxTime.timer, 10);
    res.setTimeout(timerMAX, () => {
      res.setHeader('Content-type', 'application/json');
      res.statusCode = 400;
      res.end(response);
    });
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
