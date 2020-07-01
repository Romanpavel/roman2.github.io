/**
 * FUNCTIONS:
 * 
 * 0. in JavaScript functions are an incredibly powerful toool, they can be used to alter
 *    and manipulate values, 
 * 
 * 1. functions are called with the 'function' keyword followed by parameters enclosed in parantheses,
 *    parameters are placeholders for future arguments or actual values
 * 
 * 2. Named functions are Hoisted to the top of their scope
 * 
 * 3. functions can take other functions as parameters, they can return functions, and have functions inside
 * 
 * 4. Scopes: refering to the accessibilty, visibility, and general location of where datatypes are stored,
 *            functions create their own scope, this means variables created in a function are only accessible inside
 *            that function, inner scopes or child scopes have access to the parent scope or outer scope variable, but not 
 *            the other way around.
 *            when using the let keyword, the variable is scoped to the function or loop.
 *            the keyword var makes variables globally scoped unless they are created inside a functions scope
 *            scoping is how we shelter certain variables from outer processes
 * 
 * 5. Closures: an example would be when an inner function, or nested function, uses a variable or parameter
 *              that was created in an outer scope.
 *              closures allow innner functions to take advantage of this javascript property, and eliminate 
 *              complexity by accessing and using variables or parameters that have already been established.
 *              when an inner function accessed the outer functions variables, it encloses, this is why we call it a closure,
 *              the inner function bundles with the outer function.
 *              This does not work in the opposite way, an outer function or parent scope, does not have access to inner function 
 *              or child scope, meaning an outer function can NOT have closure with an inner function
 *              but, an inner function can have closure to the outer function because its using the outer func variables or parameters.
 * 
 */
 
 // FUNCTION DECLARATION:
 // named function syntax: keyword "function" functionName (parameter) {code block} 
 
 function imAFunc (parameter) {                      // parameters are used as placeholders for future arguments
     // code block statement
     return  console.log(parameter)                  // return statement 
 }
 
 // in order to execute or initializa, or call a function, type out the functions name followed by an argument to pass into the paranthases
 
 imAFunc('hello') // prints hello to the screen by passing in the argument string 'hello'
 
 // assigning a function to a variable
 
 var newFunction = function (parameter) {console.log(parameter)} // the declaration is Hoisted but the function code is not
 newFunction(0); // prints 0 to the screen, call the function by function name and passng in argment of the number 0
 
 // arrow functions
 
 var newFunc = (parameter) => console.log(parameter) // shorter simpler version of wrtiting a function, no return neccessary 
 newFunc('world') // prints 'world' to the screen
 
 // function Inputs:
 // function inputs are determined by the arguments passed into the function in replace of the parameter
 // we can have multiple inputs, values, and even other functions
 
 function testFunc (test) {
     if (test.length > 0) {
         return console.log('exists')
     }
 }
 
 function func (strings, testFunc) {
     for (let i = 0; i < strings.length; i++) {
         testFunc(strings[i])
     }
 }
 
 func(['hello', 'world'], testFunc) // prints exists, exists to the screen 
 
 // Function Ouputs: 
 // functions can produce outputs based upon the return statement.
 
 function name (string) {
     var capital = string.toUpperCase()    // code block
     return capital;                       // the code stops once the return statement is executed, and a value is produced
 }
 name('roman')                           // prints 'Roman' to the screen, return statements allow us to dictate what to return 
 
 
 // SCOPE:
 // scope refers to the accessibility of a variable, inner scopes can access outer values, but NOT the reverse
 
 var myCar = 'prius'
 
 function car (motorVehicle) {
     console.log(myCar)
 }
 car()             // prints 'prius' to the screen because because inner scope can access global/outer variables
 
 function food (recipe) {
     var main = 'steak &'
     if(recipe.length > 1) {
        main += ' potatoes'
     }
     return main + " " + 'with' + " " + recipe
 }

 food('butter')                                   // prints 'steak & potatoes with butter'
 
 // console.log(main) -> throws an error message because the variable main is locally/child scoped and not accessible from the global window
 
 // CLOSURES:
 
 function math (number) {
     var x = 10
     var equation = function() {
       var multiply = x * number;    // multiply has access to its parent scope of x = 10
          console.log(x)
     }
     return equation
 }
 var myMath = math(2)
 myMath()                             // prints 10 to the screen