
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

    // If item does not pass the test, return the elem (let it get pushed onto what filtered return)
    if (!test(elem)) return elem;
  });
};

/*


/* I N D E X _ O F
      SET RESULT TO -1

      FOR EACH ITEM IN ARRAY
        IF ITEM === TARGET & RESULT = -1
          RESULT = INDEX

      RETURN RESULT

/* F I L T E R
      FOR EACH ITEM IN ARRAY
        IF TEST(ELEM) PASSES, PUSH TO RESULTS

      RETURN RESULT

/* R E J E C T
  FILTER THROUGH COLLECTION
  IF ITEM DOES NOT PASS TEST, RETURN ELEM ONTO FILTERED ARR
*/
