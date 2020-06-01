/**
 * STRING MANIPULATION:
 * 
 * 0. there are several ways to manipulate strings in JavaScript,
 *    strings are written chracters in between quotation marks ''
 * 
 * 1. strings can be manipulated through operators such as + or +=
 * 
 * 2. there are several methods that can be used on strings,
 *    they are keywords preceded by a dot .
 *
 */
 
 // STRING OPERATORS:
 // string operators are used to combine strings together
 
 var greeting = 'hello ' 
 var person = 'Roman!' 
 
 // the (+) operator combines strings together
 
 console.log(greeting + person) // prints 'hello Roman!' to the screen
 
 var website = 'google'
 
 // += operator adds onto a string, syntax: website = website + '.COM'
 
 website += '.com'
 
 console.log(website) // prints google.com to the scrren
 
 // STRING METHODS:
 // there are several method that can be used to alter strings
 
 var myString = ' eartH '
 
 myString.trim() // takes off the white spaces of the string -> 'eartH'
 myString[0].toUpperCase() //uppercases the string or character to the left -> 'EartH'
 myString[myString.length - 1].toLowerCase() // lowercases the string or character to the left -> 'Earth'
 
 myString.charAt(0) // returns the character at the specified index -> 'E'
 
 myString.concat('rising', ['above us']) // joins strings together, can be multiple strings -> 'earth rising above us'
 var newString = 'Hello'
 newString.concat(myString) // joins strings together through variables -> 'Hello Earth'
 
 myString.indexOf('E') // check what the index of a character is -> 0
 
 myString.slice(0, 3) // extracts part of a string and returns a new string, starting and ending index, -> 'ear'
 
 myString.split('') // turns a string into an array, split by what you put between the quotes -> ['e', 'a', 'r', 't', 'h']
 
 myString.substring(0, 3) // returns a new string, from index, to end index -> 'ear'
 
 