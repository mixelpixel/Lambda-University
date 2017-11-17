//
//
/* eslint no-console: 0 */

/*
 * 1) w/Antonio Find Corresponding Closing Parenthesis
 */
 // "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."
 // receive string and an index of the string paren and we need to find the closing paren.
 const findParen = (str, index) => {
   let counter = 0;
   for (let i = index; i < str.length; i++) {
     if (str[i] === '(') {
       counter++;
     } else if (str[i] === ')') {
       counter--;
       if (counter === 0) {
         return i;
       }
     }
   }
 }
 console.log(findParen("Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.", 27));


/*
 * 2) w/Patrick Two Stack Queue
 */
 // Two Stack Queue KungFU
 // Stack has pop & push
 // Stack LIFO
 // Queue FIFO enqueue and dequeue

 // Stack1 and Stack2

class Queue {
 constructor () {
   this.stack1 = [];
   this.stack2 = [];
 }

 enqueue (item){
   this.stack1.push(item);
 }

 dequeue (){
   if (this.stack2.length === 0) {
     const len = this.stack1.length;
     for (let i = 0; i < len; i++) {
       this.stack2.push(this.stack1.pop());
     }
   }
   return this.stack2.pop();
 }
}


// TEST SUITE
const x = new Queue();
x.enqueue('a');
x.enqueue('f');
x.enqueue('q');
x.enqueue('m');
x.enqueue('n');
console.log(x);
console.log(x.dequeue());
console.log(x.dequeue());
console.log(x);
console.log(x.enqueue('sean is amazing!'));
console.log(x);
console.log(x.dequeue());
console.log(x.dequeue());
console.log(x.enqueue('Antonio is amazing!'));
console.log(x.enqueue('Lois is amazing!'));
console.log(x.enqueue('Tyge is amazing!'));
console.log(x.enqueue('Manisha is amazing!'));
console.log(x.enqueue('Sarah is amazing!'));
console.log(x.enqueue('Dan is amazing!'));
console.log(x.enqueue('Jake is amazing!'));
console.log(x.enqueue('Evan is amazing!'));
console.log(x.dequeue());
console.log(x.dequeue());
console.log(x);


/*
 * 3) w/Ely Single Stack
 */
 // queue with one stack
 // FIFO
 // PUSH , POP

 class Queue {
   constructor() {
     this.stack = [];
   }

   enqueue (item) {
     this.stack.push(item);
   }

   dequeue() {
    const top = this.stack.pop();
    if (this.stack.length === 0) return top;
    const result = this.dequeue();
    this.stack.push(top);
    return result;
   }
 }
 
