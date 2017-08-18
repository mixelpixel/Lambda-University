/*
* EXPRESS HELLO WORLD EXAMPLE
* https://youtu.be/d2YYm0qEszo?t=35m20s
*
* https://expressjs.com/en/starter/hello-world.html
* 1) Initialize the directory (and fill out questionairre):
*   `npm init`
* 2) Install express:
* ( --save or --no-save per https://expressjs.com/en/starter/installing.html )
*   `npm i --save express`
* 3) Launch server:
*   `node server.js`
* 4) access server:
*   `curl localhost:8081`
*/

/*******************
* express setup
********************/
const express = require('express');
const app = express();

/*******************
* server
********************/
const port = 8081;
const server = app.listen(port, () => {
  console.log('server online');
});

/*******************
* endpoint
********************/
// Comment out the app.get to see expresses handling of GET /
app.get('/', (request, response) => {
  // console.log(req) // <~~~ a stupid amount of data
  response.send('Hello, World!\n');
});

// Assignment per Thomson:
app.get('/hello', (req, res) => {
  res.send('Hello from Thomson\'s AWESOME talk!\n');
});
// $  telnet localhost 8081
// enter: "GET /hello" & hit return twice
// or, curl localhost:8081/hello

/* remaining questions:
1) how to get data out of a request, from inside the server?
2) Live Load? Like so: https://www.npmjs.com/package/express-livereload ?
3) Public server? (handshakes...) (Thomson Comer said there was a simple app/console cmd? ::runs to google::)
*/
