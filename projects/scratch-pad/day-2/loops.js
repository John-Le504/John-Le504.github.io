// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  for (var i = 0 ; i < array.length ; i++){ //loops from the beginning of the array
    console.log(array[i]); //prints the values to the console
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  for (var i = array.length-1; i > -1; i--){ //starts loop from the back of array
    console.log(array[i]); //prints from back to front of array
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  var newArr = []; // made an empty array
  
  for (var key in object){ //for loop that goes through the object
    newArr.push(key); //pushes each key into an array
  }
  return newArr;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
   for (var key in object){ //for loop that goes through the object
     console.log(key); //prints the keys of the object
   }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  var newArr = []; //made an empty array
  
  for (var key in object){ //for loop that goes through the object
    newArr.push(object[key]); // pushes the value of the keys into the array
  }
  
  return newArr;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  for (var key in object){ //for loop that goes through the object
    console.log((object[key])); // prints the values of the keys
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  var newArr = []; //created an empty array
  for (var key in object){ //for loop that goes through the object
    newArr.push(key); //pushes all the keys into the array
   
  }
   return newArr.length; //returns the length of the array
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  var newArr = []; //created an empty array
  for (var key in object){ //for loop that goes through the object
    newArr.push(object[key]); //pushes all the values into the array
  }
  newArr.reverse(); //reverse the order in the array
  

  for (var i = 0; i < newArr.length; i++){ //for loop that loops through the array
    console.log(newArr[i]); //prints the values from beginning of array
  }
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
