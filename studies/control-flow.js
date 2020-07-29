/* CONTROL FLOW
 * 0. Control flow in code dictates what code does when a statement returns a certain boolean
 * value. if, else-if, else, and switch statements are used to control whether blocks of code
 * run or not.
 */
 
 /*
  * if statement
  * if statements dictate whether a block of code run or not by testing if the condition in the
  * stament resolves true or false.
  */
 
 let a = 1;
 let b = 2;
 if (a < b){
    console.log("it's true"); //prints it's true
 }
 
 /*
  * if else statement
  * if else statements are slightly different because the else code will run if the condition in
  * the if statement is false, but the else statement won't run if the if condition is true.
  */
 let c = 5;
 let d = 10;
 if (c > d){
    console.log("print me"); //skips this block
 }
 else console.log("no, print me!"); //prints no, print me!
 
 /*
  * if else-if else statement
  * This makes the if statement a long line of code that will only run if the condition statement
  * respective to it's position return true.
  */
  let e = 7;
  let f = 3;
  let g = 0;
  if (f > e){
    console.log("sam"); //skips this block
  }
  else if (g > f){
    console.log("bob"); //skips this block
  }
  else console.log("alex"); //prints alex
  
  /*
   * switch statement
   * switch statements check and see if the input expression matches the value to a case clause and executes
   * code that is associated with that case. 
   */
   
   let theName = "John";
   switch (theName){
       
       case "Mark":
           console.log("It's Mark!");
           break;
       case "Alex":
           console.log("It's Alex!");
           break;
       default:
           console.log("The name doesn't match"); //prints The name doesn't match
   }