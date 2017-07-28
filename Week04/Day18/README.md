# Lambda University - July 27, 2017: Day 018, Thursday
## Coding Challenge #14
- "Queue Stack" available in https://github.com/ryanhca/CS1-Code-Challenges

***
# [1st Lecture](https://youtu.be/rAq7juBu7Nw) w/Ben Nelson: Review Code Challenge #13 constructors
- Object Oriented Design
- the inheritance is like a tree
- ES6 classes are syntactic sugar built upon ES5 Prototypes
- `constructor(options)` vs `constructor(props)` vs `constructor(foofie)` same difference?
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
# [Brown Bag](https://youtu.be/4w0-GP7Yuks) w/Lois Truby: ASL & Deaf Culture
***
# [2nd Lecture](https://youtu.be/P1kvmVfcahE) w/Ryan Hamblin: Sprint / Q&A
- example: https://codesandbox.io/s/3lW7XoVmx
***
# fin
