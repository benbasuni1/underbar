const extend = obj => {

  // Loop through the arguments PASS the 1st one
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

  // Loop through the arguments PASS the 1st one
  for (let i = 1; i < arguments.length; i++) {

    // Loop through all the keys inside of the 2..n object keys
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
