# Lambda University - August 23, 2017: Day 037, Wednesday
## Coding Challenge #33
- "Breadth First Search" available in https://github.com/LambdaSchool/CS1-Code-Challenges/tree/master/breadthFirstSearch
***
# [1st Lecture](https://youtu.be/zOhzTE6XtYE) w/Sean Chen: Review Code Challenge #32: longestRun
***
#### LUNCH
***
# [2nd Lecture](https://youtu.be/7EdIJaYmMU8) w/Ryan Hamblin: LS-Mongo-III Solution
***
# [3rd Lecture](NO_VIDEO_RECORDED) w/Ryan Hamblin: LS-Mongo-III Lab Review
***
# [4th Lecture](https://youtu.be/lcTNZXJVwd4) w/Karthik Viswanathan: Authorization mini-lab intro
> Note that I made a mistake at time 43:40. I wrote `hashA: "a"`, when I meant to write `[hashA]: "a"` on line 29. The former sets a property  with the literal key `"hashA"`, whereas the latter sets a property with the key being the *value of* the variable `hashA`. Sorry about that, wanted to clarify upfront.
1. @2m3s: [Middleware](https://youtu.be/lcTNZXJVwd4?t=2m3s)
  - local vs global middleware
  - __dirname
  - next() error handling
  - const ext = path.extname(fullPath), res.type(ext), res.send(contents)
2. @20m57s: [Sessions](https://youtu.be/lcTNZXJVwd4?t=20m57s)
  - a persistent object which lasts throughout requests
3. @33m25s: [Passwords](https://youtu.be/lcTNZXJVwd4?t=33m25s)
  - secrets, rainbow tables, salt, bcrypt

- combine all three to create an authentication system!
- using object id in session to refer to the user info in mongo
- middleware can dynamically define routes for us

# [5th Lecture](https://youtu.be/wo4LhNZHZfE) w/Karthik Viswanathan: Authorization mini-lab Q&A
# [6th Lecture](https://youtu.be/1N06A3pEAbA) w/Karthik Viswanathan: Authorization mini-Lab solution
- https://github.com/LambdaSchool/Auth-Mini/blob/finished/src/server.js#L31-L71
- Pair Programming #14: https://github.com/LambdaSchool/Auth w/Lois

***
# fin
