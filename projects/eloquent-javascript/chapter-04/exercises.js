////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step = start < end ? 1 : -1) {
  
  
  
  //create resultArray
  let resultArr = [];
  
  if(start === end){
    return resultArr;
  }
  
  if(step > 0){
    //loop inclusively between start and end
    for(let i = start; i <= end; i += step){
      //push each number into an array
      resultArr.push(i);
    }
  }
  else{
    //loop inclusively between start and end
    for(let i = start; i >= end; i += step){
      //push each number into an array
      resultArr.push(i);
    }
  }
  //return array
  return resultArr;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  //make result equal 0
  let result = 0;
  //if array length is 0
  if(array.length === 0){
    //return 0
    return 0;
  }
  //loop through values of array
  for(let value of array){
    //add result  to value and assign to result
    result += value;
  }
  //return result
  return result;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  
  //if array is  empty, return empty array
  if(array.length === 0){
    return [];
  }
  //create empty array
  let resultArr = [];
  
  //loop through array and push values into another array
  array.forEach((value) => {
    //unshift value into resultArr
    resultArr.unshift(value);
  });
  //return resultArr
  return resultArr;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  //loop through half of array and avoid middle value
  for(let i = 0; i < Math.floor(array.length / 2); i++){
    //assign array value into old
    let old = array[i];
    //the value at front  of array will equal the value at the end of array
    array[i] = array[array.length - 1 - i];
    //value at the back of the array will equal the value that was in the front
    array[array.length - 1 - i] = old;
  }
  //return array
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  //make a null list 
  let list = null;
  //loop through array backwards
  for(let i = array.length - 1; i >= 0; i--){
    //makes an object that stores the value and the next list
    list = {value: array[i], rest: list};
  }
  //return  list
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  //make empty array
  let array = [];
  //loop through list
  for(let node = list; node; node = node.rest) {
    //push the value from each node into array
    array.push(node.value);
  }
  //return array
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
  //return ab object with value and list
  return {value, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {
  //if list is undefined,
  if(!list){
    //return undefined
    return undefined;
  }
  //if n is 0
  else if(n == 0){
    //return value in list
    return list.value;
  } 
  //return recursive call of nth with the rest of next object and n being decremented
  else return nth(list.rest, n - 1);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(a, b) {
  //if a and b are the same
  if (a === b){
    //return true
    return true;
  }
  //if a or b is null or not an object
  if (a == null || typeof a != "object" || b == null || typeof b != "object"){
    //return false
    return false;
  }
  //assign array of keys from a and b
  let keysA = Object.keys(a), keysB = Object.keys(b);
  //if length of keys arent the same
  if(keysA.length != keysB.length){
    //return false
    return false;
  }
  //loop through keys of keysA
  for(let key of keysA){
    //if keyB doesnt include key or values in each object arent equal
    if(!keysB.includes(key) || !deepEqual(a[key], b[key])){
      //return false
      return false;
    }
  }
  //return true
  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
