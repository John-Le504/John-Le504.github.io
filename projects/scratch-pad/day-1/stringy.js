// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    return string.length; //returns the string's length


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    return string.toLowerCase(); //returns a lowercased version of the string


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    return string.toUpperCase(); //returns a uppercased version of the string


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
   
    var lowerCaseString = string.toLowerCase(); //converted the string to lowercase
    var strSplit = lowerCaseString.split(" "); //split the string by space(s)
    var strJoin = strSplit.join("-"); //joined the split string with -
    return strJoin;
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    var lowerCaseString = string.toLowerCase(); //lowercased the string
    var lowerCaseChar = char.toLowerCase(); //lowercased the character
    if (lowerCaseString[0] === lowerCaseChar){ //if the first letter of the string match the given character,return true, if not, return false
        return true
    }
    else return false;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    
    var lowerCaseString = string.toLowerCase(); //lowercased the string
    var lowerCaseChar = char.toLowerCase(); //lowercased the character
    var splitString = lowerCaseString.split(""); //splits the string into an array that contains every letter (and includes the "space")
    if (splitString[splitString.length - 1] === lowerCaseChar){ //if the last letter of the string match the given character,return true, if not, return false
        return true
    }
    else return false;
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    return stringOne + stringTwo; //concatenates the given strings

    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    
    var args = Array.from(arguments); //stores all arguments from the function into an array
    var joinedArgs = args.join(""); //joins every value in args and assigns it to the variable
    return joinedArgs;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    if (stringOne.length > stringTwo.length){ //Tests if stringOne is longer that stringTwo and returns the longer string
        return stringOne;
    }
    else return stringTwo;
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    
    var array = [stringOne, stringTwo]; //put the arguments in an array
    var sortedArr = array.sort(); //made the array alphabetical order
    
    if (sortedArr[0] === stringOne){ //if the first index is stringOne, check if both strings are the same string, and if they are,return 0, and if they're not, return 1
        if (sortedArr[0] === sortedArr[1]){
          return 0;
        }
        else return 1;
    }
    if (sortedArr[0] === stringTwo){ //checks if stringTwo was in the first index
        return -1;
    }
    
    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    var array = [stringOne, stringTwo]; //put the arguments in an array
    var sortedArr = array.sort(); //made the array alphabetical order
    
    if (sortedArr[1] === stringOne){ //if the second index is stringOne, 
        if (sortedArr[0] === sortedArr[1]){ //check if both strings are the same string, and if they are,return 0, and if they're not, return 1
          return 0;
        }
        else return 1;
    }
    if (sortedArr[0] === stringOne){ //checks if stringOne was in the first index
        return -1;
    }
    
    
    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
