/* HOISTING
 * 0. Hoisting is when javascript pulls variable and function declarations to the top of the page
 * before running it. 
 * 
 * 1. When it comes to variables, it depends on the keyword used to declare the
 * variable because hoisting only applies to a certain one. 
 * 
 * 2. When it comes to functions, only named functions become hoisted to the top. Function 
 * expressions do not get hoisted.
 * 
 * 3. The JS interpreter is what converts our code line-by-line into 0s and 1s for the computer
 * to understand. The JS interpreter will hoist whatever code it needs to hoist before converting 
 * code.
 */
 
 // Hoisting Variables
 
/* When hoisting with var values, the declaration becomes hoisted to the top of the program. This
 * explains why the first console.log(a); prints undefined despite the variable being declared and 
 * assigned below it.
 */
console.log(a); // this prints undefined
var a = 1; 
console.log(a); // this prints 1

// let and const values are not hoisted to the top of the program. This explains why you have to 
// declare them before you do anything with them.

//console.log(myTimeZone); // this throws a reference error
//console.log(inMotion); // this throws a reference error

let myTimeZone = "U.S. Central";
const inMotion = true;

/*
 * When it comes to hoisting with let and const values, the declarations do not become hoisted to 
 * the top of the program. This explains why the console.log(); of both values a throw reference  
 * error. Changes to these values must be after their declaration.
 */
 
 // Hoisting Functions
 
 // Named functions get hoisted to the top while function expressions do not.
 
 //console.log(addition(1, 2)); //throws reference error
 //console.log(subtraction(5, 3)); //prints 2
 
 let addition = function(a, b) { //function expression
     return a + b;
 }
 
 function subtraction(a, b){ //named function
     return a - b;
 }
 
 /*
  * When trying to call addition, the console throws a reference error that tells us that addition
  * was not initialized. This shows that function expressions are not hoisted. When trying to call
  * subtraction, the console prints 2 because the definition of that function was hoisted before 
  * the code ran.
  */
  
  
  
  