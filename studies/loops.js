/**
 * LOOPS:
 * 
 * 0. loops are very beneficail when there is a large dataset,
 *    in order to access the values, javaScript has several types of loops.
 * 
 * 1. loops can iterate through any number of datasets, whether forward or backward,
 *    loops can be used as a type of condition, to execute while a condition is true
 * 
 */
 
 // WHILE LOOPS:
 // perform an action while a condition is true
 
 var v = 1
 
 while (v < 10) {  // keyword while followed by the condition
     v += 2        // adds 2 to the value of v as long as it is less than 10
 }
 console.log(v) // prints 11 to the screen
 
 // FOR LOOP:
 // the for loop is used to loop over arrays, has a starting condtion, a stopping condition, and either an incrementor or decrementor
 
 var array = [1, 2, 3, 4];
 
 for (let i = 0; i < array.length; i++) {  // start at 0 index, stop at array.length, increment by 1
     array[i]++                          // add 1 to every element of array
 }
 console.log(array)                     // prints [2, 3, 4, 5] 
 
 // by changing the starting, stopping condition, along with the incrementor to decrementor, we can loop backwards
 
 for (let i = array.length - 1; i >= 0; i--) {  // start at the last index of the array, stop at 0, decrement by 1
     array[i]--
 }
 console.log(array)    // prints [0, 1, 2, 3]
 
 
 // FOR IN LOOPS:
 // when needing to loop through objects, JavaScript uses for in loops
 
 var object = {
     shirt: false,
     shoes: 'none',
     problem: 0
 }
 
 for (var key in object) {     // the string of key is representative of all 'keys' in object
     if (object[key] === 0) {       // check if a key has the value of 0
         console.log('no problem')
     }
 }