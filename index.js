const express = require('express');
const util = require('util');
const http = require('http-request');

const app = express();


const PORT = 3000;

console.log(process.env);

app.get('/', (req, res) => {
  res.send(`Hello World!<br />${new Date().toGMTString()}<br />Test push!<br /><pre>${util.inspect(process.env)}</pre>`);
});

app.get('/info', (req, res) => {
  if (process.env.ECS_CONTAINER_METADATA_URI) {
    http.get(`${process.env.ECS_CONTAINER_METADATA_URI}`, function (err, res) {
      if (err) {
        res.error(err);
        return;
      }
      res.send(res.buffer.toString());
    });
  } else {
    res.send('Info not available');
  }
})


app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
