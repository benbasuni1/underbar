_.throttle = function(func, wait) {
  // Set throttled and scheduled to false
  let throttled = false;
  let scheduled = false;
  let result;

  return function() {

    // If throttle is false
    if (!throttled) {

      // Result becomes the function stored here
      result = func.call(this);

      // Set throttled to true
      throttled = true;

      // Set timeout to prevent from function happening right away
      setTimeout(function(){

        // If scheduled
        if (scheduled) {

          // Throttle becomes true
          throttled = true;

          // Set Timouet for delay
          setTimeout(function() {

            // Set throttle to false
            throttled = false;

            // With wait as 2nd param for setTimeout
          }, wait);

          // result becomes the function stored here
          result = func.call(this);

          // Set schedule to false
          scheduled = false;

          // Return the result
          return result;
        } else throttled = false;
      }, wait);

      return result;
    }

    if (throttled) {
      if (!scheduled) {
        scheduled = true;
      }
      return result;
    }

  };
};

}());
