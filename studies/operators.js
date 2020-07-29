/* OPERATORS:
 * 0. Operators are pieces of code that act on the data. We can use them to compare variables, do
 * math, and assign variables. 
 *
 */
 
 /*
  * There are 6 different types of operators:
  *
  * Assignment Operator
  * Arithmetic Operators
  * Comparison Operators
  * Logical Operators
  * Unary Operators
  * Ternary Operators
  */
 
 // Assignment Operator
 // =
 // The assignment operator assigns data to a variable
 let a = 0;
 let list = [];

 /* 
  * Arithmetic Operators:
  * + addition
  * - subtraction
  * * multiplication
  * / division
  * % modulo/remainder of division
  */
 
 // Arithmetic operators are used to do math. The order of operations apply to these operators.
 console.log(2 + 2 / 2); //prints 2
 console.log((10 / 2 + 4) - 7); //prints 2
 console.log((4 + 10 * 2) % 2); //prints 0
 
 /*
  * Comparison Operators:
  * > greater than
  * < less than
  * >= greater than or equal to
  * <= less than or equal to
  * === strict comparison
  * non-strict comparison
  */
 
 // Comparison operators compare two values.
 console.log(1 > 2); //false
 console.log(2 >= 2); //true
 console.log(1 === 5); //false compares the value and the value type
 console.log(2 == "2"); //true compares value
 
 /*
  * Logical Operators:
  * && AND operator - BOTH conditions must resolve true
  * || OR operator - At least one must resolve true
  * ! bang operator - flips thuthiness value
  */
 
 console.log(5 < 10 && 20 > 4); //prints true
 console.log(4 !== 0 && 30 < 1); //prints false
 console.log(7 > 1 || 5 > 4); //prints true
 
 // Using the bang operator is like using not
 console.log(!true); //prints false "not true"
 console.log(!false); //prints true "not false"
 
 // Double bang makes a value return a boolean. 
 console.log(!!1); //prints true
 console.log(!!-1); //prints true
 console.log(!!0); //prints false
 
 /*
  * Unary Operators:
  * typeof returns data type as a string
  * ! flips truthiness value
  */
  
  // The typeof operator returns the data type as a string.
  console.log(typeof 7); //prints number
  console.log(typeof "bob"); //prints string
  
  /*
   * Ternary Operator: 
   * ( ? : ) condition ? doIfTrue : doIfFalse
   */
  
  // This operator is commonly used as an if statement shortcut
  console.log(1 > 0? "bigger": "smaller"); //"bigger"
  console.log(12 > 20? "1": "2"); //"2"