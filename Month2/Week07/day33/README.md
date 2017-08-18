# Lambda University - August 17, 2017: Day 033, Thursday
## Coding Challenge #29
- "Robot Paths" available in https://github.com/LambdaSchool/CS1-Code-Challenges/tree/master/robotPaths
***
# [1st Lecture](https://youtu.be/6Fznu7dDu2g) w/Tai Chulikavit: Review Code Challenge #28: stackOfPlates
***
#### LUNCH
***
# [Brown Bag](https://youtu.be/d2YYm0qEszo) w/Thomson Comer: The Hyper Text transfer Protocol
- https://github.com/thomcom
- Protocol: a specific language
- Inter-Processed Communication (IPC)
- HTTP communicates over Sockets (there are also: pipes and named pipes, msg queueing, semaphores, shared memry and sockets)
- Sockets allow two different processes to communicate
- using `telnet`
- using `curl`
  ```console
  > GET / HTTP/1.1 <--- get the root of google according to HTTP protocol
  > Host: www.google.com
  > User-Agent: curl/7.54.0
  > Accept: */*
  ```

- metadata... Header data

- make a dir, cd in
- npm install express
- server.js
```js
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
app.get('/', (request, response) => {
  // console.log(req)
  response.send('Hello, World!\n');
});

```
- `npm i --save express` (will make package-lock.json)
- `node server.js`
- `curl localhost:8081`

- Live Reload
- Make server public on the internet with: ???

- https://www.vim-adventures.com
- https://pascalprecht.github.io/2014/03/18/why-i-use-vim

***
# [2nd Lecture](https://youtu.be/46y7cweCEM0) w/Ryan Hamblin: LS-Mongo-II Q&A
***
# fin
