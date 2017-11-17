// https://youtu.be/DuQmsbfmFrQ
// https://piazza.com/class/j63w1pdyopf7kj?cid=116
/* eslint no-console: 0 */

/*
 * 1) Breadth First Search w/Ely
 * Input BST node and value to search for
 * tree values, lower on the left, higher on the right
 * const tree = {
 *	x: 1,
 *	y: 1,
 *	z: {
 *		x: 1,
 *		y: 1,
 *		z: 1,
 *		},
 *	a: 2,
 * };
 * breadthFirstSearch(tree, 2);
 * will return true before it recursively searches `z`
 */

const tree = {
  x: 1,
  y: 1,
  z: {
    x: 1,
    y: 1,
    z: 1,
  },
  a: 2,
};

const breadthFirstSearch = (tree, searchTerm) => {
  let queue = Object.values(tree);
  while (queue.length > 0) {
    let value = queue.shift();
    if (value === searchTerm) {
      return true;
    }
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      queue = queue.concat(Object.values(value));
    }
  }
};

console.log(Object.values(tree));

console.log(breadthFirstSearch(tree, 2));

/* Sean's magic
const TreeNode = {
  value: 8,
  left: [some other tree node],
  right: [some other tree node],
};

breadthFirstForEach(cb) {
    const queue = new Queue();
    queue.enqueue(this);
    while (!queue.isEmpty()) {
      const node = queue.dequeue();
      if (node.left) {
        queue.enqueue(node.left);
      }
      if (node.right) {
        queue.enqueue(node.right);
      }
      cb(node.value);
    }
  }
*/


/*
2) Vowel Count w/StevieIsMagic
I: a string
O: total number of vowels in string
A E I O U Y a e i o u y
split the string
for each element in split string
if the element is in Array (includes), then counter +1
*/
const vowelCount = (string) => {
  const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      counter++;
    }
  }
  return counter;
};

console.log(vowelCount('Hello, World'));

/*
3) Rotated Array w/Antonio
[0, 1, 2, 3, 4, 5, 6, 7]
[4, 5, 6, 7, 0, 1, 2, 3]
*/
