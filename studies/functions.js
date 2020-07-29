/* FUNCTIONS
 * 0. Functions allow us to section off a block of code that will only be able to run
 * if we call the function, and we are able to call function as many time we want.
 *
 * 1. To create a function, we use the keyword, function, followed by a name for the function
 * with a parenthesis after it, and we assign it to curly braces.
 *
 * 2. To call a function, we use the function name with curly braces.
 */
 
 function myFunc(){
    console.log("The function ran!");
 };
 
 myFunc(); //prints: The function ran!
 
 /*
  * Within the parenthesis of a function, we can add parameters the function can use to run the
  * block of code within it. When calling a function, we can add in arguments to be the placeholders
  * of the parameters.
  */
  
  function add(a, b){
     return a + b;
  };
  
  add(3,8); //returns 11
  
  /*
   * Functions can be named, assigned to variable, or anonymous. The above examples are examples
   * of named functions.
   */
  
  // Function assigned to a variable.
  
  // Functions can see and modify variables in global and parent scope. The other way around isn't true
  let result = sub(20, 6);
  console.log(result); //prints: 14
  
  function sub(a, b){
     return a - b;
  }
  
  // Anonymous function
  let multiply = function(a, b) {return a * b};
  multiply(2, 5); //returns 10
  
  // Closures
  // Closures are functions with preserved data. Functions can access variables inside and outside
  // of it's scope.
  let a = 5;
  function funcOne(){
  return a * a;
  }
  
  console.log(funcOne()); //returns 25
  
  function funcTwo(){
  let b = 2;
  return b * b;
  }

  console.log(funcTwo()); //returns 4