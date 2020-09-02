// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/


// the identity function takes in any value and returns it's value unchanged
_.identity = function(value){
    //return value unchanged
    return value;
}


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

// the typeof function takes in any value and returns it's type as a string
_.typeOf = function(value){
    
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
    if (typeof value === "undefined"){ //checks if value is undefined
        return "undefined";
    }
}


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

//first function takes an array and a number,return the first value(s) in the array that correlates the number argument
_.first = function(array, number){
    //if array is an array
    if (Array.isArray(array)){
        //if number is a number
        if(typeof number === "number"){
            //if number is positive
            if(number > 0){
                //if number is less than array length
                if(number < array.length){
                    //create resultArr empty array
                    let resultArr = [];
                    //loop through array using number to stop loop
                    for(let i = 0; i < number; i++){
                        //push values into resultArr
                        resultArr.push(array[i]);
                    }
                    //return resultArr
                    return resultArr;
                }    
                //if number is greater than array length,return whole array
                else return array;
            }    
            //if not a positive number,return empty array
            else return [];
        }
        //if not a number,return the first value in array
        else return array[0];
    }
    //if not array,return empty array
    else return [];
}


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/


//last function takes an array and a number,returns the last value(s) in the array
_.last = function(array,number){
   //if array is an array
    if (Array.isArray(array)){
        //if number is a number
        if(typeof number === "number"){
            //if number is positive
            if(number > 0){
                //if number is less than array length
                if(number < array.length){
                    //create resultArr empty array
                    let resultArr = [];
                    //loop through array backwards
                    for(let i = array.length; i >= 0; i--){
                        //push values into resultArr
                        resultArr.unshift(array[i]);
                        //if last index number of resusltArr is equal to number
                        if(resultArr.length - 1 === number){
                            //pop off last index in resultArr
                            resultArr.pop()
                            //return resultArr
                            return resultArr;
                        }
                    }
                }    
                //if number is greater than array length,return whole array
                else return array;
            }    
            //if not a positive number,return empty array
            else return [];
        }
        //if not a number,return the last value in array
        else return array[array.length - 1];
    }
    //if not array,return empty array
    else return [];
}


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/


//indexOf function takes an array and any value,returns the index of the value within the array
_.indexOf = function(array, value){
    //loop through array
    for(let i = 0; i < array.length; i++){
        //if value in array equals value
        if(array[i] === value){
            //return index
            return i;
        }
    }
    //return -1 if value isn't found in array
    return -1;
}


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/


//contains function takes an array and any value,returns true or false whether value is in array
_.contains = function(array, value){
  let boolean;
  //loop through array
  for(let i = 0; i < array.length; i++){
        //if value of index in array is eqial to value
        if(array[i] === value){
            //assign true to boolean
            boolean = true;
        }
  }
  //return true if boolean is truey or false if boolean is falsey
  return (boolean ? true : false)
}


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

//each function loops through collection and applies the function to each phase of loop
_.each = function(collection, func){
    //if collection is an array
    if(Array.isArray(collection)){
        //loop through collection
        for(let i = 0; i < collection.length; i++){
            //use function and use arguments in it
            func(collection[i], i, collection);
        }
    }
    //else collection is not an array
    else{
        //loop through object
        for(let key in collection){
            //use function and use arguments in it
            func(collection[key], key, collection);
        }
    }
    
}



/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

//unique function returns a new array of all elements of array that aren't duplicates
_.unique = function(array){
    //created empty array uniqueArr
    const uniqueArr = [];
    
    //loop through array
    for(let i = 0; i < array.length; i++){
          //if indexOf returns -1, push the value in the index into empty array
          if(_.indexOf(uniqueArr,array[i]) === -1){
          //push the value in the index into empty array
          uniqueArr.push(array[i]);
        }
    }
    return uniqueArr; //return uniqueArr
}


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/


//filter function takes an array and a function, and returns a new array of elements for when function returned true
_.filter = function(array, func){
    
   //creat empty array newArr
    const newArr = [];
    
    //calling each,putting in array, and creating a function that uses the values from each
    _.each(array,(element, index, collection) => {
      
      //if func in _.each returns true 
      if(func(element, index, collection)){
        //push the value into newArr
        newArr.push(element);
      }
    })
     
    //return newArr
    return newArr;
    
}


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/


//reject function takes an array and a function, and returns new array of elements for when function returned false
_.reject = function(array, func){
    
    //creat empty array newArr
    const newArr = [];
    
    //calling each,putting in array, and creating a function that uses the values from each
    _.each(array,(element, index, collection) => {
      
        //if func in _.each returns false 
        if(!func(element, index, collection)){
            //push the value into newArr
            newArr.push(element);
        }
    })
    //return newArr
    return newArr;
    
}


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

