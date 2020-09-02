// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  //base case
  //if n is a negative number, return null
  if(n < 0){
    //return null
    return null;
  }
  //if n is 1 or 0, return 1
  else if(n === 1 || n === 0){
    //return 1
    return 1;
  }
  
  //recursive case
  //return n times the next iteration of factorial that's less than n
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  //base case
  //if the array is empty, return 0
  if(array.length === 0){
    //return 0
    return 0;
  }
  //if array.length is 1, return the first value in array
  else if(array.length === 1){
    //return the first value in array
    return array[0];
  }
  
  //recursive case
  //return the first value in array + calling sum with the first index sliced off
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) {

  //base case
  //if n is negative, return the absolute value of the negative number
  if(n < 0){
    //assign the absolute value of the negative number to n
    n = Math.abs(n);
  }
  //if n is equal to 1, return false
  if(n === 1){
    return false
  }
  //if n is equal to 0, return true
  if(n === 0){
    //return true
    return true;
  }
  
  //recursive case
  //return recursive case with n subtracted by 2
  return isEven(n - 2);
  
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  //base case 
  // if integer === 0, return 0
  if(n === 0) return 0;
  
  //recursive case
  //if number is greater than 0, subtract 1 from value, then decrement until value is 0 
  if(n > 0){
    //recursive case
    //return n decrementing by 1 and add that to the recursive call of sumBelow with n decrementing by one
    return n - 1 + sumBelow(n - 1);
  }
  //if number is less than 0, add 1 to value, then increment until value is 0. 
  if(n < 0){
    //recursive case
    //return n incrementing by 1 and add that to the recursive call of sumBelow with n incrementing by one
    return n + 1 + sumBelow(n + 1);
  }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y){ //ask phi--------------------
 //base case
 //if x is greater than y
 if(x > y){
    //if numbers will not have a range between them
    if(x - y <= 1){
      //return empty array
      return [];
    }
    //if there is one more number in range left
    if(x - y === 2){
      //return that number in an array
      return [y + 1];
    }
    
    //recursive case
    //assign recursive call with y + 1 to list
    var list = range(x, y + 1);
    //push the next number in range to list
    list.push(y + 1);
    //return list
    return list;
    
  }
  //base case
  //if x is less than y
  else{
    //if numbers will not have a range between them
    if(y - x <= 1){
      //return empty array
      return [];
    }
    //if there is one more number in range left
    if(y - x === 2){
      //return an array containing that number
      return [x + 1];
    }
    
    //recursive case
    //assign recursive call with y - 1
    var list = range(x, y - 1);
    //push next number in range to list
    list.push(y - 1);
    //return list
    return list;
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {

  //base case
  //if exp is 0
  if(exp === 0){
    //return 1
    return 1;
  }
  
  //recursive case
  //if exp is positive
  if(exp > 0){
    //return the base multiplied by the recursive call of exponent with exp subtracted by 1
    return base * exponent(base, exp - 1);
  }
  //if exp is negative
  if(exp < 0){
    //return 1 divided by the recursive call of exponent with -exp
    return 1 / exponent(base, -exp);
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  //assign n divided by 2 to test
  let test = n / 2;
  
  //base case
  //if test is equal to 0
  if(test === 0){
    //return false
    return false;
  }
  //if n is equal to 1
  if(n === 1){
    //return true
    return true;
  }
  //if test is equal to 2
  if(test === 2){
    //return true
    return true;
  }
  
  //recursive case
  //return recursive call with test as argument
  return powerOfTwo(test);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  
  //base case
  //if string length is equal to 1
  if(string.length === 1){
    //return remaining letter
    return string[0];
  }
  
  //recursive case
  //return recursive call that takes off first letter of string and 
  //concatenates it to first letter in string
  return reverse(string.slice(1)) + string[0];
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  //lowercase and take out spaces in string
  string = string.toLowerCase().replace(" ", "");

  //base case
  //if string length is 1
  if(string.length < 1){
    //return true
    return true;
  }
  //if first and last letter don't match
  else if(string[0] !== string[string.length - 1]){
    //return false
    return false;
  }
  
  //recursive case
  //return recursive call of palindrome with the first letter sliced off
  return palindrome(string.slice(1, string.length - 1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
 
  if(x === 0 || y === 0){
    
    return 0;
  }
  
  else if(x < 0){
    
    return -multiply(-x, y);
  }
  
  else if(y < 0){
    
    return -multiply(x, -y);
  }
  else
  
  return x + multiply(x, y - 1);
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  
  //base case
  //if first letter of each string doesnt match,return false
  if(str1[0] !== str2[0]){
    //return false
    return false;
  }
  //if string length is 0
  else if(str1.length === 0 && str2.length === 0){
    //return true
    return true;
  }
  
  //recursive case
  //call recursive compare str with first letter of both strings sliced off
  return compareStr(str1.slice(1), str2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  
  //base case
  //if str.length is 0
  if(str.length === 0){
    //return empty array
    return [];
  }
  
  //recursive case
  //assign the recursive call of createArray that slices the whole string 
  let result = createArray(str.slice(1,str.length));
  //unshifts each letter to the front of the array
  result.unshift(str[0]);
  //return result
  return result;
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  
  //base case
  //if length of array equals 0, return wmpty array
  if(array.length === 0){
    //return empty array
    return [];
  }
  
  //recursive case
  //assign the recursive call of reverseArr that slices the first value in array
  let result = reverseArr(array.slice(1))
  //push the first value in array to result
  result.push(array[0]);
  //return result
  return result;
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  
  //base case
  //if length equals 0
  if(length === 0){
    //return empty array
    return [];
  }
  
  //recursive case
  //assign recursive call of buildListwith length decrementing
  let result = buildList(value, length - 1);
  //push value into result
  result.push(value);
  //return result
  return result;
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  
  //base case
  //if array length equal 0, return empty array
  if(array.length === 0){
    return [];
  }
  
  //recursive case
  //asssign the recursive call of countOccurrence to result. slice off the first value in array
  let result = countOccurrence(array.slice(1), value)
  //if value matches value in array
  if(array[0] === value){
    //increment result
    result++;
  }
  //return result
  return result;
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  //base case
  //if array length is 0
  if(array.length < 1){
    //retuyrn empty array
    return [];
  }
  
  //recursive case
  //assign result to recursive call of rMap. slice offirst value of array
  let result = rMap(array.slice(1), callback);
  //put the first value in array into front of result array
  result.unshift(callback(array[0])); 
  //return result
  return result;
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  //base case
   if(n == 0){
    //return 0
    return 0;
  }
  //base case
  if(n == 1){
    //return 1
    return 1;
  }
  //base case
  if(n < 0){
    //return null
    return null;
  }
  
  //recursive case
  //return the next fibonacci number + the one after that one
  return nthFibo(n-1) + nthFibo(n-2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(arrOfWords) {
  
  //base case
  //if arrOfWords length is 0
  if(arrOfWords.length === 0){
    //return empty array
    return [];
  }
  
  //recursive case
  //assign recursive call of capitalizeWords. slice first value of arrOfWords
  let result = capitalizeWords(arrOfWords.slice(1));
  //unshift the capitalized first word in arrOfWords into result array
  result.unshift(arrOfWords[0].toUpperCase());
  //return result
  return result;
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  
  //base case
  //if array length is 0
  if(array.length === 0){
    //return empty array
    return [];
  }
  
  //recursive case 
  //assign recursive call of capitalizeFirst. slice off first value of array
  let result = capitalizeFirst(array.slice(1));
  //unshift the word with first letter capitalized into front of result array
  result.unshift(array[0][0].toUpperCase() + array[0].slice(1));
  //return result array
  return result;
  
  
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
  
  //create currentChar and assign it to the last letter of str
  let currentChar = str[str.length - 1];
  
  //base case
  //if the length of the string is 0
  if(str.length === 0){
    //return empty object
    return {};
  }
  
  //recursive call
  //assign object to recursive call of letterTally. slice the last letter in str
  obj = letterTally(str.slice(0, str.length - 1));
  
  //if the character key exists
  if(obj[currentChar] !== undefined){
    //increment the number value
    obj[currentChar]++;
  }
  //if the character key doesnt exist
  else{
    //create key:value pair and assign the value to 1
    obj[currentChar] = 1; 
  }
  //return obj
  return obj;
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  //base case
  //if length is 0
  if(list.length < 1){
    //return list
    return list;
  }
  
  //recursive call
  //if first value and value next to it are the same
  if(list[0] === list[1] ){
    //return the recursive call of compress with the first value sliced off
    return compress(list.slice(1));
  }
  //if not the same
  else{
    //return the first value concatenated to recursive call of compress and slice first value of list
    return [list[0]].concat(compress(list.slice(1)));
  }
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  //base case
  //if array length is 0
  if(array.length < 1){
    //return empty array
    return [];
  }
  
  //recursive case
  //if the first and second numbers are 0
  if(array[0] === 0 && array[1] === 0) {
    //return the recursive call of minimizeZeros with the first value sliced off
    return minimizeZeroes(array.slice(1));
  }
  //if not
  else{
    // return array of the first value and concatenate it to the recursive call of minimizeZeros with the first value sliced off
    return [array[0]].concat(minimizeZeroes(array.slice(1)));
  }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  
  //base case
  //if length of array is 0
  if(array.length === 0){
    //return array
    return array;
  }
  //if value  is negative
  if(array[0] < 0){
    //convert the value to positive
    array[0] = -array[0];
  }
  //if the next value is positive
  if(array[1] > 0){
    //convert the value to negative
    array[1] = -array[1];
  }
  
  //recursive case
  //converts the first two values of the array and concatenates them to the recursive call
  //that slices off the first two indexes of the array
  return [array[0], array[1]].concat(alternateSign(array.slice(2)));
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {

   var objNum =
  {
    0:'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8:'eight',
    9:'nine'
  }
 

  if (str.length === 0)
  {
    return '';

  }

  if(objNum[str[0]]) 
  {

      return objNum[str[0]] + numToText(str.substring(1)); 

  }

  return str[0] + numToText(str.substring(1));
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
