// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    
    // using Array.isArray method to test if value is an array
    if (Array.isArray(value)) {
        return true;
        
        // if not an array return false
    } else {
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    
    
    // test if value is an array through Array.isArray method, return false if array
    if (Array.isArray(value)) {
        return false;
    } else if (value === null) {
        
        // if value is null return false
        return false;
    } else if (value instanceof Date) {
        
        // using instanceof method, check if value is a date and return false if date
        return false;
        
        // using typeof method, check if value is string 'object', return true
    } else if (typeof value === 'object'){
        return true;
        
        // everything that is not an object return false
    } else {
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    
    // if value is an array return true
    
    if (Array.isArray(value)) {
        return true;
        
        // if value is null return false
        
    } else if (value === null) {
        return false;
        
        // if there is an instance of date, return false
        
    } else if (value instanceof Date) {
        return false;
        
        // if the value is an object using typeof method return true
        
    } else if(typeof value === 'object') {
        return true;
        
        // return false for all other datatypes that is not an object
        
    } else {
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    // if value is a string return string string
    
    if (typeof value === 'string') {
        return 'string';
        
        // if value is an array return array string
    } else if (Array.isArray(value)) {
        return 'array';
        
        // if value is undefined return undefined string
    } else if (typeof value === 'undefined') {
        return 'undefined';
        
        // if value is a number return a number string
    } else if (typeof value === 'number') {
        return 'number';
        
        // if value is a voolean return a boolean string
    } else if (typeof value === 'boolean') {
        return 'boolean';
        
        // if value is null return null
    } else if (value === null) {
        return 'null';
        
        // if value is a function return function string
    } else if (typeof value === 'function') {
        return 'function';
        
        // if value is a date return a date string 
    } else if (value instanceof Date) {
        return 'date';
        
        // for everything else return an object
    } else {
        return 'object';
    }
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
