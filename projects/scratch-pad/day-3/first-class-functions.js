// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    
    return function(value){ //return a function that tests whether value is greater than base
        if (value > base){  //if statement checks if value is greater than base
            return true;    
        }
        else return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    return function(value){ //return a function that tests whether value is less than base
        if (value < base){  //if statement checks if value is less than base
            return true;    
        }
        else return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    return function(parameterString){ //return a function
        let newStr = parameterString.toLowerCase(); //made parameterString lowercase and stored it in newStr
        if(newStr[0] === startsWith.toLowerCase()){ //if statement checks if the first letter of newStr is lowercase
            return true;
        }
        else return false
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    return function(string){
        var stringLowerCase = string.toLowerCase();
        if (stringLowerCase[stringLowerCase.length-1] === endsWith.toLowerCase()){
            return true;
        }
        else return false;
        
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
        var newArr = []; //empty array
        
        for (var i = 0; i < strings.length; i++){ //loop through strings in array
          newArr.push(modify(strings[i])); //push the strings into newArr array after using modify to change each index
        }
        return newArr; //return modified array of strings
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    var allStringsPass = 0;
    var counter = 0;
    
    //for loop that goes through array and tests if each string in the array passes the test
    for (var i = 0; i < strings.length; i++){
        if (test(strings[i]) === true){         //checks if string passes test 
            counter++;                          //and increments counter if true
        }
        else counter = 0; //else,reset counter to 0
        
        if(counter > strings.length-1){ //checks if counter is bigger than array
            counter = 0;
            allStringsPass++;
        }
    }
    
    
    //if all strings in the array pass,return true
    if (allStringsPass != 0){   //if allStringsPass isn't 0
        allStringsPass = 0;     //reset allStringsPass
        return true;            //return true
    }
    else return false; //if not,return false
    
   
    
    
    
    
    
    
    
    
    
    
    
    // var numpassed;                              //created empty variable to store passed tests
    // var finalPass;
    // for(var i= 0;i < strings.length;i++){     //loops through array of strings
    //     if(test(strings[i]) === true){          //tests if the string passes the test
    //         numpassed++;                        //add one to itself if string passes test
            
    //     }
    //     else numpassed = 0;
        
    //     if(numpassed > strings.length){     //tests if numpassed is bigger than the number of indexes in array of strings
    //         numpassed = 0;                  //resets numpassed to 0 if it becomes bigger than the array
    //         finalPass++;
            
    //     }
    // }
    
    // //return true if all strings pass,but return false if at least one doesn't pass
    // if (finalPass > ){
    //     return true;
    // }
    // else return false;
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}