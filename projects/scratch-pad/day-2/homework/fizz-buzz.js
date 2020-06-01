// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    
    // create a for loop with starting condition 1, and stopping at 100, increment by 1
    
    for (let i = 1; i < 101; i++) {
        
        // print fizzbuzz if i is divisible by 15 (5 * 3) with a remainder of 0 using modulus
        if (i % 15 === 0) {
            console.log('FizzBuzz');
            
            // if i divided by 3 has a remainder of 0, using modulus print fizz
        } else if (i % 3 === 0) {
            console.log('Fizz');
            
            // if i divided by 5 has a remainder of 0, using modulus print buzz
        } else if (i % 5 === 0) {
            console.log('Buzz');
            
            // for all other numbers not divisible by 5, 3, or both, print the number between 1 - 100
        } else {
            console.log(i);
        }
    }



    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}