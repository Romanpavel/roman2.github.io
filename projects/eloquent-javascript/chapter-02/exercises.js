
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(k) {  // create a parameter of k
  
  // create a storage space for the hashtags
  
var count = '';

// loop over, ending at parameter k
for (let i = 0; i < k; i++) {
// at every iteration console.log '#' and add to the next line
 console.log(count += '#')
}
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  
  // create a loop starting at 1 and ending inclusively at 15
  
for (var i = 1; i <= 15; i++) {
  
  // create a container for the output
    var message = "";
    
    // if the number i divided by 3 has a remainder of 0 add fizz
    if (i % 3 === 0) {
        message = "fizz";
    } 
    // if the number i is divisible by 5 add buzz to message
    if (i % 5 === 0) {
        message += "buzz";
    } 
    // console.log either message of the number
    console.log(message || i);
}
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(n) { // create a parameter to take in any number
  
  // assign variable size to the number parameter
  
  let size = n;

// create a variable to hold the chess board

let board = "";

// create a loop that ends at the size number

for (let y = 0; y < size; y++) {
  
  // create another loop for white space
  for (let x = 0; x < size; x++) {
    
    // conditional for even numbers add white space to board
    if ((x + y) % 2 == 0) {
      board += " ";
      // else add # to the board
    } else {
      board += "#";
    }
  }
  // create new line
  board += "\n";
}

// print the board to the screen
console.log(board);

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
