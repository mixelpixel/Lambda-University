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
// console.log(readWords());
// const randomWord = readWords()[Math.floor(Math.random() * readWords().length)];
// console.log(randomWord);
const words = readWords();
const index = Math.floor(Math.random() * words.length);
const word = words[index];

// const randomWordPicker = (arr) => {
//   return arr[Math.floor(Math.random() * arr.length)];
// };
// const word = randomWordPicker(readWords());
console.log(word);

const guesses = {};

server.post('/guess', (req, res) => {
  // letter is key, value is parameter
  // want only a single character
  // post parameter is in the request body
  const letter = req.body.letter;

  if (!letter) {
    res.status(STATUS_USER_ERROR);
    res.json({ error: 'Please guess a single letter' });
    return;
  }
  if (!letter.length !== 1) {
    res.status(STATUS_USER_ERROR);
    res.json({ error: 'Please guess ONLY a single letter' });
    return;
  }
  if (guesses[letter]) {
    res.status(STATUS_USER_ERROR);
    res.json({ error: `cannot guess ${letter} again` });
    return;
  }
  // console.log(letter);

  // add guess to obj as a key
  guesses[letter] = true;

  res.send({ guesses });
  // Keep track of the guesses
});

server.get('/', (req, res) => {
  // word.split(''); // also works
  const wordsSoFarArray = Array.from(word).map((letter) => {
    // if letter has been guessed already
    // can use a Set or Obj - unique keys
    if (guesses[letter]) {
      return letter;
    }
    return '-';
  });
  const wordsSoFar = wordsSoFarArray.join('');
  res.send({ wordsSoFar, guesses })
  // res.send(`You guessed: ${guess}`);
})



server.listen(3000);
