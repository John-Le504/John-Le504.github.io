
/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// var, let, and const variables //
var myNumber = 0;

let myBoolean = true;

const myHeight = "short";

/*
 * These values seem to do the same thing, but there are 3 properties that define the behavior 
 * of them.
 */

// Reassignability //
var hasCar = false;
hasCar = true; // this works

let myTime = 0;
myTime = 3; // this works

const myFullName = "Gordan Freeman";
//myFullName = "Batman"; // this will not work and it might throw a read-only error


/*
 * Scope
 *
 * In programming, scope is a space in code where values can be used after it has been declared.
 * 
 * var values will be stuck in the scope of a function, but not in the scope of a conditional
 * statement or a loop.
 *
 * let and const values will be stuck in the scope of whatever code block they are in. That
 * includes functions, loops, and conditionalstatements.
 * 
 */
 
if (true){
    var powerLevel = 0;
    let batteryLevel = 0;
    const damage = true;
}
console.log(powerLevel);
//console.log(batteryLevel); //throws a reference error
//console.log(damage); //throws a reference error

// powerLevel IS accessible outside of code block
// batteryLevel IS NOT accessible outside of code block
// damage IS NOT accessible outside of code block

for (let i = 0; i < 5; i++){
    var space = false;
    let number = 100;
    const data = true;
}
console.log(space);
//console.log(number); //throws a reference error
//console.log(data); //throws a reference error

// space IS accessible outside of code block
// number IS NOT accessible outside of code block
// data IS NOT accessible outside of code block

function myFunction(){
    var pie = "delicious";
    let apple = null;
    const far = 1000;
}
//console.log(pie); //throws a reference error
//console.log(apple); //throws a reference error
//console.log(far); //throws a reference error
    
// pie IS NOT accessible outside of code block
// apple IS NOT accessible outside of code block
// far IS NOT accessible outside of code block

/* Hoisting
 * 
 * When hoisting with var values, the declaration becomes hoisted to the top of the program. This
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
 * When hoisting with let and const values, the declarations do not become hoisted to the top of
 * the program. This explains why the console.log(); of both values a throw reference error. 
 * Changes to these values must be after their declaration.
 */





