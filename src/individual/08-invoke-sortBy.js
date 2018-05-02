// BIND  - grab a function to be called later within a certain context.
// CALL  - Invoke function immediately using commas to separate arguments, setting a unique THIS as 1st param
// APPLY - Invoke function immediately using array of arguments, setting a unique THIS as 1st param
// ARGUMENTS - These are the arguments that are passed through the parent function

const invoke = (collection, method, args) => {

  // Return a map of all the items
  return map(collection, item => {

    // Set variable func, if string let it be item[method], otherwise just method
    let func = typeof method === 'string' ? item[method] : method;

    // Return func applied to item and args
    return func.apply(item, args);
  });

}

_.sortBy = function(collection, iterator) {

  // Implement basic swap function
  let swap = (array, i1, i2) => {
    let temp = array[i1];
    array[i1] = array[i2];
    array[i2] = temp;
    return array;
  };

  // Implement bubble Sort with iterator
  let bubbleSort = (collection, iterator) => {

    // set swapped to true
    let swapped = true;

    // while swapped is false
    do {
      swapped = true;

      // Loop through array
      for (let i = 1; i < collection.length; i++) {

        // if this pair is out of order
        if (iterator(collection[i - 1]) > iterator(collection[i]) ||
        (iterator(collection[i - 1]) === undefined && iterator(collection[i]) !== undefined)) {
          collection = swap(collection, (i - 1), i);
          swapped    = false;
        }
      }
    } while (!swapped);

    return collection;
  };

  // If iterator is string, return bubbleSort with obj as obj[iterator]
  if (typeof iterator === 'string') {
    return bubbleSort(collection, obj => obj[iterator]);

  // Otherwise, return bubbleSort with just iterator
  } else {
    return bubbleSort(collection, iterator);
  }
};

/* I N V O K E

   RETURN A MAP OF ALL THE ITEMS
    SET VARIABLE FUNC IF STRING (ITEM[METHOD]) OTHERWISE METHOD

    RETURN FUNC APPLIED TO ITEM AND ARGS


/* S O R T _ B Y
    IMPLEMENT BASIC SWAP FUNCTION

    IMPLEMENT BUBBLE SORT WITH ITERATOR

      SET SWAPPED TO TRUE

      WHILE SWAPPED IS FALSE
          LOOP THROUGH ARRAY
          IF THIS PAIR IS OUT OF ORDER
            SET SWAPPED TO FALSE
            SWAP COLLECTION

    RETURN COLLECTION
 */

