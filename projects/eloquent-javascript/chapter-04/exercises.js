////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// create a range function, with parameters of start, stop, and step
// assign the default step parameter to a ternary operator,
// if start is less than end, step is assigned to 1, -1 if its the opposite

function range(start, end, step = start < end ? 1 : -1) {
  
  // create an array to hold the values 
  let array = [];
  
  // if the start and end numbers are the same return an empty array
  
  if (start === end) {
    return array;
  }

// if start is less than end, step would be 1, print all numbers between start and end, incrementing by 1

  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      array.push(i);
    }
    
    // else end is greater than start, create a range going in reverse
  } else {
    for (let i = start; i >= end; i += step) {
      array.push(i);
    }
  }
  
  // return the range
  
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  
  // create a variable to hold the sum of values and assign it to total
  
  let total = 0;
  
  // loop through all elements of array with a for of loop
  for (let value of array) {
    
    // re-asign all values to total, adding them one by one
    total += value;
  }
  
  // return the total
  
  return total;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  
  // create a place to hold the reversed array
  
  let output = [];
  
  // start the loop at the back of the array and stop it including 0, decrement every time
  for (let i = array.length - 1; i >= 0; i--) {
    
    // add the value at every index going backwards to the output array
    
    output.push(array[i]);
  }
  
  // return the reversed array
  
  return output;
}
////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  
  // create a for loop starting at the first index and ending in the middle, increment by 1
  // use math.floor in case the there is an odd number of elements in the array
  
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    
    // assign a variable to all the elements 
    
    let old = array[i];
    
    // re-assign the elements to the last elemement in the array, counting backwards
    
    array[i] = array[array.length - 1 - i];
    
    // re-assign that element to the old variable
    
    array[array.length - 1 - i] = old;
  }
  
  // return the array
  
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  
  // assign list to the null dataType
  
  let list = null;
  
  // loop over the array in reverse
  
  for (let i = array.length - 1; i >= 0; i--) {
    
    // re-assign list to an object, with keys of value: element, and rest: the list
    list = {value: array[i], rest: list};
  }
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  
  // create an empty array to hold the values
  
  let array = [];
  
  // loop over the list
  for (let node = list; node; node = node.rest) {
    
    // add object value to the array
    array.push(node.value);
  }
  return array;
}
////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
  
  // reutrn the object, with the keyword rest
  
  return {value, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {
  
  // if the list doesnt exst, return undefined
  if (!list) {
    return undefined;
  }
  // if n is 0 reurn the value at the value key 
  else if (n == 0) {
    return list.value;
  }
  
  // using recuresion decrease n until you reach the base case
  else {
    return nth(list.rest, n - 1);
  }
}
////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(a, b) {
  
  // if a is equal to b return true
  
  if (a === b) {
    return true;
  }
  
  // if a or b is null, or a or b is not an object, return false
  
  if (a == null || typeof a != "object" || b == null || typeof b != "object") {
    return false;
  }
  
  // if a and b are objects, get all keys from them

  let keysA = Object.keys(a);
  let keysB = Object.keys(b);
  
  // if the amount of keys are not the same, return false

  if (keysA.length != keysB.length) {
    return false;
  }
  
  // loop through the keysA array

  for (let key of keysA) {
    
    // if any keys of keyA are not in the keysB array, or the values of a and b do not striclty equal, return false
    
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }

// otherwise return true

  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
