// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value) {
    
    // return the value unchanged
    return value;
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value) {
    
    // if value is null return null
    if (value === null) {
        return 'null';
        
        // if value is a date, return date
    } else if (value instanceof Date === true) {
        return 'date';
        
        // if value is an array return array
    } else if (Array.isArray(value)) {
        return 'array';
        
        // else return the typeof value, which can be number, string, boolean, function, undefined, or object
    } else {
        return typeof value;
    }
    
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number) {
    
    // if array is NOT an array or the number is negative return an array literal
    
    if (!Array.isArray(array) || number < 0) {
        return [];
    }
    
    // if the number is NaN OR undefined return the first index of array
if (isNaN(number) === true || number === undefined) {
    return array[0];
    
    // if number is given, and its an array, use slice to return all values up to the number
} else {
    return array.slice(0, number);
}
};




/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, number) {
    
// if array is NOT an array or the number is negative return an array literal
    
    if (!Array.isArray(array) || number < 0) {
        return [];
    }
     // if the number is NaN OR undefined return the last index of array
if (isNaN(number) === true || number === undefined) {
    return array[array.length - 1];
    
     // else, if number is given, and its an array, use slice to return all values down to the number
} else {
    return array.slice(-number);
}
};


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function (array, value) {
    
    // loop over the array
    
    for (let i = 0; i < array.length; i++) {
        
        // if the value mathces the element in the array return the index at which it was found
        if (value === array[i]) {
            return i;
        } 
        
    }
    // otherwise return -1
    return -1;
    
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/


_.contains = function (array, value) {
    
    // loop over the array
    
    for (let i = 0; i < array.length; i++) {
        
        // if the array is equal to the value return true
        if (array[i] === value) {
            return true
        }
    
}
// otherwise return false
return false;
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/


_.each = function (collection, func) {
    
    // check if array is an array, loop over the array, and pass the values into func
    
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
         func(collection[i], i, collection);
        }
        
        // if collection is an object, loop over the object, and pass the values into func
        
    } else if (typeof collection === 'object' && collection !== null && collection instanceof Date === false) {
        for (var key in collection) {
            func(collection[key], key, collection);
        }
    }
    
};

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function (array) {
    
    // create an array to hold non-duplicate values
    
    var myArr = [];
    
    // loop over the array
    for (let i = 0; i < array.length; i ++) {
        
        // if the index at the value matches the current index add the value to myArr
        if(_.indexOf(array, array[i]) === i) {
            myArr.push(array[i]);
        }
    }
    // return the non-duplicate array
    return myArr;
};


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function (array, func) {
    
    // create a place to hold the new array of filtered results
    
    var myArr = [];
    
    // loop over the array 
    
    for (let i = 0; i < array.length; i++) {
        
        // if the result of the function passing in the array element index, array, evaluates to true, push that value to myArr
        
        if (func(array[i], i, array) === true) {
            myArr.push(array[i]);
        }
    }
    // return the filtered array, having evaluated to true after being passed trhough the function
    
    return myArr;
};


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/


_.reject = function (array, func) {
    
    // return the filter function that takes an array and a function
    // using arrow functions, if element, index, array being passed through the function evaluate to false, result is false
    // no return nessasary 
    
    return _.filter(array, (e, i, a) => func(e, i, a) === false);
    
};


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function (array, func) {
    
    // create an array for all truthy values 
    
    var trueArr = [];
    
    // create an array for all the falsy values
    
    var falseArr = [];
    
    // loop over the array 
    
    for (let i = 0; i < array.length; i++) {
        
        // if the result of passing in element, index, array evaluates to true, push element in trueArr
        
        if (func(array[i], i, array) === true) {
            trueArr.push(array[i]);
            
        // if the result of passing in element, index, array evaluates to false, push element in falseArr
            
        } else if (func(array[i], i, array) === false) {
            falseArr.push(array[i]);
        }
    }

// return the 2 arrays concatted 
    
    return [trueArr].concat([falseArr]);
    
};


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function (collection, func) {
    
    // create an empty array to hold the values of collection after being passed through func
    
    var myArr = [];
    
    // check if colleaction is an array
    
        if (Array.isArray(collection)) {
            
            // loop over collection array
            
             for (let i = 0; i < collection.length; i++) {
                 
                 // set variable x eqaul to the results of passing collection element, index, array through the function
            
                var x = func(collection[i], i, collection);
                
                // push the values of x to myArr
         
                     myArr.push(x);
             }
         
         // check if collection is an object
         
        } else if (typeof collection === 'object' && collection !== null && collection instanceof Date === false) {
            
            // loop through the object
            
                for (var key in collection) {
                    
                    // assign variable y to the values of collecction element, index, array after being passed through the function
            
                var y = func(collection[key], key, collection);
            
            // push all values of y to myArr
            
                    myArr.push(y);
        }
        
        }
        
        // return the array of updated elements
        
        return myArr;
};



/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, prop) {
    
    // arrow functino, no need for return
    // return map function, searching for argument prop as a key in the index of the array
    
    
    return _.map(array, (e, i, a) => a[i][prop]);
 };



/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/


_.every = function (collection, func) {
    
    // create a base varaible of test and assign it to the boolean value of true
    
let test = true;

// run the each function, passing through a collection, and a function

_.each(collection, function(e, i, a) {
    
    // if func is a function and the result of function on all elements is opposite of true -> false
    
    if (typeof func === 'function' && !func(e, i, a)) {
        
        // change test variable to false
        
            test = false;
            
            // if element results to falsy
            
        } else if (!e) {
            
            // change test to false
             
                test = false;
    }
});

// return the test value

return test;
};


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function (collection, func) {
    
    // create a base test, assign it to the boolena value of false
    
let test = false;

// run the each function, which takes a collection, and an function

_.each(collection, function (e, i, c) {
    
    // if function exists, and the result of the function is true, re-asign test to true

    if (typeof func === 'function') {
        if(func(e, i, c) === true) {
          test = true;
}
}
    // if the function does not exist, check for the truthy of the element -> re-asign test to true

    if (func === undefined) {
    if(e) {
        test = true;
    }
    
}

});

// return the result value of test

return test;
};


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/


 _.reduce = function(array, func, seed) {
     
     // assign the variable of prevResult to the seed
     
   let prevResult = seed;
   
    // if the seed does not exist, assign it to the first index of the array
    
    if (seed === undefined) {
        prevResult = array[0];
        
        // loop over the array starting at the 2nd index
        
        for (let i = 1; i < array.length; i++) {
            
    // assign the result to the values being  passed trough the function
    
            prevResult = func(prevResult, array[i], i);
        }
    } else {
        
        // loop over the array if seed is given, pass the elements through the function, and assign to prevResult
        
        for (let i = 0; i < array.length; i++) {
            prevResult = func(prevResult, array[i], i);
        }
    }
    
    // return the updated value
    
    return prevResult;
};



/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(object1, object2, ...object) {
    
// using the method of Object.assign, assign all subsequent objects to the first object, updating if keys match

    return Object.assign(object1, object2, ...object);
    

};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
