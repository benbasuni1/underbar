// Return self
const identity = val => val;

const first = (arr, n) => {

  // If N is undefined return 1st element
  if (n === undefined) return arr[0];

  // Otherwise, return first elem to N
  return arr.slice(0, n);
}

const last = (arr, n) => {

  // If N is undefined return last element
  if (n === undefined) return arr[arr.length - 1];

  // Otherwise, return N to last length of arr (0 if arr.length - n is negative)
  return arr.slice(Math.max((arr.length - n), 0), arr.length);
}
