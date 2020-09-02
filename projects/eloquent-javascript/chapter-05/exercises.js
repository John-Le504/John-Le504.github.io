// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  
  //reduce array and get into each index to concat subarrays together and return that
  return array.reduce((finalArr, currentArr) => {
    //concatenate the subarrays together to get a final array and return that
    return finalArr.concat(currentArr);
  })
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(val, testFunc, updateFunc, bodyFunc) {
  
  //takes: value, test function, update function, body function
  
  //for loop with paramters plugged into functions
  for(let i = val; testFunc(i); i = updateFunc(i)){
    //call bodyFunc with i
    bodyFunc(i);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, predFunc) {
  
  //use some on array and use the predFunc to check if each element returns true or false.
  //if true, return false. if false, return true.
  return !array.some(element => !predFunc(element));
  
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
  //use countBy to count the characters that belong to each script
  let counted = countBy(text, char => {
    //use characterScript to check a character's script and assign it to script
    let script = characterScript(char.codePointAt(0));
    //if script is defined, return the script's direction and return it, else return none
    return script ? script.direction : "none";
  })
  //filter counted to filter out if counted is none
  .filter(({name}) => name != "none");
  //if counted's length is 0
  if(counted.length == 0){
    //return left to right
    return "ltr";
  }
  //reduce counted
  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
