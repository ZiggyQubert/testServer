const express = require('express')
const app = express()
 
const PORT = 3000;
 
app.get('/', function (req, res) {
  res.send(`Hello World!<br />${new Date().toGMTString()}`);
});
 
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});