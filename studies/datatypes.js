/*
 * DATA TYPES:
 * 0: We store data in variables, but there are different types of data. There are primitive and 
 * complex data types. Primitive data types cannot be altered, but complex data types can. Primitive
 * data is passed by copy while complex data is passed by reference.
 *
 */
 
 // Primitive Data Types
 
 let one = "string";    //string
 let two = 2;           //number
 let three = true;      //boolean
 let four = undefined;  //undefined
 let five = null;       //null
 let six = NaN;         //Not a Number
 let seven = Infinity;  //Infinity
 
 //Primitive data have a fixed size in memory, and operations on them return new values of the same type.
 let characterOne = "Spongebob";
 let characterTwo = "Patrick";
 let bestDuo = characterOne + " and " + characterTwo;
 console.log(bestDuo); //prints "Spongebob and Patrick"
 
 //primitive data is copied by value. 
 let x = 1;
 let y = x; //the value stored in x is COPIED into y
 
 y = 5; //changing the value in y DOES NOT CHANGE the value in x
 
 //Complex Data Types
 
 let compOne = [];             //array  
 let compTwo = {};             //object
 let compThree = function(){}; //function
 
 /*
  * Arrays are used to store a list of things. Things can be pushed into an array or taken out at any time.
  * Arrays have specific methods and properties that we can use to manipulatea/receive information. An 
  * important thing to remember is that arrays are 0-indexed meaning that they start counting from 0 instead
  * of 1.
  *
  */
 compOne = [1, "two", true, null, NaN];
 compOne.push(20);            //adds 20 to the end of the array
 compOne.shift();             //removes the first value in the array
 console.log(compOne.length); //prints the number of indexes in the array starting from 1.
 
 /*
  * Objects are used to store properties for something. These properties can be added and removed at any time.
  * Objects must have key-value pairs.
  *
  */
 compTwo = {
   name: "bob",
   favColor: "red",
   family: true,
   kids: 3
 }
 
 /* 
  * Functions are used to to manipulate variables and/or return data. They can be declared in a variable, a function, 
  * and a global scope. Functions can have parameters and require arguments to fill in the parameters. They can also 
  * have no parameters. 
  *
  */
 compThree = function(a, b){
  return a + b;
 }
 console.log(compThree); //prints the result of a + b
 
 //function declaration
 function anotherFunc(){
  console.log("this is another function");
  
 };
 console.log(anotherFunc()); //prints "this is another function"
 
 //complex data is copied by reference
 let buildingOne = {
  color: "red",
  height: "tall"
 };
 let buildingTwo = buildingOne; //buildingTwo is referencing buildingOne
 buildingTwo.foundation = true; //added key-value pair foundation: true to buildingTwo and buildingOne
 console.log(buildingOne.foundation); //prints true