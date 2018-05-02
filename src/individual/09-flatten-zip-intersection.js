const flatten = (nestedArray, result) => {

  // Set up a results array
  result = [];

  // Recursive flatten function
  let flat = arr => {

    // Loop through the current array
    for (let i = 0; i < arr.length; i++) {
      let current = arr[i];

      // If the current is an array, recursively call flat
      if ( Array.isArray(current) ) flat(current);

      // Otherwise, just push onto the results array
      else result.push(current);
    }
  };

  // Call flatten recursive function on nestedArray
  flat(nestedArray);

  // Return results array
  return result;
};

const zip = function() {

  // Set arr and tempArr is empty
  let arr     = [] ;
  let tempArr = [];

  // Set x variable to be arguments
  let x = Array.from(arguments)

  // Loop through arguments
  for (let i = 0; i < x.length; i++) {

    // Loop through the first arguments
   for (let j = 0; j < x[i].length; j++) {

     // Push the value of tempArr
     tempArr.push( x[j][i])

     // if tempArr length === args length
     if(tempArr.length === arguments.length ) {
       // push tempArr to arr
       arr.push(tempArr)

       // empty tempArr
       tempArr = [] ;
     }
   }
}

 return arr;
};


console.log(zip([1,2,3], ['a', 'b', 'c']));

/*

/* F L A T T E N

    SET UP A RESULTS ARRAY

    RECURSIVE FLATTEN FUNCTION

      LOOP THROUGH CURRENT ARRAY

      IF CURRENT IS AN ARRAY FLATTEN CURRENT

      OTHERWISE, PUSH TO RESULTS ARRAY

    CALL FLATTEN RECURSIVE FUNCTION ON PARAM

    RETURN RESULT

/* Z I P

    SET UP ARR AND TEMPARR TO EMPTY ARRAY
    SET X VARIABLE TO BE ARGUMENTS
    LOOP THROUGH ARGUMENTS
      LOOP THROUGH FIRST ARGUMENTS
      PUSH VALUE OF TEMPARR
      IF TEMPARR LENGTH === ARGS LENGTH
        PUSH TEMPARR TO ARR
        EMPTY TEMPARR
    RETURN ARR
*/
