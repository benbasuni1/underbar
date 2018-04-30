const each = (collection, iterator) => {

  // If Array
  if (Array.isArray(collection)) {

    // Loop through arr elements, and perform iteration as val, key, col
    for (let i = 0; i < collection.length; i++)
      iterator(collection[i], i, collection);

  // If Object
  } else {

    // Loop through obj elements, and perform iteration as val, key, col
    for (let i in collection)
      iterator(collection[i], i, collection);
  }
}

const indexOf = (arr, target) => {

  // Set result to -1
  let result = -1;

  // Go through each item in array
  each(arr, (item, index) => {

    // If item === target and result is -1 (reason for result = -1 is so that it takes only the 1st instance)
    if (item === target && result === -1)
      // result becomes index
      result = index;
  });

  return result;
}

const filter = (collection, test) => {
  let result = [];

  // Loop through all items in collection
  each(collection, elem => {

    // If the item passes the test, push it onto results
    if (test(elem)) results.push(elem);
  });

  return results;
}

const reject = (collection, test) => {

  // Return the filtering through the collection
  return filter(collection, elem => {

    // If item does not pass the test, return the elem (let it get pushed ont what is being returned)
    if (!test(elem)) return elem;
  });
};
