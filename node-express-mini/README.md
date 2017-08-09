# Node.js and Express Mini Project
Topics:
  * Client and server
  * Node.js and Express
  * HTTP requests and responses
  * HTTP headers and status codes
  * Request parameters
  * API design and development

## Description
You've been focusing on client-side JavaScript thus far, but now you'll make the
transition to server-side. The goal here is to handle requests from the client
and deliver back responses. In the mini project, you'll write an implementation
of the game hangman that can be played by making HTTP requests!

## Running the Project
- Run `npm install` to download the dependencies.
- Install `nodemon` via `npm install -g nodemon`. `nodemon` will keep your
  server running and automatically restart it if you change anything.
- Install [Postman](https://www.getpostman.com/) so you can make requests and
  examine responses.
- Run `npm start` to start the server.
- Implement hangman in `src/app.js` as per the instructions below.
- To test your application at any point, run `npm start` to start the server.
  Then, you can make requests to `http://localhost:3000` in Postman or in your
  browser! To make POST requests, you'll need to use Postman. Craft the
  corrrect requests to play hangman and test your implementation!

## Instructions
You'll develop a version of Hangman that can be played by making HTTP requests!
First, some terminology:

- Final word: the final, correct word that the user is aiming to guess.
- Word so far: the word that the user currently sees based off his/her guesses.
  This is the final word with all non-guessed characters replaced by a dash
  `'-'`. For instance, if the final word is `'hello'` and the user has guessed
  `'a'`, `'e'`, and `'i'`, the word so far would be `'-e---'`.

We've given you a function `readWords()` that reads an array of dictionary words
from the `words.txt` file. First, use this function to select a random word from
the dictionary to be the final word. Note that whenver your server is restarted
(i.e. when you change files or re-run `npm start`), a new word will be selected
and the game will restart.

Now, you'll need to implement two routes:

### `POST /guess`
When the client makes a `POST` request to `/guess`:

- Ensure that the client provides `letter` in the request body. `letter` should
  be the key and the value should be a string containing only a single
  character. If there's an error, send an object of the form
  `{ error: "Error message" }` as a JSON response. Make sure to respond with
  an appropriate status code.

- If the client has already guessed this letter, respond with an error in the
  same format as mentioned above.

- Keep track of the guess in some data structure. In the `GET /` route
  implementation (see below), you'll need to use this data structure to compute
  the word so far. Think carefully about what data structure you'd like to use
  here to make the computation easy.

### `GET /`
When the client makes a `GET` request to `/guess`:

- Compute the word so far by replacing each letter in the final word that hasn't
  been guessed by `-`. Don't actually modify the final word in any way.

- Send back a JSON response containing an object with two properties,
  `wordSoFar` and `guesses`, to the client. `wordSoFar` should be the word so
  far (as per our definition underneath "Instructions"), and `guesses` should be
  the data structure you use to represent all guesses the user has made. This
  gives the user information about the current state of the game so he/she can
  formulate his/her next guess.

### Play!
Now, you can play hangman by cycling through the requests above. Make a `POST
/guess` request in Postman, passing in a `letter` in the request body. You can
then see whether you guessed correctly, what the word so far is, and the list
of guessed letters by requesting `GET /`. Keep guessing until you can figure out
the word!

## Extras
If you'd like an extra challenge (albeit not related to node/express), think
about how you'd write a program to guess the word for you. Given the dictionary
of words, how would you go about correctly guessing the final word? It's easy to
simply guess every letter, but how could you do this efficiently? Is there a way
to eliminate a large number of possible words with each guess?
