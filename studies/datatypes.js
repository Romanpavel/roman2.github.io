/**
 * DATATYPES:
 * 
 * 0. Javascript uses several different 'datatypes' to store values in the code
 * 
 * 1. there are 2 basic classifications of datatypes: primitive and complex, 
 *     primitive datatypes are Numbers, Strings, Booleans, null, and undefined
 *     complex datatypes are objects and arrays (functions are complex, but technically they're objects)
 * 
 * 2. Arrays and Objects are expressed through [] and {} respectively,
 *    arrays are accessed through indexes, and objects by key/value pairs
 * 
 */
 
 /*
 * Numbers: these are arithmetic values expressed through a digit, they can range from -Infinity to Infinity
 */
 
 /* 
 * Infinity and -Infinity:
 *positive and negative infinity are represented by the value -(2^53 - 1) & (2^53 - 1) or
 * 1.797693134862315E+308 for infinty and -1.797693134862315E+308 for negative infinity
 */
 
 Number.POSITIVE_INFINITY; // coding Infinity
 Number.NEGATIVE_INFINITY; // coding -Infinity
 
 Number.MAX_VALUE; // checks the largest available value up to Infinity
 Number.MIN_VALUE; // checks the smallest available value down to but not including 0
 
 // numbers can be asigned to variables to be used later
  
 var myNumber = 11; // the value of 11 acts just as any other number.
 
 // Math:
var math = myNumber + 1 // results to 12
var math = myNumber - 1 // results to 10
var math = myNumber * 2 // results to 22
var math = myNumber / 2 // results to 5.5
var math = myNumber ^ 2 // results to 121

/*
*  NaN:
* 
* NaN stands for Not a Number, it is a property in the global object
* NaN is shown when a number can NOT be parsed, or when a math operation can NOT be performed
*/

var crazyMath = 7 * 'Hello' 
console.log(crazyMath) // results in NaN

/**
 * STRINGS:
 * 
 * 0. strings are words or characters enclosed within quotes; either single '', or double ""
 * 
 * 1. strings serve as important datatypes when needing to label, or call something, it is a great way for us,
 *    to communicate using code.
 * 
 */

var myString = "what's up doc?"

// if you have a long string, you can use the + sign to make it look neat

var longString = "today was a good day, but not like any other day " +
                 "it was a day that most people would consider a great day " +
                 "but I only consider it a good day, because today is rained lightly."

// you can also use the backslash to achieve the same results

var anotherLongString = "when I look back at today, I will indeed be happy \
                         because it was a wonderful day, and i got to do so much \
                         but most importantly i was able to take a nap."


/**
 * BOOLEAN:
 * 
 * 0. a boolean is a dichotomy, it results in either true or false
 * 
 * 1. booleans are often a result of conditional statements like if, or loops
 * 
 */
 
 var myBoolean = false; // false is a boolean value 
 var MyBool = true; // true is a boolean value
 
 function test (boolean) {
     if (boolean === 11) {
         console.log('winner, winner, Popeyes dinner')
     }
 }
 test(11) // prints "winner winner, Popeyes dinner", because the if statement is true, therfore executes the code
 
 
 /**
  * ARRAYS:
  * 
  * 0. Arrays are complex datatypes, they are a collection represented by brackets []
  * 
  * 1. Arrays are indexed by number starting at index 0, we can access values in arrays by the index they are
  * 
  * 2. Arrays can hold other dataTypes in them, like numbers, booleans, strings, Objects, and other Arrays
  * 
  * 3. Arrays are copied by reference meaning they can take there values from other dataTypes and not be restricted,
  *    to only 8 bits
  * 
  */
 
var myArray = [] // this is an array literal 

myArray[0] = 'hello' // we can add to an array by assigning a value to a particular index
myArray.push(2) // the push method adds values to the back of an array
myArray.unshift(true) // the unshift method adds values to the front of an array
console.log(myArray) // prnts true, hello, 2

// we can also use methods to remove values from an array

