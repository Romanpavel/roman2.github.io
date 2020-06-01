/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

 /**
  * var, let, and const are 3 keywords used in javascript to hold variables.
  * var is globally sconped when used outside of a function, 
  * var is functionally scoped when used inside the function
  */

 var greeting = 'hey yall'; // globally scoped and get hoisted to top, with an initial value of undefined
 
 function greetings(name) {
     var greeting = 'hey'; // functionally scoped, not available in global
     var end = 'you';
     return `${greeting} ${end} ${name}`
 }

 greetings('roman'); // prints hey you roman
 
 /**
  * the var keyword becomes Hoisted to the top of its scope, wether global or functional
  * the declaration is the only thing Hoisted, the Initialization happens when the code is reached
  */
  
  h = 11;
  var h;
  console.log(h); // prints 11, because var h is hoisted above the initialization
  
  /**
   * Let is NOT Hoisted, 
   * let is primarly used in block scope, it is meant to be assigned, used, and never reasigned
   * let does not create a property in the window object
   */
   
   let i = 10;
   for (let i = 0; i < 20; i++) {
       console.log(i); // prints #'s 0-19'
   }
   console.log(i); // prints 10
   
   /**
    * const is a keyword to declare a variable that is NOT Hoisted
    * const can be either locally or globally scoped
    * const does not appear in the global window
    * values declared with the keyword const can NOT be reasigned
    */ 
    
    const age = 29;
    // age = 30; 
    console.log(age) // Typerror, can NOT change the value of const
    
    // const age; <---- const mmust be initialized when delcared or it will through an error
    
    
    /**
     * Hoisting is a part of Javascript when values are brought to the top of their scope
     * wether Local scope or Global scope, values declared with the keyword var are hoisted
     * functions are also hoisted if they are NOT assigned to a variable, which will be Hoisted instead
     */
     
     var myPants = 'addidas' // var myPants is hoisted but NOT initialized 
     
     function changePants(string) {
         return myPants = string
     }
     console.log('pumas'); // prints pumas to the screen because the function is hoisted above the initialization