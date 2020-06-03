/**
 * HOISTING:
 * 
 * 0. in javaScript hoisting is a term used to organize variables based upon importance in the computer
 * 
 * 1. hoisting refers to bringing a declaration to the top of its scope
 * 
 * 2. function delcarations are hoisted and variable declared with the keywor var
 * 
 * 3. variables declared with the keyword let or const are NOT hoisted
 * 
 */
 
 // variable Hoisting
 
 console.log(a) // prints 'undefined' because var a is hoisted but not initialized
 
 var a = 0 // variables declared with the var keyword is hoisted, but the value is NOT
 
 console.log(a) // prints 0
 
 var a;   // becomes hoisted
 a = 0;   // initializes after, the code is reached
 
 // variables declared with let and const are NOT hoisted 
 
  console.log(i) // gives you a reference error because varaibles declared with let are NOT hoisted
 
 let i = 1;
 
 console.log(b); // also throws a reference error
 
 const b = 10;