//partition function takes an array and a function, and returns an array that is made up of two sub-arrays
_.partition = function(array, func){
    
    //creat empty array newArr
    const newArr = [[], []];
    
    //calling each,putting in array, and creating a function that uses the values from each
    _.each(array,(element, index, collection) => {
        //push element into first array in newArr if function returned true
        if(func(element, index, collection)){
            //push element into first array in newArr
            newArr[0].push(element);
        }
        //push into second array in newArr if function returned false
        else newArr[1].push(element);
    })
    //return newArr
    return newArr;
}



/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

//map function takes a collection and a function, and returns a transformed verion of the collection
_.map = function(collection, func){
    
    //creat empty array newArr
    const newArr = [];
    
    //calling each,putting in collection, and creating a function that uses the values from each
    _.each(collection,(element, index, collection) => {
        //push the value func returns into newArr
        newArr.push(func(element, index, collection));
    })
    //return newArr
    return newArr;
    
}


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

//pluck function takes an array of objects and property,and returns an array containing the value of property for every element in array
_.pluck = function(arrayOfOb,property){

    //calling map,and returning a mapped array
    return _.map(arrayOfOb,(element, index, collection) => {
        //return the property into the array in the map function
        return (element[property]);
    })
}


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

//every function takes a collection and a function,and returns a boolean whether the function returns true for all cases or false for one false case
_.every = function(collection, func){
    //created counterT and countF and assigned both to 0
    let counterT = 0;
    let counterF = 0;
    
    //if func is a function,run if code block ,else run else code block
    if(typeof func === "function"){
    
        //calling each,putting in collection, and creating a function that uses the values from each
        _.each(collection,(element, index, collection) => {
            //if func returns true,increment counterT
            if(func(element, index, collection)){
                //increment counterT
                counterT++;
            }
            //if func return false,increment counterF
            else counterF++;
        })
        //if counterF is equal to 0, return true, else false
        if(counterF === 0){
            return true;
        }
        else return false;
    }    
    else {
        //calling each,putting in collection, and creating a function that uses the values from each
        _.each(collection,(element, index, collection) =>{
            //if element is true,increment counterT
            if(element){
                counterT++;
            }
            //if element is false.increment counterF
            else counterF++;
        })
        //if counterF is equal to 0, return true, else false
        if(counterF === 0){
            return true;
        }
        else return false;    
    }
}



/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

//some function takes a collection and a function,and returns a boolean whether the function returns true for at least case or false for all cases
_.some = function(collection,func){
    
    //created counterT and countF and assigned both to 0
    let counterT = 0;
    let counterF = 0;
    
    //if func is a function,run if code block ,else run else code block
    if(typeof func === "function"){
    
        //calling each,putting in collection, and creating a function that uses the values from each
        _.each(collection,(element, index, collection) => {
            //if func returns true,increment counterT
            if(func(element, index, collection)){
                //increment counterT
                counterT++;
            }
            //if func return false,increment counterF
            else counterF++;
        })
        //if counterT greater than 0, return true, else false
        if(counterT > 0){
            return true;
        }
        else return false;
    }    
    else {
        //calling each,putting in collection, and creating a function that uses the values from each
        _.each(collection,(element, index, collection) =>{
            //if element is true,increment counterT
            if(element){
                counterT++;
            }
            //if element is false.increment counterF
            else counterF++;
        })
        //if counterT greater than 0, return true, else false
        if(counterT > 0){
            return true;
        }
        else return false;    
    }
    
}


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

//reduce function takes an array, function, and seed.reduces a list of values into a single value and returns that value
_.reduce = function(array, func, seed){
    
    //Call <function> for every element in <collection>
    _.each(array, (element, index, collection) =>{
        //if seed isn't undefined, 
        if(seed !== undefined){
            //use seed on the first iteration, and then use the return value as the previous result
            seed = func(seed, element, index);
        }
        else{
            //assign element to seed to make it not undefined
            seed = element;
            
        }
    })
    //return seed
    return seed;
}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

//extend function takes objects, and copies the properties to the first object in the order they're passed
_.extend = function(obj1, newObj){
    //loop through object arguments, and apply the callback function
    _.each(arguments, (newObj) => {
        //loop through object
        for(let key in newObj){
            //assign properties from newobject to object1
            obj1[key] = newObj[key];
        }
    })
    //return object1
    return obj1;
}


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
