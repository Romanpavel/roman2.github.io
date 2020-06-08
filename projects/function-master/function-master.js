//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    
    // create an array
    var array = [];
    // loop over the object
     for (var key in object) {
         // push the values into the array
        array.push(object[key]);
}
// return the array
return array;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    
    // using the Object.keys to get all the keys, and join with a space

 return Object.keys(object).join(' ');
 
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    
    // create a variable to hold the array of values
    
    var strings = [];
    
    // loop over the object
    
    for (var key in object) {
        
        // if the value is a string, add that value to the array
        
        if(typeof object[key] === 'string' ) {
        strings.push(object[key])
        }
    }
    // return the value seperated by a string
    return strings.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    
    // check if collection is an array through the Array.isArray method, return array
    
    if(Array.isArray(collection) === true) {
        return 'array';
        
        // if its not array it is an object
        
    } else {
        return 'object';
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    
    // return the first index uppercased combined with the rest of the word using slice
    
    return string[0].toUpperCase() + string.slice(1);
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    
    // split the string into individual words using the .split method
    
    var strings = string.split(' ');
    
    // create an array to hold the capitilized words
    var words = [];
    
    // loop over the strings array
    
    for (let i = 0; i < strings.length; i++) {
        
        // add the capitilzed words to the word array
        
        words.push(strings[i][0].toUpperCase() + strings[i].slice(1))
    }
    
    // return the array joined by a space
    
    return words.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    
    // template literal 'welcome' followed by capitalized first letter, the rest of the name, and an exclamation
    
    return `${'Welcome'} ${object.name[0].toUpperCase()}` + object.name.slice(1) + '!';
    
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    
    // return the first letter capitilized along with the rest of the name concated with ' is a ' string with spaces,
    // on both sides, do the same for the species

   return object.name[0].toUpperCase() + object.name.slice(1) + ' is a ' + object.species[0].toUpperCase() + object.species.slice(1); 

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    
    // if the noises exist, in empty objrct, and undefined 
    
    if(object.noises !== undefined && object.noises.length > 1) {
        
        // return the noises split by a space
        
        return object.noises.toString().split(',').join(' ');
        
        // else return 'there are no noises'
    } else {
        return 'there are no noises';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    
    // create a variable to split the string into an array
    
    var strings = string.split(' ');
    
    // loop over the array
    
    for (let i = 0; i < strings.length; i++) {
        
        // if the word matched the string in the array return true
        
        if(strings[i] === word) {
            return true;
        
        }
    }
    // otherwise return false
    return false;

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    
// using the push method add name to the friends array

         object.friends.push(name);
         
         // return updated object
         
         return object;


}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    
    // test for edge case of empty object, by using the Object.keys() method
    
if (Object.keys(object).length === 0) {
  return false;
}

// loop over the friends array in the object

    for (let i = 0; i < object.friends.length; i++) {
        
        // if an element in the freinds array matched the name return true
        
            if (object.friends[i] === name) {
                 return true;
            }
    }
    
    // for all else reeturn false
    
 return false;
}


//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

    
function nonFriends(name, array) {
    
    // create an variable to hold all the names 
    
var arrOfNames = [];

// create a variable to have the non-freinds 

var nonFriendsArray = [];

// create an array of all freinds for given name

var friendArray;

// loop over the array of objects

    for (let i = 0; i < array.length; i++) {
        
        // add the names of the array 
        
      arrOfNames.push(array[i].name)
      
      // if the name of array object is the same as the given array
      
      if(array[i].name === name) {
          
          // add the friends of the given name to the friendArray
          
        friendArray = array[i].friends
      }
    }
    
    // loop over the created arrOfNames from all the names in the array object

    for (let i = 0; i < arrOfNames.length; i++) {
        
        // if the friendsArray does NOT include the friend, AND the name does not match the given name parameter
        
      if(!friendArray.includes(arrOfNames[i]) && arrOfNames[i] !== name) {
          
          // add the non friends to the nonFreinds array 
          
        nonFriendsArray.push(arrOfNames[i])
      }
    }
  
  // return all the non-friends
  
return nonFriendsArray;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////


function updateObject(object, key, value) {
    
    // create an array of keys 

     var objArr = Object.keys(object);
     
     // loop over the keys array of the object
   
     for (let i = 0; i < objArr.length; i++) {
         
         // if the keys in the object match the parameter key
       
        if (objArr[i] === key) {
            
            // re-assign that keys value to the value parameter
            
         object[key] = value
         
         // return the updated object
         
         return object
         
         // if the key does not match the given key, create a key and assign it to that value
         
      } else if (object[i] !== key) {
         object[key] = value
         
         // return updated object
         
          return object
      }
     }

  }
  
//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////


function removeProperties(object, array) {
    
    // create an array of all the keys in the object

var stringArr = Object.keys(object);

// loop over the array of object keys

for (let i = 0; i < stringArr.length; i++) {
    
    // loop over the array
    
    for (let f = 0; f < array.length; f++) {
        
        // if any keys, match any values of the array
      
        if (stringArr[i] === array[f]) {
            
            // delete that key/value pair
            
            delete object[stringArr[i]];
        }
    }
}

// return updated object

return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    
    // store the non-duplcate values
    
    var myArr = []; 
    
    // loop over the array
    
    for (let i = 0; i < array.length; i++) {
        
        // using the includes method check if the value in array is NOT included in myArr
        
      if(!myArr.includes(array[i])) {
          
          // add the value
          
        myArr.push(array[i])
      }
    }
    
    // return the array without any duplicates
    
return myArr;

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}