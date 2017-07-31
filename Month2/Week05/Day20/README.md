# Lambda University - July 31, 2017: Day 020, Monday
## Coding Challenge #16
- "All Anagrams" available in https://github.com/LambdaSchool/CS1-Code-Challenges.git
***
Ben Nelson
Ryna Hamblin
Tai The Thai
Sean Chen
Emily Sperry
Christine Gierer
GUEST LECTURER
NO_VIDEO_RECORDED
***
# [1st Lecture](https://youtu.be/Ex_uCsMLQnI) w/Tai: Review Code Challenge #15: bubbleSort
- [Big O complexity](https://medium.com/cesars-tech-insights/big-o-notation-javascript-25c79f50b19b) for Bubble sort is quadratic: O(n^2)
- Do-While loop: do {x} while {y is true} loop does {something} the first time prior to checking the while condition
***
# [2nd Lecture](NO_VIDEO_RECORDED) w/Sean Checn: Redux Sprint Review
- reducers get two parameter: to old state and the action
***
# [3rd Lecture](https://youtu.be/lbAON4zRLXU) w/Ben Nelson: Redux Solution
-
***
#### LUNCH
***
# [4th Lecture](VIDEO_RECORDED_NOT_POSTED) w/Sean Checn: AJAX & HTTP
- AJAX: Asynchronous JavaScript & XML (HTML, CSS, etc. )
- HyperText Transfer Protocol
- Promises
  - Pending, Rejected or Resolved
  - Promise syntax (resolve, reject)
  - Promise chain

```js
let urBalance = 10;
let frndBalance = 200;

//Promise
const willGetPaidBack = new Promise
  (resolve, reject) => (
    if (frndBalance >= 100) {
      frndBalance -= 100;
      urBalance += 100;
      resolve(urBalance);
    } else {
      const reason = new Error ('ur frenz iz broke');
      reject(reason);
    }
  }
);

const confrontFriend = () => {
  willGetPaidBack
    .then(spendMoney);
    .then(resolved => console.log("Promise resolved", resolved))
    .catch(error => console.log("rejected with error", error))
};

const spendMoney = (balance) => {
  balance = 0;
  const message = `Your balance is now ${balance} dollars`;
  return Promise.resolve(message);
}

confrontFriend()

```

- AXIOS for HTTP requests
```js
axios.get('http://www.google.com/search?q=quokka')
  .then((response) => {
    console.log(response);
  })
  .catch()(error) => {
    console.log(error);
  });
```

- MIDDLEWARE: Redux Promise
```js
const createStoreWithMiddleWare = applyMiddleare{ReduxPromise}{createStore};
```

- Sean's code:
```js
// const myPromise = new Promise((resolve, reject) => { ... });

let yourBalance = 10;
let friendsBalance = 200;

// Promise
const willGetPaidBack = new Promise(
  (resolve, reject) => {
    if (friendsBalance >= 100) {
      friendsBalance -= 100;
      yourBalance += 100;
      resolve(yourBalance);
    } else {
      const reason = new Error(`Your friend only has a balance of ${friendsBalance} dollars.`);
      reject(reason);
    }
  }
);

const confrontFriend = () => {
  willGetPaidBack
    .then(spendMoney)
    .then(resolved => console.log('Promise resolved with value: ', resolved))
    .catch(error => console.log('Promise rejected with error: ', error));
};

const spendMoney = (balance) => {
  balance = 0;
  const message = `Your balance is now ${balance} dollars.`;
  return Promise.resolve(message);
};

// execute our Promise chain
confrontFriend();


axios.get('http://www.google.com/search?q=capybaras')
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });


const action = () => {
  const promise = axios.get('http://www.example.com');
  return {
    type: ACTION_TYPE,
    payload: promise
  };
};
```

- HTTP MINI SPRINT

```js
import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';

// // original
// export const getFriends = () => {
//     // Add the code for this action
// };

// // paste from README.md
// export const getFriends = () => {
//   const promise = axios.get('http://example.com');
//   return {
//       type: ACTION_TYPE,
//       payload: promise
//   };
// };

// Hint: The URL you want to be fetching from is http://localhost:5000/friends.
export const getFriends = () => {
  const promise = axios.get('http://localhost:5000/friends');
  return {
      type: GET_FRIENDS,
      payload: promise
  };
};
```

- Ryan's Solution:
```js
export const getFriends = () => {
    const promise = axios.get('http://localhost:5000/friends')
    .then((res) => {
        return res;
    })
    .catch((err) => {
        console.log(err);
    });
    return {
        type: GET_FRIENDS,
        payload: promise
    };
};
```


# Sprint / Q&A
***
# fin
