const factorial = (n) => {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

// n! = n * (n - 1) * (n - 2) * ... * 1
//
// for example:
//  1! = 1
//  2! = 2 * 1 = 2
//  3! = 3 * 2 * 1 = 6
//
// 1) to find the factorial of n, find the factorial of
// (n - 1) and then multiply by n
//
// 2) make sure we handle the base case, which is 1
//
//
// [1, [[2]]]
//
// 1) to flatten an array, first flatten each nested array and then concatenate all the elements
//
// 2) the base case is when the array is already flat
//