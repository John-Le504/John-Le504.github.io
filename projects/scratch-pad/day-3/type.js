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
    
    if (Array.isArray(value) === true){ //if statement that checks if value is an array
        return true;
    }
    else return false;
    
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
    
    if (Array.isArray(value)){ //checks if value is an array
        return false;
    }
    if (value === null){ //checks if value is null
        return false;
    }
    if (value instanceof Date){ //checks if value is an instanceof Date
        return false;
    }
    if (typeof value === "string"){ //checks if value is a string
        return false;
    }
    if (typeof value === "boolean"){ //checks if value is a boolean
        return false;
    }
    if (typeof value === "number"){ //checks if value is a number
        return false;
    }
    if (typeof value === "object"){ //checks if value is an object
        return true;
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
   
    if (Array.isArray(value)){ //checks if value is an array
        return true;
    }
    if (value === null){ //checks if value is null
        return false;
    }
    if (value instanceof Date){ //checks if value is an instanceof Date
        return false;
    }
    if (typeof value === "string"){ //checks if value is a string
        return false;
    }
    if (typeof value === "boolean"){ //checks if value is a boolean
        return false;
    }
    if (typeof value === "number"){ //checks if value is a number
        return false;
    }
    if (typeof value === "object"){ //checks if value is an object
        return true;
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
    
    if (value === null){ //checks if value is null
        return "null";
    }
    if (value instanceof Date){ //checks if value is an instanceof Date
        return "date";
    }
    if (typeof value === "string"){ //checks if value is a string
        return "string";
    }
    if (typeof value === "boolean"){ //checks if value is a boolean
        return "boolean";
    }
    if (typeof value === "number"){ //checks if value is a number
        return "number";
    }
    if (Array.isArray(value)){ //checks if value is an array
        return "array";
    }
    if (typeof value === "object"){ //checks if value is an object
        return "object";
    }
    if (typeof value === "function"){ //checks if value is an function
        return "function";
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
