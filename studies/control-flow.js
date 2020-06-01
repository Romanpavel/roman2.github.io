/**
 * CONTROL FLOW:
 * 
 * 0. control flow is how the computer decides which code to exucute, and which to ignore,
 *    since coding is essentially a binary language, everything is equated to 0 or 1,
 *    we can describe this through a control flow, if its 1 then its not 0, and vice versa,
 *    
 * 1. through a series of if statements, code can be guided based on true and false values
 * 
 * 
 */
 
 var number = 10
 
 if (number > 0) {                  // the if statement results to true,
     console.log('i got something') // since the result is true, the code block is executed
 }
 
 // sometimes you have several if statements, with these cases we use 'else if' to check for multiple conditions
 
 if (number > 100) {              // this if statement is false so the code does not run
     console.log('big')
 } else if (number % 10 !== 0) {  // if number divided by 10 does NOT equal 0, it does =0 therefore false, code doesnt run
     console.log('no remainder')
 } else if (number < 10) {
     console.log('so close')     // 10 is NOT less than 10, so it is still false
 } else if (number === 10) {
     console.log('bingo')        // this condition results to true, 10 is equal to 10, runs the code, prints 'bingo' to screen
 } else if (number < 100) {
     console.log('what happened') // this code never runs, even though true, the code runs only the 1st true statement
 }
 
 // sometimes in code there needs to be a default statement in case none of the cases evaluate to true
 // this is where we have an else statement
 
 var myString = 'Godzilla'
 
 if (myString.length < 2) {
     console.log('be afraid')
 } else if (myString[0].toLowerCase() === 'G') {
     console.log('be very afraid')
 } else {
     console.log('nothing to fear')               // since all other code fails the condition, the else statement executes
                                                 // prints 'nothing to fear to the screen'
 }
 
 /**
  * SWITCH:
  * 
  * 0. switch statements are another way of controling the flow of code, instead of using an if, else if, else,
  *    they are preferential when dealing with lots of different cases
  * 
  * 1. switch statements use the keywords: switch, case, break, and default
  */ 
  
  var ev = 'tesla'
  switch (ev) {                             // keyword switch, followed by the variable in parantheses
      case 'toyota':                        // key word case followed by value dataType
          console.log('Ill consider it')    // code you with to run
          break;                            // keyword break, to escape the code, check for next case
      case 'Honda':                         // if either 'Honda' 
      case 'Acura':                         // or 'Acura'
          console.log('theyre the same')    // run this code
          break;
      case 'tesla':                         // this case mathces the variable parameter
          console.log('ill take it')        // since the switch statement evaluates to true, run the code 'ill take it'
          break;
      default:                                     // default keyword, if no case was matched, the default becomes executed
      console.log('just give me an electric car')  // code does not run because case 'tesla' was executed before
         
  }