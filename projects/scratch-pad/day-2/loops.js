// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  // create a for loop, loop forward, start at 0, end at array.length, increment by 1
  
  for (let i = 0; i < array.length; i++) {
    // print every iteration of i
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  // for loop, starting condition is last index of array, stopping condition is 0 index, decremint by 1
  
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  // store keys in array
  
  var myArray = [];
  
  // for in loop over object
  
  for (let key in object) {
    
    // add keys to myArray
    myArray.push(key);
  }
  
  // return the array of keys
  return myArray;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  // for in loop over an object, print the keys
  
  for (let key in object) {
    console.log(key);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  // create an array to hold values
  
  var myArray = [];
  
  // for in loop over object 
  
  for (let key in object) {
    
    // push the values of object using bracket notation into myArray
    myArray.push(object[key]);
  }
  
  // return array of values
  return myArray;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  // use for in loop over an object
  for (let key in object) {
    
    // print to the screen the values of object using bracket notation
    console.log(object[key]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  // create an array to hold the values
  
  var myArray = [];
  
  // loop over object 
  
  for (let key in object) {
    
    // push the key into myArray
    myArray.push(key);
  }
  
  // return the length of myArray, giving the number of values
  return myArray.length;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  // create an array to hold the values
  
  var myArray = [];
  
  // loop over object
  
  for (let key in object) {
    
    // push values of object to myArray
    myArray.push(object[key]);
  }
  
  // loop over myArray in reverse
  
  for (let i = myArray.length - 1; i >= 0; i--) {
    
    // print to the screen the values of the object at every iteration of i, after looping in reverse
    console.log(myArray[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
