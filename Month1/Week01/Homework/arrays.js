// For Loop
const elementsArray = [1, 2, 3];

const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const test = () => {
  let count = 0;
  each(elementsArray, (element) => {
    count += element;
  });
  return count === 6;
};

console.log(test());

const test2 = () => {
  let count = 0;
  each(elementsArray, (element, index) => {
    count += element + index;
  });
  return count === 9;
};

console.log(test2());


// UnderscoreJS Method
const peach = (elements, cb) => {
  _.each(elements, (value, index) => {
    cb(value, index);
  });
};

const test3 = () => {
  let count = 0;
  peach(elementsArray, (element) => {
    count += element;
  });
  return count === 6;
};

console.log(test3());

const test4 = () => {
  let count = 0;
  peach(elementsArray, (element, index) => {
    count += element + index;
  });
  return count === 9;
};

console.log(test4());


// forEach
const freach = (elements, cb) => {
  elements.forEach((value, index) => {
    cb(value, index);
  });
};

const test5 = () => {
  let count = 0;
  freach(elementsArray, (element) => {
    count += element;
  });
  return count === 6;
};

console.log(test5());

const test6 = () => {
  let count = 0;
  freach(elementsArray, (element, index) => {
    count += element + index;
  });
  return count === 9;
};

console.log(test6());
