// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  
  // reduce the array by concatting the the current element to the accumulator
  
  return array.reduce((acc, curr) => acc.concat(curr), []);

}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(start, test, update, body) {
  
  // starting condition at the starting parameter
  // stop at the test function of the indexed values
  // re-asign value to the update function passing in the value
  
  for (let value = start; test(value); value = update(value)) {
    
    // update the the body through every iteration of value
    body(value);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, predicate) {
  
  // loop over the array
  
  for (let element of array) {
    
    // if the result of passing all elements through predicate function does not exist, return false
    if (!predicate(element)) {
      return false;
    }
  }
  // otherwise return true
  return true;
}



// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
  
  // assign the counted variable to a function with parameters of text and char
  
  let counted = countBy(text, char => {
    
    // assign variable script to the codePoint of the character at the 1st index
    
    let script = characterScript(char.codePointAt(0));
    
    // if script exists return the directional object, return string 'none' if it doenst 
    
    return script ? script.direction : "none";
    
    // chain on filter, return names not assigned to 'none'
    
  }).filter(({name}) => name != "none");
  
  // if the there are no elements in counted, return the string 'ltr'

  if (counted.length === 0) {
    return "ltr";
}

// return the name, using reduce, to find wich count is larger
  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}
// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
