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

const reduce = (collection, iterator, accumulator) => {

  // ARGUMENTS > 2 MEANS THERE IS ACC
  let accumulatorNotPresent = arguments.length === 2;

  // FOR EACH ITEM IN COLLECTION
  each(collection, val => {

    // IF ACC IS NOT PRESENT
    if (accumulatorNotPresent) {

      // SET ACC TO VAL
      accumulator = val;

      // ACC IS NOW SET
      accumulatorNotPresent = false;
    } else {
      // ADD ACC TO ITERATOR(ACC, VAL)
      accumulator = iterator(accumulator, val);
    }
  });

  return accumulator;
}

/* U N I Q
      LOOP THROUGH ARRAY
        IF ELEM IS NOT FOUND, PUSH ELEM TO RESULTS

      RETURN RESULT

/* M A P
      LOOP THROUGH COLLECTION
        PUSH ONLY ITEMS THAT PASS THROUGH ITERATOR

      RETURN RESULT

/* P L U C K
      RETURN MAPPED ITEMS BASED ON ITEM[KEY]
*/

/* R E D U C E
      FOR EACH ITEM IN COLLECTION
        IF ACC IS NOT PRESENT
          SET ACC TO VAL
          ACC IS NOW SET
        ELSE ADD ACC TO ITERATOR(ACC, VAL)
*/


