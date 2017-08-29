# Lambda University - August 28, 2017: Day 040, Monday
## Coding Challenge #36
- "Sum Of Digits" available in https://repl.it/student/submissions/1448448
***
Ben Nelson
Karthik Viswanathan
Thomson Comer
Ryan Hamblin
Sean Chen
Tai Chulikavit
Emily Sperry
Christine Gierer
GUEST LECTURER
NO_VIDEO_RECORDED
***
# [1st Lecture](https://youtu.be/SKz7oc4TIII) w/Ryan Hamblin: Review Code Challenge #35: meanMedianMode
- https://repl.it/K3ka/4

***
# [2nd Lecture](NO_VIDEO_RECORDED) w/Ben Nelson: LS-Auth Lab Sprint Review
- https://docs.google.com/document/d/1DnRLpHe_9b2YBz3BZBPlHwtfB_wPAttMbTdAbP18WDk/edit

***
# [3rd Lecture](VIDEO_RECORDED_NOT_POSTED) w/Ben Nelson: LS-Auth Solution
- use username OR password check instead of individual checks, that way hackers can't tell if they have an active username!
```js
const { username, password } = req.body;
if (!username || !password) {
  sendUserError('Please enter BOTH a USERNAME and a PASSWORD.', res);
  return;
}
```

***
#### LUNCH
***
# [4th Lecture](NO_VIDEO_RECORDED) w/Sean Chen: LS-Greenfield Q&A
- https://github.com/mixelpixel/LS-Greenfield
- Ideas:
  1. https://javascript30.com/
  2. https://swapi.co/
  3. https://github.com/seanchen1991/raiden-versus

***
# fin
