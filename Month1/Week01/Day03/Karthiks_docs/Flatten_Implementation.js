const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  let result = [];
  each(elements, (elem) => {
    if (Array.isArray(elem)) {
      const nestedArray = flatten(elem);
      result = result.concat(nestedArray);
    } else {
      result.push(elem);
    }
  });
  return result;
};