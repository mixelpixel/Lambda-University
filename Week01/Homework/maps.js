// For Loop
const elementsArray = [1, 2, 3];

const maple = (elements, cb) => {
  const newArray = [];
  for (let i = 0; i < elements.length; i++) {
    newArray.push(cb(elements[i]));
  }
  return newArray;
 };

const test = () => {
  const arr = [];
  const result = maple(arr, n => (n * n));
  return Array.isArray(result) === true;
}
console.log(test());

const test2 = () => {
  const arr = elementsArray;
  const mappedArr = maple(arr, n => (n * 2));
	return mappedArr[2] == 6;
};
console.log(test2());


// use pevious "each" function
const mappy = (elements, cb) => {
  const results = [];
  each(elements, (item) => {
    results.push(cb(item));
  });
  return results;
 };

const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const test3 = () => {
  const arr = [];
  const result = mappy(arr, n => (n * n));
  return Array.isArray(result) === true;
}
console.log(test3());

const test4 = () => {
  const arr = elementsArray;
  const mappedArr = mappy(arr, n => (n * 2));
	return mappedArr[2] == 6;
};
console.log(test4());


//using the map() method
const mapMeth = (elements, cb) => {
  return elements.map(cb);
};

const test5 = () => {
  const arr = [];
  const result = mapMeth(arr, n => (n * n));
  return Array.isArray(result) === true;
}
console.log(test5());

const test6 = () => {
  const arr = elementsArray;
  const mappedArr = mapMeth(arr, n => (n * 2));
	return mappedArr[2] == 6;
};
console.log(test6());
