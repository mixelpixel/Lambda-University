# Lambda University - July 27, 2017: Day 018, Thursday
## Coding Challenge #14
- "Queue Stack" available in https://github.com/ryanhca/CS1-Code-Challenges
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
# [1st Lecture](VIDEO_RECORDED_NOT_POSTED) w/Ben Nelson: Review Code Challenge #13 constructors
- Object Oriented Design
- the inheritance is like a tree
- ES6 classes are syntactic sugar built upon ES5 Prototypes
- `constructor(options)` vs `constructor(props)` vs `constructor(foofie)` same difference? :+1:
- private methods? e.g. so only a DM can set character levels - JS uses pseudo privacy, just a convention. Something similar can be done with closure, or checking is caller is inrtended function otherwise returning false.
- different syntax for node, but you could break down each class into a file, make import and export statements and then have a `game.js` file which runs the game and imports all the classes
  - /gameClasses/NPC.js
  ```js
  class NPC {
    constructor(options) {
      ...
    }
  }

  export default NPC;
  ```

  - /gameClasses/Humanoid.js
  ```js
  import NPC from './NPC'

  class Humanoid extends NPC {
    constructor(options) {
      super(options);
      ...
    }
  }

  export default Humanoid;
  ```

  - game.js
  ```js
  import NPC from './gameClasses/NPC.js'
  import Humanoid from './gameClasses/Humanoid.js'

  ...do stuff

  run(game):
  ```

***
#### LUNCH
***
# [BROWN BAG](VIDEO_RECORDED_NOT_POSTED) w/Allan Murara: "Square Theory"
***
# [2nd Lecture](VIDEO_RECORDED_NOT_POSTED) w/Speaker: topic
***
# [3rd Lecture](VIDEO_RECORDED_NOT_POSTED) w/Speaker: topic
***
# [4th Lecture](VIDEO_RECORDED_NOT_POSTED) w/Speaker: topic
# Sprint / Q&A
***
# fin
