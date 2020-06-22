// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-romanpavel');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *      // start from github
 *    npm start --prefix ./roman2.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

// create a function valled maleCount and assign it to an annonymous function

var maleCount = array => {
    
    // return the filter function passing in the array to be filtered, an an annonymous function
    
    return _.filter(array, customerObj => {
        
        // return the amount of customers whose gender key is equivalent to 'male' string in a new array
        
        return customerObj.gender === 'male';
        
        // get the lenght of the array of filtered results where the customers gender was male
        
    }).length;

};

// create a variable of femalieCount and assign it to a annonymous function

var femaleCount = array => {
    
    // return the function reduce which takes the array being passed in, and an annonymous function

return _.reduce(array, (counter, customerObj) => {
    
    // if the gender of the the customer is female, increase the counter by 1, by # of females
    
    if(customerObj.gender === 'female') {
        counter++;
    }
    
    // return the amount of females
    
    return counter;
}, 0);
};

// create a variable oldestCustomer and assign it to an annonymous function

var oldestCustomer = array => {
    
    // create a place to hold the oldest customers age
    
var oldest = 0;
    
    // return the reduce function, which takes an array, and an annonymous function
    
return _.reduce(array, (prev, current) => {
    
    // if the age of the customer is bigger than oldest variable, re-asign oldest to the the current customers age
    
    
 if (current.age > oldest) {
     
     oldest = current.age;
     
     // return the name vale of the oldest customer
     
     return current.name;
     
 }
 
 // otherwise return the seed
 
 return prev;
    
}, '');

};


// create a variable called youngestCustomer and assign it to an annonymous function

var youngestCustomer = array => {
    
    // create a base case, and assign it to the numeric value of infinity 
    
    var youngest = Infinity;
    
    // return the reduce function which takes an array, and an annonymous function
    
    return _.reduce(array, (prev, curr) => {
        
        // if the age of a customer is less them the value in youngest, assign youngest the the customers age number
        
        if (curr.age < youngest) {
            
            youngest = curr.age;
            
            // return the customers name whos age is the smallest
            
            return curr.name;
            
        }
        
        // return the seed
        
        return prev;
        
    }, '');
};


// create a variable called averageBalance and assign it to an annonymous array

var averageBalance = array => {

// return the reduce function which takes a given array and an annonymous function

    return _.reduce(array, (prev, curr) => {
        
        // assign the dollar variable to the balance of the customer with the money sign an comma removed
 
      const dollar = curr.balance.replace('$', '').replace(',', '');
      
      // return the aggregate of all the numbers in dollar, using parseFloat to change the value of a string to a number
 
     return prev + parseFloat(dollar);
     
     // divide the total amount of all balances by the amount of customers in the data set

    }, 0) / array.length;
};


// create a variable called firstLetterCount and assign it to an annonymous function

var firstLetterCount = (array, letter) => {
    
  // return the reduce function whch takes the given array, and an annonymous function
    
    return _.reduce(array, (acc, curr) => {
        
        // if the capitilized first index of the name value in customer is the same as the capitilized letter parameter
        
        if (curr.name[0].toUpperCase() === letter.toUpperCase()) {
            
            // increase the accumulator by 1
            
            acc++;
        }
        
        // return the accumulator
        
        return acc;
    }, 0);
    
};

// create a variable called freindsFirstLetterCount and assign it to a annonymous function

var friendFirstLetterCount = (array, customer, letter) => {
    
    // return the reduce function that takes an array an an annonoumous function
    
    return _.reduce(array, (acc, curr) => {
        
        // if the customers parameter matches the objects name value 
        
      if (curr.name === customer) {
          
          // assign variable friends to the customers freinds array 
        
          const friends = curr.friends;
          
          // loop over the freinds array of the customer

            for (let i = 0; i < friends.length; i++) {
                
                // if the first letter capitilized of the names of freinds of the customer matched the capitilizd letter parameter

              if (friends[i].name[0].toUpperCase() === letter.toUpperCase()) {
                  
                  // increase the accumulator by 1, for every person that matches the letter

            acc++;
          }
        }
    }
    
    // return the accumulator
    
      return acc;
    }, 0);
    
};


// create a variable and assign it to an annonymous function which takes an array and a name as its parameters

var friendsCount = (array, name) => {
    
    // return the reduce function an the array
    
    return _.reduce(array, (acc, curr) => {
        
        // simplicity variable to hold array of friends on customer array
        
        var friends = curr.friends;
        
        // loop over the array of freinds
        
        for (let i = 0; i < friends.length; i++) {
            
            // if the freinds name matches the parameter name, push the customer name to acc array
            
        if (friends[i].name === name) {
             acc.push(curr.name);
             
        }
        }
        
        // return the array
        
        return acc;
        
    }, []);
    
};


// create a variable called topThreeTags and assign it to an annonymous function with array as its parameter

var topThreeTags = array => {
    
    // us the pluck function to get all values from customers tags

    var tagsArray = _.pluck(array, 'tags');

// combine the array of arrays of tags into a single array of tage

    var oneArray = Array.prototype.concat(...tagsArray);

// return the reduce function, which takes an array of tags, and a callback function

    return _.reduce(oneArray, (acc, curr, index) => {
    
    // if the object does not exist, create an object with key of tag and value of the tag, and key of occurances and value in a number
    
         if(!acc[curr]) {

            acc[curr] = {tag: curr, occ: 0};
  } 
  
  // for every tag in the iteration increase the amount of occurances by 1 per tag
  
          acc[curr].occ++;
    
    // at the last index, after all tags have been checked and counted, covert seed of object to an array

         if (oneArray.length - 1 === index) {
      
      // create a variable to hold the top 3 values
      // using Object.values() print an array of the values (number of ocurances)
      // sort those values from smallest to largest
      // slice of the last 3 indexes giving you the top 3 objects

                var top3 = Object.values(acc).sort((a, b) => a.occ - b.occ).slice(-3);
  
  // return an array, taking the array of objects, and printing the values on the tag key
  
                 return _.map(top3, obj => obj.tag);
    
    // else return the seed
    
    } else {

      return acc;
}
}, {});
};


// create a variable called genderCount and assign it to an annonymous function

var genderCount = array => {

    // return the reduce fucntion which takes an array and a callback function
    
    return _.reduce(array, (acc, curr) => {
        
        // assign the variable of freinds to all the freinds of customers

      const gender = curr.gender;

// if the object does not exist, create it and set it equal to 1

        if(!acc[gender]) {
            acc[gender] = 1;
            
            // incriment existing objects value by 1 for every instance of gender
            
        } else {
            acc[gender]++;
        }
        
        // return the total object
        
        return acc;
        
    }, {});
    
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
