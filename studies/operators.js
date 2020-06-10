/**
 * OPERATORS:
 * 
 * 0. operators are a way to affect values, we can compare values, assign values, and interpret values
 * 
 * 1. there are also math operators that we can use to affect our number values
 * 
 * 2. we can also use operators to make logical inferences 
 */
 
 /**
  * ASSIGNMENT OPERATOR:
  * 
  * 0. the assingment operator is used to assign a variable to a value, 
  * 
  * 1. assingments use the equal sign (=), assigns the value of its right opearnd to its left variable
  * 
  * 2. there are also compound assignments.
  */
  
  var x = 1; // assigning the value of 1 to the variable of x
  console.log(x); // prints 1 to the screen because x is assigned to value of 1
  
  x += 1; // syntax: x = x + 1, results in 2
  x -= 1; // syntax: x = x - 1, results back to 1
  x *= 2; // syntax:x = x * 2, results in 2
  x /= 2; // syntax: x = x / 2, results in 1
  
  /**
   * ARITHMETIC OPERATOR:
   * 
   * 0. these are math operators designed to return a single number
   * 
   * 1. there are regular math operands like addition, subtraction, multiplicatiion, and division, exponent
   * 
   * 2. there are also complicated arithmetic operators like incrementor, decrimentor, and remainder
   * 
   */
   
   1 + 1 // results to 2
   1 - 1 // results to 0
   2 * 2 // results to 4
   2 / 2 // results to 1
   2 ** 3 // results in 8 (2 * 2 * 2)
   
  var x = 1;
  
  x++     // incrementor adds 1 to x, results in 2
  x--     // decrementor, subtracts 1 from x, now results in 1
  
  var y = 3;
  
  y % 2; // remainder operator, 3/2 has a remainder of 1
  
  var z = 5;
  var n = -5
  
 
  
  /**
   * UNARY OPERATORS
   * 
   * 0. perform a single action on a value
   * 
   */
   
   // the DELETE operator deletes the value
   
   var obj = {
    key1: 'value1',
    key2: 2,
    key3: false
   };
   
   delete obj.key3;      
   
   console.log(obj) // results in {key1: 'value1', key2: 2}
  
  
  -z;   // unary negation, results in the opposite of the value, 5 -> -5
  
  -n;   // also turns negative values into a positve one, -5 -> 5
  
  // a unary plus (+) converts a datatype into a number
  
  var x = +'3'   // results in 3
  var y = +true  // results in 1
  
  // Not operator is expressed through a exclamation point (!), returns false if can be converted to true, otherwise will be true
  
  var f = true;
  !f            // results in false
  
  // other dataTypes that results to false is: null, NaN, undefined, 0, and an empty string ''
  
  /**
   *   TYPEOF:
   * 
   *  0. this operator is a useful unary operator to determine the datatType of a particluar value
   * 
   *  1. typeof null, array, and object results to a string of 'object'
   * 
   */
  
  var t = 'hello';
  var h = 0;
  var y = true;
  var f = function(){}
  
  typeof(t) // results to 'string'
  typeof(h) // results to a 'number'
  typeof(y) // results to a 'boolean'
  typeof(f) // results in 'function'
  
  
  
  
   /**
    * COMPARRISON OPERATOR:
    * 
    * 0. these operators compare values, and returns a logical value, whether true or false
    * 
    * 1. comparison operators allow us to have a control flow in our code
    * 
    * 2. javaascript attempts to coerse values to a comparative type unless the strict operator is used
    */
    
    // non-strict operators
    
    2 == '2' // equal operator will reuslt to true becuase JS, will convert the datatypes to the same type befor comparing
    
    3 != 4 // not- equal operator, will result to TRUE, becuase the 2 values are NOT equal
    3 != '3' // results in false, because they ARE equal, after JS converts the datatype
    
    // Strict equality
    
    2 === '2' // results in false, because one is a number and the other is a string
    2 !== '2' // resulys in true, because 2 is not equal to the string of 2
    
    // comparison 
    
    2 > 1; // true, 2 is greater than 1
    1 < 2; // true, 1 is less than 2
    
    10 >= 1;  // true, 10 is greater than OR equal to 1
    10 <= 10; // true, 10 is less than OR equal to 10
    
    
    /**
     * LOGICAL OPERATORS:
     * 
     * 0. these are binary operators that act on 2 different values
     * 
     * 1. return a boolean value based on the truthy or falsy of the value
     * 
     */


var x = 1
var y = 2

// EX: AND operator

if (x > 0 && y > 0) {                 // test if both x AND y is greater than 0
    console.log('im positive');        // only if BOTH values evaluate as TRUE, 'im positive' prints to screen
} 

// EX: OR operator 

if (x > 0 || y < 0) {               // test if either x is larger than 0 OR y is less than 0
    console.log('either or');       // if either one is true, 'either or' is printed to the screen
} 


/**
 * TERNARY OPERATOR: 
 * 
 * 0. also referred to as a conditional operator, takes 1 condition and 2 values,
 * 
 */
 
 // syntax: condition ? value1 : value2
 
 var e = 1
 
 e === 1 ? true : 'whats going on here' // if the condition is true, evaluates first value, 
 e > 2 ? 'hold up' : true            // evaluates to true, because condition is false, takes 2nd value