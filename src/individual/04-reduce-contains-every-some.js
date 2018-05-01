const reduce = (collection, iterator, accumulator) => {

  let accumulatorNotPresent = arguments.length === 2;

  each(collection, val => {
    if (accumulatorNotPresent) {
      accumulator = val;
      accumulatorNotPresent = false;
    } else {
      accumulator = iterator(accumulator, val);
    }
  });

  return accumulator;
}

const contains = (collection, target) => {

  // Use reduce for the collection, iterator consists of wasFound and item
  return reduce(collection, (wasFound, item) => {

    // if item is found return true
    if (wasFound) return true;

    // return if item is the same as target
    return item === target;

    // set accumulator to false
  }, false);
}

const every = (collection, iterator) => {

  // If iterator is not present, set it to identity
  iterator = iterator || identity;

  // Reduce with iterator as true and item
  return reduce(collection, (isTrue, item) => {

    // If isTrue and iterator item return true
    if (isTrue && iterator(item)) return true;

    // Return false if some of them was not
    return false;
  }, true);
}

const some = (collection, iterator) => {

  // If iterator is not present, set it to identity
  iterator = iterator || identity;

  // Use every to iterate through the collection
  return !every(collection, item => {
    if (iterator(item)) return false;

    return true;
  }, false);
};






