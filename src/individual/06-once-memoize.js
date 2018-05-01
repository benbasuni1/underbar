// BIND  - grab a function to be called later within a certain context.
// CALL  - Invoke function immediately using commas to separate arguments, setting a unique THIS as 1st param
// APPLY - Invoke function immediately using array of arguments, setting a unique THIS as 1st param
// ARGUMENTS - These are the arguments that are passed through the parent function

const once = func => {

  // Set alreadyCalled flag to false
  let alreadyCalled = false;
  let callable;

  // set result to be a function
  let result = function() {

    // if alreadyCalled is false
    if (!alreadyCalled) {

      // set callable variable to call func applied with this, and arguments
      callable = func.apply(this, arguments);

      //callable = func.call(this, ...arguments);
      func = null;

      alreadyCalled = true;
    }

    return callable;
  }

  return result();
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