myArray.pop() // takes off the last value of an array
myArray.shift() // takes off the first value of an array

// we can determine the length of the array with the .length method

myArray.length // since we shifted and popped, the length of the array is 1 (value)

// we can loop through Arrays with a for loop

var newArray = [1, 2, 3, 4];

for (let i = 0; i < newArray.length; i++) {
   console.log(i)                            // prints the indexes 0, 1, 2, 3
}


/**
 * OBJECTS:
 * 
 * 0. Objects are complex datatypes in javascript, meaning they are copied by reference, and not by value
 * 
 * 1. objects are organized by key/value pairs and are represented by {}
 * 
 * 2. you can access object through dot (.) or bracket ([]) notation,
 *    when using bracket notation the 'key' must be in quotes when referencing the key by name,
 *    however quotes are not needed if you are referencing a placeholder 
 * 
 */ 
 
 var myObject = {} // this is an object literal 
 
 myObject.key1 = 'value 1'  // add to object through dot notation, objects can NOT have keys without values
 myObject['key2'] = 2       // add to object through bracket notation, objects can NOT have values without keys
 
 console.log(myObject) // prints {key1: value1, Key2: 2}
 
 // the way to loop through an object is with a for... in loop
 
 var newObject = {
     car: true,       // all keys are strings (car, mileage, name)
     mileage: 100,
     name: 'betsy'   // we can access values by the key names
 }
 for (var key in newObject) {
     if (newObject[key] === 'betsy') { // test if value of 'betsy' exists in the object keys
         console.log("holy cow") // prints 'holy cow' to the screen
     }
 }
 
 /**
  * FUNCTIONS:
  * 
  * 0. functions are first class objects, they are hoisted to the top of there scope, and perform actions 
  * 
  * 1. functions are called with the 'function' keyword or an arrow function =>
  * 
  * 2. functions can be named or annoymous, but alwasy have parameters or placeholders 
  * 
  * 3. we call functions by their names, and pass in arguments or actual values into them to perfom an action
  * 
  */
  
  function func (parameter) {
      // function body
      return // return statement (optional)
  }
  
  var func = (parameter) => console.log(parameter) // arrow function,
  
  func('hello') // invoke a function by passing in a value to the parameter 
  
  
  
 /**
  * UNDFINED:
  * 
  * 0. undefined is a dataType that is the absence of a value
  *  
 */ 

   var x;
   console.log(x) // prints undefined, as x has been declared but not initialized
   
   var arr = [1, 2];
   console.log(arr[2]) // prints undefined, because there is no value at the 2nd index
   
 /**
  * NULL: 
  * 
  * 0. null is the explicit absence of a value
  * 
  * 1. this datatype is usually used as a palceholder to signify that a value should be there
  * 
  * 2. it can be used in objects since keys can not exist without values
  */

var nullObject = {
 key1: null,     
 key2: 'something'
}
console.log(nullObject.key1) // prints null to the screen


/**
 * Primitive vs Complex dataTypes:
 * 
 * 0. a primitive dataType holds a place in the computer memory, they are immutable, copied by value,
 *    and make up a max of 8 bytes 
 * 
 * 1. Complex dataTypes are mutable, and copied by reference, complex dataTypes can hold other dataTypes
 * 
 * 
 */
 
 // copy by value
 
 var number = 11;    // primitive dataType of a number
 var string = 'hey'; // primitve dataType of a string
 var boolean = true; // primitve dataType of a boolean value
 
var newNumber = number // create a copy
number = 5             // re-asign number to 5
console.log(number)    // returns 5
console.log(newNumber) // still 11 becuase it is stored in memory 
 
// copy by reference  
 var array = [['what', 'is'], 'going', 'on', {a: 'z', b: 2}] // complex dataType of an array
 var object = {
  array: [1, 2, 3],
  key: 'I am a Value'                                       // complex dataType of an Object
 }
 
 var myArr = array.push(3);
 
 console.log(array) //prints [what is] going on {a:z, b:2} 3
 
 // copying by referenve changes the original dataType
 
 