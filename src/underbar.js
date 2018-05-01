(function() {
  'use strict';

  window._ = {};

  /* IDENTITY: Return Same Value */
  _.identity = val => val;

  /* FIRST: Return First Element */
  _.first = (array, n) => {
    if (n === undefined) return array[0];

    return array.slice(0, n);
  };

  /* LAST: Return Last Element */
  _.last = function(array, n) {
    if (n === undefined) return array[array.length - 1];

    return array.slice(Math.max((array.length - n), 0), array.length);
  };

  /* EACH : Call iterator(value, key, collection) for each element of collection.*/
  _.each = function(collection, iterator) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++)
        iterator(collection[i], i, collection);
    } else {
      for (let i in collection)
        iterator(collection[i], i, collection);
    }
  };

  // Returns index of array
  _.indexOf = function(array, target) {
    let result = -1;

    _.each(array, (item, index) => {
      if (item === target && result === -1)
        result = index;
    });

    return result;
  };

  // Filter through array (TRUE)
  _.filter = function(collection, test) {
    let results = [];

    _.each(collection, function(element) {
      if (test(element)) results.push(element);
    });

    return results;
  };

  // Filter through array (FALSE)
  _.reject = function(collection, test) {
    return _.filter(collection, element => {
      if (!test(element)) return element;
    });
  };

  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    let arr = [];
    _.each(array , elem =>{
      if(_.indexOf(arr,elem) === -1) arr.push(elem);
    })

    return arr ;
  };

  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {

    let results = [];

    _.each(collection, element => {
      results.push(iterator(element));
    });

    return results;
  };

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages
  _.pluck = function(collection, key) {
    return _.map(collection, item => item[key]);
  };

  // Reduces an array or object to a single value by repetitively calling
  // iterator(accumulator, item) for each item. accumulator should be
  // the return value of the previous iterator call.
  //
  // You can pass in a starting value for the accumulator as the third argument
  // to reduce. If no starting value is passed, the first element is used as
  // the accumulator, and is never passed to the iterator. In other words, in
  // the case where a starting value is not passed, the iterator is not invoked
  // until the second element, with the first element as its second argument.
  //
  // Example:
  //   let numbers = [1,2,3];
  //   let sum = _.reduce(numbers, function(total, number){
  //     return total + number;
  //   }, 0); // should be 6
  //
  //   let identity = _.reduce([5], function(total, number){
  //     return total + number * number;
  //   }); // should be 5, regardless of the iterator function passed in
  //          No accumulator is given so the first element is used.
  _.reduce = function(collection, iterator, accumulator) {

    let accumulatorNotPresent = arguments.length === 2;

    _.each(collection, function(val) {
      if (accumulatorNotPresent) {
        accumulator = val;
        accumulatorNotPresent = false;
      } else {
        accumulator = iterator(accumulator, val);
      }
    });

    return accumulator;
  };

  // Determine if the array or object contains a given value (using `===`).
  _.contains = function(collection, target) {
    // TIP: Many iteration problems can be most easily expressed in
    // terms of reduce(). Here's a freebie to demonstrate!
    return _.reduce(collection, function(wasFound, item) {
      if (wasFound) {
        return true;
      }
      return item === target;
    }, false);
  };


  // Determine whether all of the elements match a truth test.
  _.every = function(collection, iterator) {
    // TIP: Try re-using reduce() here.
    iterator = iterator || _.identity;

    return _.reduce(collection, function(isTrue, item) {
      if (isTrue && iterator(item)) {
        return true;
      }

      return false;
    }, true);
  };

  // Determine whether any of the elements pass a truth test. If no iterator is
  // provided, provide a default one
  _.some = function(collection, iterator) {
    // TIP: There's a very clever way to re-use every() here.
    iterator = iterator || _.identity;
    return !_.every(collection, function(item) {
      if (iterator(item)) {
        return false;
      }

      return true;
    }, false);
  };


  /**
   * OBJECTS
   * =======
   *
   * In this section, we'll look at a couple of helpers for merging objects.
   */

  // Extend a given object with all the properties of the passed in
  // object(s).
  //
  // Example:
  //   let obj1 = {key1: "something"};
  //   _.extend(obj1, {
  //     key2: "something new",
  //     key3: "something else new"
  //   }, {
  //     bla: "even more stuff"
  //   }); // obj1 now contains key1, key2, key3 and bla
  _.extend = function(obj) {
    for (let i = 1; i < arguments.length; i++) {
      for (let key in arguments[i]) {
        obj[key] = arguments[i][key];
      }
    }
    return obj;
  };

  // Like extend, but doesn't ever overwrite a key that already
  // exists in obj
  _.defaults = function(obj) {
    for (let i = 1; i < arguments.length; i++) {
      for (let key in arguments[i]) {
        if (!obj.hasOwnProperty(key)) {
          obj[key] = arguments[i][key];
        }
      }
    }
    return obj;
  };


  /**
   * FUNCTIONS
   * =========
   *
   * Now we're getting into function decorators, which take in any function
   * and return out a new version of the function that works somewhat differently
   */

  // Return a function that can be called at most one time. Subsequent calls
  // should return the previously returned value.
  _.once = function(func) {
    // TIP: These letiables are stored in a "closure scope" (worth researching),
    // so that they'll remain available to the newly-generated function every
    // time it's called.
    let alreadyCalled = false;
    let callable;

    let result = function() {

      if (!alreadyCalled) {
        callable = func.call(this, ...arguments);
        func = null;
        alreadyCalled = true;
      }

      return callable;
    }

    return result;

  };

  // Memorize an expensive function's results by storing them. You may assume
  // that the function only takes primitives as arguments.
  // memoize could be renamed to oncePerUniqueArgumentList; memoize does the
  // same thing as once, but based on many sets of unique arguments.
  //
  // _.memoize should return a function that, when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.
  _.memoize = function(func) {

    let log = {};
    return function(a, b) {
      let key = a + '-' + b;
      if (!log.hasOwnProperty(key)) {
        log[key] = func.call(this, a, b);
      }

      return log[key];
    }

    //return function(...args) {
      //let key = args.toString();
      //if (!log.hasOwnProperty(key)) {
        //log[key] = func.call(this, ...args);
      //}
      //return log[key];
    //};
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  //
  // The arguments for the original function are passed after the wait
  // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
  // call someFunction('a', 'b') after 500ms
  _.delay = function(func, wait) {
    let args = Array.prototype.slice.call(arguments, 2);
    setTimeout(function() {
      return func.apply(this, args);
    }, wait);
  };

  /**
   * ADVANCED COLLECTION OPERATIONS
   * ==============================
   */

  // Randomizes the order of an array's contents.
  //
  // TIP: This function's test suite will ask that you not modify the original
  // input array. For a tip on how to make a copy of an array, see:
  // http://mdn.io/Array.prototype.slice
  _.shuffle = function(array) {
     let newArr = array.slice();
       for (let i = 0; i < array.length; i++) {
         let j = Math.floor(Math.random() * (i + 1));
         let temp = newArr[i];
         newArr[i] = newArr[j];
         newArr[j] = temp;
       }
     return newArr;
  };

  /**
   * ADVANCED
   * =================
   *
   * Note: This is the end of the pre-course curriculum. Feel free to continue,
   * but nothing beyond here is required.
   */

  // Calls the method named by functionOrKey on each value in the list.
  // Note: You will need to learn a bit about .apply to complete this.
  _.invoke = function(collection, functionOrKey, args) {
    return _.map(collection, item => {
      let method = typeof functionOrKey === 'string' ? item[functionOrKey] : functionOrKey;
      return method.apply(item, args);
    });
  };


  // Sort the object's values by a criterion produced by an iterator.
  // If iterator is a string, sort objects by that property with the name
  // of that string. For example, _.sortBy(people, 'name') should sort
  // an array of people by their name.
  _.sortBy = function(collection, iterator) {
    let swap = function (array, i1, i2) {
      let temp = array[i1];
      array[i1] = array[i2];
      array[i2] = temp;
      return array;
    };
    let bubbleSort = function (collection, iterator) {
      let n = collection.length;
      let swapped = true;
      while (swapped !== false) {
        swapped = false;
        for (let i = 1; i < n; i += 1) {
          // if this pair is out of order
          if (iterator(collection[i - 1]) > iterator(collection[i]) || (iterator(collection[i - 1]) === undefined && iterator(collection[i]) !== undefined)) {
            collection = swap(collection, (i - 1), i);
            swapped = true;
          }
        }
      }
      return collection;
    };
    if (typeof iterator === 'string') {
      return bubbleSort(collection, function (obj) {
        return obj[iterator];
      });
    } else {
      return bubbleSort(collection, iterator);
    }
  };

  // Zip together two or more arrays with elements of the same index
  // going together.
  //
  // Example:
  // _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
  _.zip = function() {
    let arr      = [] ;
    let smallarr = [];

    let x = Array.from(arguments)

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < x.length; j++) {
      smallarr.push( x[j][i])
        if(smallarr.length === arguments.length ){
          arr.push(smallarr)
          smallarr = [] ;
        }
      }
    }

    return arr;
  };

  // Takes a multidimensional array and converts it to a one-dimensional array.
  // The new array should contain all elements of the multidimensional array.
  //
  // Hint: Use Array.isArray to check if something is an array
  _.flatten = function(nestedArray, result) {
    result = [];
    let flat = function(currentValue) {
      for (let i = 0; i < currentValue.length; i++) {
        if ( Array.isArray(currentValue[i]) ) { flat(currentValue[i]); }
        else { result.push(currentValue[i]); }
      }
    };

    flat(nestedArray);
    return result;
  };

  // Takes an arbitrary number of arrays and produces an array that contains
  // every item shared between all the passed-in arrays.
  _.intersection = function() {
    let arr    = [];
    let newArr = []
    let x      = Array.from(arguments)
    let unArr  = [] ;
    for (let i = 0; i < x.length; i++) {
      unArr= _.uniq(x[i])
      for (let j = 0; j < unArr.length; j++) {
        arr.push(unArr[j])
      }
    }

    for (let k = 0; k < arr.length; k++) {
      if(arr.join("").split(arr[k]).length-1 === x.length){
        newArr.push(arr[k])
      }
    }

    return _.uniq(newArr) ;
  };

  function re(arr){
    let x=[];
    return _.filter(arr, function(value){
      let rege= new RegExp( value.toString(),"g");
      if(arr.join("").match(rege).length <2){ return true;}
    });
  }

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    let arr  = [];
    let args = Array.from(arguments);
    let innerArgs = args[0];
    for (let i=0;i<args.length;i++){
      for (let j = 0; j < args[i].length; j++) {
        let current = args[i][j];
        if(_.indexOf(innerArgs, current) !== -1) {
          arr.push(args[i][j])
        }
      }
    }
    return re(arr);
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.  See the Underbar readme for extra details
  // on this function.
  //
  // Note: This is difficult! It may take a while to implement.
 _.throttle = function(func, wait) {
    let throttled = false;
    let scheduled = false;
    let result;

    return function() {

      if (!throttled) {
        result = func.call(this);
        throttled = true;

        setTimeout(function(){
          if (scheduled) {
            throttled = true;
            setTimeout(function() {
              throttled = false;
            }, wait);
            result = func.call(this);
            scheduled = false;
            return result;
          } else {
            throttled = false;
          }
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
