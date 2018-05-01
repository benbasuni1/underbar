const re = arr => {
  let x = [];
  return filter(arr, value => {
    let rege = new RegExp( value.toString(),"g");
    if(arr.join("").match(rege).length < 2) return true;
  });
}

const intersection = () => {

  // Set up arr, newArr, and uniqArr as empty arrays
  let arr    = [];
  let newArr = [];
  let uniqArr  = [];

  // Set args as arguments sliced
  let args = Array.from(arguments);

  // Loop through arguments
  for (let i = 0; i < args.length; i++) {

    // Set uniqArr as all unique items from args[i]
    uniqArr = uniq(args[i]);

    // Loop through uniq array
    for (let j = 0; j < uniqArr.length; j++) {

      // Push uniqArr[j] element to array
      arr.push(uniqArr[j]);
    }
  }

  // Loop through the arr array
  for (let k = 0; k < arr.length; k++) {

    // ???
    if (arr.join('').split(arr[j]).length - 1 === args.length)

      // Push current item to new array
      newArr.push(arr[k]);
  }

  // Return the unique version of new Array
  return uniq(newArr);
}

const difference = function(array) {

  // Set empty array to be returned
  let arr = [];

  // Set args
  let args = Array.from(arguments);

  // Set arguments inside of args
  let innerArgs = args[0];

  // Loop through arguments
  for (let i = 0; i < args.length; i++) {

    // Loop through items inside of arguments
    for (let j = 0; j < args[i].length; j++) {

      let current = args[i][j];

      // if (current is NOT inside innerArgs) add to arr
      if (indexOf(innerArgs, current) !== -1)
          arr.push(args[i][j]);
    }
  }

  // Return re arr
  return re(arr);
};

