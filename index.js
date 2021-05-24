const express = require('express');
const util = require('util');

const app = express();
 
 
const PORT = 3000;
 
 console.log(process.env);
 
app.get('/', function (req, res) {
  res.send(`Hello World!<br />${new Date().toGMTString()}<br />Test push!<br /><pre>${util.inspect(process.env)}</pre>`);
});
 
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});