/**
 * SCOPES:
 * 
 * 0. scoping is the essential accessibilty of values in JavaScript, there are 3 main types of SCOPE,
 *    depending on the scope of the varaible influences how you can access it and the value to produce
 * 
 * 1. Global Scope, is a value, that can be accessed anywhere in the code, function  and variable delcarations are globally accessed
 * 
 * 2. Local Scope/Functional Scope, is where the value is only available within a function
 * 
 * 3. Block Scope, values that are accessible in the BLOCK they are created like conditional statements, and loops
 * 
 * 4. Parent vs Child scope, values declared inside are child scoped, and variables on the outside are parent scoped,
 *    child variables have access to parent values, but parent values DO NOT have access to child values
 * 
 * 5. Variables declared with let are block scoped, const is locally or globally scoped
 */
 
 // Global Scope:
 
 var a; // variables delcared with the var keyword are Globally scoped
 function b (num) {
     return a = num
 }; // functions are declarations are Globally Scoped
 
 a = 15; //iniitializatin of variable a, since a is globally scoped, we can assign and re-asign the value
 b(5); // the function b is acccessible in the global scope and can change the value of a to 5
 
 
 // Local Scope:
 
 function x (y) {
     var g = 0;
     return y + g;
 }
 x(3) // return 3 to the screen
 // console.log(g) => throws an error because g is local/functional scope, so we do not have access to the variable g outside the function
 
 // Block Scope:
 
 function help (string) {
     for (let i = 0; i < string.length; i++) {   // i is only available in the block it is created
     // console.log(i) => since we are in the block scope, we have access to i 
         if (string[i] === a) {                  // string[i] is child scoped, so it has access to the index i in the above for loop
             console.log('found an A!');
         } else {
             console.log('no A here');
         }
     }
 }
 help("supercalifredilisticexpliodocious") // prints 'found an A!'
 // console.log(i) // would through an error becaue i can not be accessed
 
 
 var name = 'roman'
 
 function getName (name) {
     return `${'you are'} ${name}`;  // inside the function, the name PARAMETER is used over the global variable
 }
 getName('george');               // prints 'you are george' to the screen
 
 console.log(name);              // prints 'roman' to the screen