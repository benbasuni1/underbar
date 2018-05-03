const once = func => {

  let alreadyCalled = false;

  return function() {

    // Access to alreadyCalled variable is the closure here
    if (!alreadyCalled) {

      // call func applied with this, and arguments
      func.apply(this, arguments);
        
      // set alreadyCalled to true
      alreadyCalled = true;
    }
  }
}

const memoize = func => {

  // Set up cache hash map
  let cache = {};

  // Return function with arguments from func
  return function(...args) {

    // key just needs to be something unique that we can call, so set it to args.toString
    let key = args.toString();

    // if key does not exist in cache
    if (!cache.hasOwnProperty(key)) {

      // Set the value of cache[key] to be the function immediately invoked using this and args as parameter
      cache[key] = func.apply(this, args);
    }

    // Otherwise, just return the value of cache[key]
    return cache[key];
  };
}

/* O N C E
    SET ALREADYCALLED FLAG TO FALSE
    SET RESULT TO BE AFUNCTION
      IF ALREADY CALLED IS FALSE
        SET CALLABLE VARIABLE TO CALL FUNC APPLIED WITH THIS AND ARGS
        SET FUNC TO NULL
        SET ALREADY CALLED TO TRUE
      RETURN CALLABLE
   RETURN RESULT

/* M E M O I Z E
    SETUP CACHE HASH MAP
    RETURN FUNCTION WITH ARGUMENTS FROM FUNC
      KEY JUST NEEDS TO BE SOMETHING UNIQUE THAT WE CAN CALL, SO SET TO ARGS.TOSTRING
      IF KEY DOES NOT EXIST IN CACHE
        SET VAL OF CACHE[KEY] TO BE FUNCTION IMMEDIATELY INVOKED USING THIS & ARGS

      OTHERWISE, RETURN VALUE OF CACHE[KEY]

// BIND  - grab a function to be called later within a certain context.
// CALL  - Invoke function immediately using commas to separate arguments, setting a unique THIS as 1st param
// APPLY - Invoke function immediately using array of arguments, setting a unique THIS as 1st param
// ARGUMENTS - These are the arguments that are passed through the parent function


  let log = {};
  return function(a, b) {
    let key = a + '-' + b;
    if (!log.hasOwnProperty(key))
      log[key] = func.call(this, a, b);
  return log[key];
  }
*/
