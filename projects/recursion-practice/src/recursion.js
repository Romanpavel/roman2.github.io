// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  
  // if n is negative return null
  
  if (n < 0) {
    return null;
    
    // if n is 0 or 1 return 1
    
  } else if (n === 0 || n === 1) {
    return 1;
  }
  
  // return the paramater n multiplied recursevily by n - 1
  
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  
  // base case: if the array is empty, return 0
  
  if (array.length === 0) {
    return 0;
  }
  
  
  // recuresice case, return the first index added to all subsequent indexes
  
    return array[0] + sum(array.slice(1));

  
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) {
  
  // base case: if n number is 0 return true
  
    if(n === 0) {
    return true;
    
    // second base case for odd numbers, return false once reached
  } else if (n === 1) {
    return false;
    
    // edge case, if the number is smaller than 0, use recorsion to flip the value 
  } else if (n < 0) {
    return isEven(-n);
  }
  
  // using recursion subtract 2 from n parameter, until either the 0 or 1 base case is reached
  return isEven(n - 2);

};

  
  


// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  
  // base case: if the number n is 0 return 0
  
  if (n === 0) {
    return 0;
    
    // if n is negative add 1 to n and recursevily add it to the next digit up
  } else if (n < 0) {
    
    return (n + 1) + sumBelow(n + 1);
  }
  
  // if n is positive, recursively add up all digits below n
  
  return sumBelow(n - 1) + n - 1; 

};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  
  // base case: if the difference between 2 parameters is 0, return an empty array
  

if (x - y === 0 || y - x === 1) {
  return [];
}


// second base case: if the difference is 2 return the middle numbel
if (y - x === 2) {
  return [x + 1]
}
// return the middle number if the difference is 2
if (x - y === 2) {
  return [y + 1]
}

// if the first number is bigger  recuresevly call range, and add the x value to the beginning
if (x > y) {
  let list = range(x - 1 , y);
  list.unshift(x - 1);
  return list;
  
  // if the 2nd number is bigger return range recursvily and add the number to back
} else if (x < y) {
  let list = range (x, y - 1);
  list.push(y - 1);
  return list;
}

};



// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  
  // base case: if exponeent is 0 return 1
  
  if (exp === 0) {
    return 1;
    
    // second base case: if exponent is 1 return the base
  } else if (exp === 1) {
    return base;
  }
  
  // if exponent is negative, recursevily call exponent, divide 1 by the recursive call to get the ratio
  
  if(exp < 0) {
    return 1 / exponent(base, -exp);
  }
  
  // otherwise return the recursive call
  return base * exponent(base, exp - 1);
  
  
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  // base case:
  // if n is equal to one return true
  if (n === 1) {
    return true;
    // make sure we only have positive numbers and if anything isn’t equal to one return false
  } else if (n < 1) {
    return false;
  }
  // recursive Case:
  // keep calling the function until I find if n is 1 or 0
  // call the function and divide by 2 each time it runs
  return powerOfTwo(n / 2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  
  // base case:if there is no string return an empty string
  
  if (string.length === 0) {
    return '';
  }
  
  // recursively call the reverse function passing in the 2nd index followed by the previous 
  
  return reverse(string.slice(1)) + string[0];
  
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  
  // establish the strings to be all in the same case
  
  const regular = string.split(' ').join('').toUpperCase();
  
  // base case: if the length of the regular string is 1 or 0 return true
  
  if (regular.length === 1) {
    return true; 
  } else if (regular.length === 0) {
    return true;
  }
  
  // if the first element mathces the last element
  
  if (regular[0] === regular[regular.length - 1]) {
    
    // recursively slice off the first and last index
   return  palindrome(regular.slice(1, regular.length - 1));
   
   // if they don't match at any iteration, return false
  } else {
    return false;
  }
  
  
};
// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {

  if (x === 0 || y === 0) { 
    return 0;
  }
if (x > 0 && y > 0) {
  
  return multiply(x - 1, y) + y;
} else if (x < 0 && y < 0) {
  return multiply(x + 1, y) - y;
} else if (x > 0, y < 0) {
  return multiply(x - 1, y) + y;
} else if (x < 0 && y > 0) {
  return multiply(x + 1, y) - y;
}
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  
  // base case: if the 2 strings are empty, return true
  if(str1.length === 0 && str2.length === 0) {
    return true;
  }
  
  // if the first indexes match of string 1 and 2, return true
  if (str1[0] === str2[0]) {
    true;
    
    // if they dont match return false
  } else {
    return false;
  }
  
  // recursive case: return the slice of 2 strings starting at 2nd index
  return compareStr(str1.slice(1), str2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, arr = []){
  
  // base case, if the string length is 0, return an empty array
  
  if (str.length === 0) {
    return arr;
  }
  
  // push in the first index
  arr.push(str[0]);
  
  // recursion case: call the createArray function slicing off past the 2nd index
  return createArray(str.slice(1), arr);
  
};

