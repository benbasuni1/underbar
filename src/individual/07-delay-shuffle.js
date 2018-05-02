const delay = (func, wait) => {

  // If there are arguments accepted after func and wait, set them to args variable
  let args = Array.prototype.slice.call(arguments, 2);

  // Use Set Timeout to give the delay effect
  setTimeout(function() {

    // Return the invoked function w/ this and args as param
    return func.apply(this, args);

    // Pass wait as the variable
  }, wait);
}

const shuffle = arr => {

  // Create a copy of the array
  let newArr = array.slice();

  // Loop throught the cloned array
  for (let i = 0; i < newArr.length; i++) {

    // Set a random number within the array
    let randNum     = Math.floor(Math.random() * (i + 1));

    // Swap newArr[i] with newArr[randNum]
    let temp        = newArr[i];
    newArr[i]       = newArr[randNum];
    newArr[randNum] = temp;
  }

  // Return array clone
  return newArr;
}

/* D E L A Y

    IF THERE ARE ARGUMENTS ACCEPTED AFTER FUNC AND WAIT, SET THEM TO ARGS VAR

    USE SET TIMEOUT TO GIVE DELAY EFFECT

      RETURN FUNC.APPLY FUNCTION W/ THIS AND ARGS AS PARAM

    PASS WAIT AS THE VARIABLE

/* S H U F F L E

    CREATE A COPY OF THE ARRAY
    LOOP THROUGH THE CLONED ARRAY
      SET A RANDOM NUMBER WITHIN THE ARRAY

      SWAP NEWARR WITH NEWARR[RANDNUM]

    RETURN CLONED ARRAY
 */
