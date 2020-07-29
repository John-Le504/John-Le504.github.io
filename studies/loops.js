/* LOOPS
 * 0. Loops allow code to execute as many times as needed. They are generally used
 * to go through collections of data. This is useful because it'll allow programmers
 * to pull and manipulate specific values in the collection. Loops need index 
 * initialization, condition statement, and index incrementation. Infinite loops can
 * happen if the index doesn't increment/decrement, or the condition always resolves
 * true or false.
 */
 
 
 //for loop
let arr = [1, 2, 3]; 
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
 // prints:
 // 1
 // 2
 // 3
 
 //while loop
 let myArr = [2, 4, 6, 8];
 let i = myArr.length;
 while (i > 0){
    console.log(myArr[i]);
    i--;
 }
 // prints:
 // 8
 // 6
 // 4
 // 2
 
 /*
  * for in loop
  * This loop can search through an object by using it's keys to get the values paired
  * with the keys. While looping over objects, we must use array-syntax to use the key
  * to access the object's values.
  */
 
 let bob= {
    favColor: "red",
    favFood: "fries"
 };
 
 for (let key in bob){
    console.log(bob[key]);
 }
 // prints:
 // red
 // fries