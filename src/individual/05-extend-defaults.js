const extend = obj => {

  // Loop through the arguments PAST the 1st one
  for (let i = 1; i < arguments.length; i++) {

    // Loop through all the keys inside of the 2..n object keys
    for (let key in arguments[i]) {

      // Set obj[key] to the arguments[i][key] value
      obj[key] = arguments[i][key];
    }
  }

  return obj;
}

const defaults = obj => {

  // Loop through the arguments PAST the 1st one
  for (let i = 1; i < arguments.length; i++) {

    // Loop through all the keys inside of the 1..n object keys
    for (let key in arguments[i]) {

      // If object does not contain the key already
      if (!obj.hasOwnProperty(key)) {

        // Set obj[key] to the arguments[i][key] value
        obj[key] = arguments[i][key];
      }
    }
  }

  return obj;
}


/* E X T E N D
    LOOP THROUGH ARGUMENTS PAST THE 1ST ONE

      LOOP THROUGH ALL THE KEYS INSIDE OF 1...N OBJECT KYS

        SET OBJ[KEY] TO THE EACH ARGUMENTS KEY VAL (ARGUMENTS[i][key])

    RETURN OBJ

/* D E F A U L T S
    LOOP THROUGH ARGUMENTS PAST THE 1ST ONE

      LOOP THROUGH ALL THE KEYS INSIDE OF 1...N OBJECT KYS

        IF OBJ DOES NOT CONTAIN KEY ALREADY

          SET OBJ[KEY] TO THE EACH ARGUMENTS KEY VAL (ARGUMENTS[i][key])

    RETURN OBJ

*/
