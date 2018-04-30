const identity = val => val;

const first = (arr, n) => {
  if (n === undefined) return arr[0];

  return arr.slice(0, n);
}

const last = (arr, n) => {
  if (n === undefined) return arr[arr.length - 1];

  return arr.slice(Math.max((arr.length - n), 0), arr.length);
}
