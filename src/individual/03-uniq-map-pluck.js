const uniq = arr => {

  let result = [];

  // Loop through array
  each(arr, elem => {

    // If item is NOT found, push the elem to results
    if (indexOf(arr, elem) === -1) result.push(elem);
  });

  return result;
}

const map = (collection, iterator) => {
  let results = [];

  // Loop through collection
  each(collection, elem => {

    // Push only the items that pass through iterator
    results.push(iterator(elem));
  });

  return results;
};

const pluck = (collection, key) => {

  // return mapped items based only on key
  return map(collection, item[key]);
});
