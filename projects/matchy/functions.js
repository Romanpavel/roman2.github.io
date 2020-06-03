/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search (animals, name) {
    
    // loop over the animals array of objects
    for (let i = 0; i < animals.length; i++) {
              // conditional if the animals name exists
          if (animals[i].name.toLowerCase() === name.toLowerCase()) {
              // return that animals
               return animals[i];
               //else return null
        }
        }
        return null;
    }


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement) {
    // loop over animals array
    for(let i = 0; i < animals.length; i++ ){
        // if animals name matches the name parameter
        if(animals[i].name.toLowerCase() === name.toLowerCase()){
            // reasign the animal to the replacemtn object
            return animals[i] = replacement;
        }
    } return null;
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove (animals, name) {
    // loop over animals array
        for(let i = 0; i < animals.length; i++ ){
        // if animals name matches the name parameter
        if(animals[i].name.toLowerCase() === name.toLowerCase()){
            // return animals with the animal removed
           return animals.splice(i); 
}
}
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// if name property and species property exist in animal object

function add(animals, animal) {

if (animal.name.length > 0 && animal.species.length > 0){
    
     // loop through animals array of objects
     
     for(let i = 0; i < animals.length; i++){
         
         // conditional, lowercased name proerty of all iteration throgh animals object is equal to the name property lowercased of animal obj
         
          if (animals[i].name.toLowerCase() === animal.name.toLowerCase()){
              
              // do nothing
              
               return null;
           }
           
           // add the animal obj to the animals array
           
       } animals.push(animal);
   }

}
/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
