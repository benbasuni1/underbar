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


console.log(zip([1,2,3], ['a', 'b', 'c']));
