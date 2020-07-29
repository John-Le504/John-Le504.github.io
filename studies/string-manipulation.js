/* STRING MANIPULATION
 * 0. Strings can be manipulated in many ways. Strings are similar to arrays when it comes to 
 * accessing them because they are also index-based. 
 */
 
 // Strings have a length property that returns the length of the string
 let name = "bob";
 console.log(name.length); //3
 
 // indexOf() returns the position of the first occurrence of a specified text in a string.
 let sentence = "I like juice";
 let position = sentence.indexOf("like"); //2
 
 // slice() extracts a part of a string and returns the extracted part in a new string
 // the method takes two parameters: start and end position, but the end isn't inclusive.
 let a = "This building is tall";
 let splitA = a.slice(5,13); //building
 
 // toUpperCase() makes the whole string uppercase
 let b = "word";
 b.toLowerCase(); //WORD
 
 // toLowerCase() makes the whole string lowercase
 let c = "John";
 c.toUpperCase(); //john
 
 // split() converts a string into an array using a parameter
 let d = "I have a cake";
 let result = d.split(" "); // ["I", "have", "a", "cake"]