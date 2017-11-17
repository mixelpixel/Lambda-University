// https://youtu.be/Ras1WlZFMnI
// https://piazza.com/class/j63w1pdyopf7kj?cid=112
/* eslint no-console: 0 */

/*
1) Deep Equality w/Evan Allen
cc45 deepEquality
*/
function deepEquals(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

/*
2) Sum and Product w/Julian Pegues
cc44 sumAndProduct
*/
function sumAndProduct(sum, product) {
  for (let i = 0; i <= sum / 2; i++) {
    if (i * (sum - i) === product) return [i, (sum - i)];
  }
  return null;
}


/*
3) Reverse Linked List w/Jesh Yoon
cc41 reverseLinkedList
*/
function reverseList(node) {
  if (node.next === null) return node;
  let current = node;
  let previous = null;
  while (current) {
    let floating = current.next;
    current.next = previous;
    previous = current;
    current = floating;
  }
  return previous;
}