// 17. Reverse the order of an array

  var reverseArr = function (array, revArray = []) {
  // base case
  // when the array.length is 0
  if (array.length === 0) {
    return revArray;
  }
  // recursion case
  // push the last element to the array and cut it off
  revArray.push(array[array.length - 1]);
  return reverseArr(array.slice(0, -1), revArray);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, array = []) {
  // base case:
  // if length is equal to zero return array
  if (length === 0) {
    return array;
  }
  // recersive case:
  // push the value into the array the amount of times the length is
  array.push(value);
  return buildList(value, length - 1, array);
};


// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
  
  var countOccurrence = function(array, value, count = 0) {
  // base case:
  // if the length of the array is 0 is 0 return a number
  if (array.length === 0) {
    return count;
  }
  // recursive case
  // if value is equal to the first index value then run the function slicing off the first index
  if (array[0] === value) {
    count++;
  }
  return countOccurrence(array.slice(1), value, count);
};
  

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, newArr = []) {
  // base case:
  // if the array.length is 0 return new array;
  if (array.length === 0) {
    return newArr;
  }
  // push element into the array run the callback function then return the rMap with the first element sliced off
  newArr.push(callback(array[0]));
  return rMap(array.slice(1), callback, newArr);
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {


};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  // base case:
  // when n equals 0;
  if (n < 0) {
    return null;
  } else if (n < 2) {
    return n;
  }
  // recursive case:
  // if add n to the function each time and subtact one from the function call
  return nthFibo(n - 1) + nthFibo(n - 2);
};
// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, capInput = []) {
  // base case:
  // if input length is 0
  if (input.length === 0) {
    return capInput;
  }
  // recursion case:
  // capitalize each index and push it into the new array
  capInput.push(input[0].toUpperCase());
  return capitalizeWords(input.slice(1), capInput);
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, capArray = []) {
  // base case:
  // when array length is 0
  if (array.length === 0) {
    return capArray;
  }
  // rescursive case: the first letter of the first word capitilize and add to the rest of the word, push to the array
  capArray.push(array[0][0].toUpperCase() + array[0].slice(1));
  
  // slice off the second index
  return capitalizeFirst(array.slice(1), capArray);
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
  let char = str[0];
  // base case:
  // string length is 0 return obj
  if (str.length === 0) {
    return obj;
  // if the letter exists then add one
  } else if (obj[char]) {
    obj[char]++;
  // if the letter does not then create a key value pair with the value of one
  } else {
    obj[char] = 1;
  }
  // recursive case:
  // return the function cutting off the first letter
  return letterTally(str.slice(1), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, compressList = []) {
  
  
  // base case: if the list is empty, return an empty array
  if (list.length === 0) {
    return compressList;
  }
  
  // if the first index doesnt match the second index, push the value to the compressList
  
  if (list[0] !== list[1]) {
    compressList.push(list[0]);
  }
  
  // recuresevily return the compress function, slicing after the 1st index
  
  return compress(list.slice(1), compressList);
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, myArr = []) {
  
  // base case: if the length of the array is 0 return the an empty array
  
  if (array.length === 0) {
    return myArr;
    
    // if the first index does not equal the last index, push the first index into myArr
  } else if (array[0] !== myArr[myArr.length - 1]) {
    myArr.push(array[0]);
  }
  

  // recuresively call the function, 
  return minimizeZeroes(array.slice(1), myArr);
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, altSignArr = []) {
  let num = array[0];
  // base case
  // when the array length is at zero return the new array
  if (array.length === 0) {
    return altSignArr;
  }
  // if the altSignArr has a length that is divisible by 2 then flip each character to pos
  if (altSignArr.length % 2 === 0 && num > 0) {
    altSignArr.push(num);
  } else if (altSignArr.length % 2 === 0 && num < 0) {
    altSignArr.push(-num);
  } else if (altSignArr.length % 2 === 1 && num > 0) {
    altSignArr.push(-num);
  } else if (altSignArr.length % 2 === 1 && num < 0) {
    altSignArr.push(num);
  }
  // recursion case
  // return the function removing one element from each array
  minimizeZeroes(array);
  return alternateSign(array.slice(1), altSignArr);
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
  
var numToText = function(str) {
  let strText = str.toString();
  let letter = strText[0];
  // base case
  // when the length of the array is at zero.
  if (str.length === 0) {
    return str;
  }
  switch(letter) {
      case '0':
        letter = 'zero';
        break;
      case '1':
        letter = 'one';
        break;
      case '2':
        letter = 'two';
        break;
      case '3':
        letter = 'three';
        break;
      case '4':
        letter = 'four';
        break;
      case '5':
        letter = 'five';
        break;
      case '6':
        letter = 'six';
        break;
      case '7':
        letter = 'seven';
        break;
      case '8':
        letter = 'eight';
        break;
      case '9':
        letter = 'nine';
        break;
    }
  // recursion case
  // return the strArr.length - 1 each time
  return letter + numToText(str.slice(1));
};
  
// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
