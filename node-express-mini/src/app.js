const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');

const STATUS_USER_ERROR = 422;

const server = express();
// to enable parsing of json bodies for post requests
server.use(bodyParser.json());

/* Returns a list of dictionary words from the words.txt file. */
const readWords = () => {
  const contents = fs.readFileSync('words.txt', 'utf8');
  return contents.split('\n');
};

// TODO: your code to handle requests

// const randomWordPicker = (arr) => {
//   return arr[Math.floor(Math.random() * arr.length)];
// };
// const word = randomWordPicker(readWords());

const words = readWords();
const index = Math.floor(Math.random() * words.length);
const word = words[index];
console.log(word);
const guesses = {};

server.get('/', (req, res) => {
  // word.split(''); // also works
  // const wordSoFar = word.split('')
  // .map((letter) => {
  //   if (guesses[letter]) {
  //     return letter;
  //   }
  //   return '-';
  // })
  // .join('');
  const wordsSoFarArray = Array.from(word)
    .map((letter) => {
      if (guesses[letter]) {
        return letter;
      }
      return '-';
    });
  const wordsSoFar = wordsSoFarArray.join('');
  res.json({ wordsSoFar, guesses });
  // res.send(`You guessed: ${guess}`);
});


server.post('/guess', (req, res) => {
  const letter = req.body.letter;

  if (!letter) {
    res.status(STATUS_USER_ERROR);
    res.json({ error: 'Please guess a letter' });
    return;
  }
  if (letter.length !== 1) {
    res.status(STATUS_USER_ERROR);
    res.json({ error: 'Please guess ONLY a single letter' });
    return;
  }
  if (guesses[letter]) {
    res.status(STATUS_USER_ERROR);
    res.json({ error: `you already guessed ${letter}!` });
    return;
  }
  // console.log(letter);

  // add guess to obj as a key
  guesses[letter] = true;

  res.json({ guesses });
  // Keep track of the guesses
});


server.listen(3000);

//
//
//
//

// const bodyParser = require('body-parser');
// const express = require('express');
// const fs = require('fs');
//
// const STATUS_USER_ERROR = 422;
//
// const server = express();
// server.use(bodyParser.json());
//
// const readWords = () => {
//   const contents = fs.readFileSync('words.txt', 'utf8');
//   return contents.split('\n');
// };
//
// const words = readWords();
// const index = Math.floor(Math.random() * words.length);
// const word = words[index];
// console.log(word);
// const guesses = {};
//
// server.get('/', (req, res) => {
//   const wordsSoFarArray = Array.from(word)
//     .map((letter) => {
//       if (guesses[letter]) {
//         return letter;
//       }
//       return '-';
//     });
//   const wordsSoFar = wordsSoFarArray.join('');
//   res.json({ wordsSoFar, guesses });
// });
//
//
// server.post('/guess', (req, res) => {
//   const letter = req.body.letter;
//
//   if (!letter) {
//     res.status(STATUS_USER_ERROR);
//     res.json({ error: 'Please guess a letter' });
//     return;
//   }
//   if (letter.length !== 1) {
//     res.status(STATUS_USER_ERROR);
//     res.json({ error: 'Please guess ONLY a single letter' });
//     return;
//   }
//   if (guesses[letter]) {
//     res.status(STATUS_USER_ERROR);
//     res.json({ error: `you already guessed ${letter}!` });
//     return;
//   }
//   guesses[letter] = true;
//   res.json({ guesses });
// });
//
// server.listen(3000);

// // Karthik's posted solution
// const bodyParser = require('body-parser');
// const express = require('express');
// const fs = require('fs');
//
// const STATUS_USER_ERROR = 422;
//
// const server = express();
// // to enable parsing of json bodies for post requests
// server.use(bodyParser.json());
//
// /* Returns a list of dictionary words from the words.txt file. */
// const readWords = () => {
//   const contents = fs.readFileSync('words.txt', 'utf8');
//   return contents.split('\n');
// };
//
// const words = readWords();
// const index = Math.floor(Math.random() * words.length);
//
// const word = words[index];
// const guesses = {};
//
// server.get('/', (req, res) => {
//   const wordSoFar = word.split('')
//     .map((letter) => {
//       if (guesses[letter]) {
//         return letter;
//       }
//       return '-';
//     })
//     .join('');
//
//   res.json({ wordSoFar, guesses });
// });
//
// server.post('/guess', (req, res) => {
//   const letter = req.body.letter;
//
//   if (!letter) {
//     res.status(STATUS_USER_ERROR);
//     res.json({ error: 'Must provide a letter' });
//     return;
//   }
//   if (letter.length !== 1) {
//     res.status(STATUS_USER_ERROR);
//     res.json({ error: 'Must guess a single letter' });
//     return;
//   }
//   if (guesses[letter]) {
//     res.status(STATUS_USER_ERROR);
//     res.json({ error: `You've already guessed ${letter}!` });
//     return;
//   }
//
//   guesses[letter] = true;
//   res.json({ guesses });
// });
//
// server.listen(3000);
