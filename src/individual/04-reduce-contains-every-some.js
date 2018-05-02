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

/*

/* C O N T A I N S
      USE REDUCE FOR THE COLLECTION, ITERATOR CONSISTS OF
      WASFOUND & ITEM,

        IF ITEM WAS FOUND, RETURN TRUE

        RETURN ITEM === TARGET

     SET ACCUMULATOR TO FALSE (3rd REDUCE ARG)

/* E V E R Y
      IF ITERATOR IS NOT PRESENT, SET TO IDENTITY

      REDUCE WITH ITERATOR AS TRUE AND ITEM
        IF ISTRUE AND ITERATOR ITEM RETURN TRUE
        OTHERWISE, RETURN FALSE

      SET ACC TO TRUE (3rd ARG OF REDUCE)

/* S O M E
      IF ITERATOR IS NOT PRESENT, SET TO IDENTITY
      USE ! EVERY TO ITERATE THROUGH COLLECTION
        IF ITERATOR(ITEM) RETURN FALSE

        OTHERWISE, RETURN TRUE

      3RD ARG IS FALSE
*/
