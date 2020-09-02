
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(input) {
  let str = "#"; //created str starting with "#"
  for (let i = 0; i < input; i++){ //if i is less than input
    if (i >= str.length){ //if i is bigger than str length
      str += "#"; //concat "#" to str
    }
    console.log(str); //print str until loop ends
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  for (let i = 1;i <= 15; i++){ //for loop going up to 15
    if (i % 3 === 0 && i % 5 ===0){ //if i is divisible by 3 and 5
      console.log("fizzbuzz"); //print "fizzbuzz"
    }
    else if (i % 3 === 0){ //if i is divisible by 3
      console.log("fizz"); //print "fizz"
    }
    else if (i % 5 ===0){ //if i is divisible by 5
      console.log("buzz"); //print "buzz"
    }
    else console.log(i); //print i
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(input) {
  let size = input; //created size variable that stores input
  let board = ""; //created board variable that stores empty string
  
  //double loop to go through 2 dimensions
  for(let i = 0; i < size; i++){ 
      for(let f = 0; f < size; f++){
        
        if((i + f) % 2 === 0){ //if i and f indexes are divisible by two
        board += " "; //concatenate a space to board
        }
        
        else board += "#"; //concatenate a # to board
      }     
  
  board += "\n"; //make a new line every time a line reached the input number
  }
 
  console.log(board) //print board
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
