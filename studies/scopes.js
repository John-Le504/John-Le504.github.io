/* SCOPE
 * 0. In programming, scope is a space in code where variables can be used after it has been declared.
 * Generally, there are two main types of scope. There is global scope and local scope. Things declared
 * in global scope are accessible by everything, while things declared in local scope are accessible by
 * everything within that local scope.
 *
 * 1. var values will be stuck in the scope of a function, but not in the scope of a conditional
 * statement or a loop.
 *
 * 2. let and const values will be stuck in the scope of whatever code block they are in. That
 * includes functions, loops, and conditional statements.
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

// Nested Scope

/*
 * Local scopes can contain local scopes within them. In the example below, calling parent() prints
 * 2 to the console. Because the child scope is inside of the parent scope, child has access to a.
 * However, if parent wanted to access b, the console would throw a reference error because b is
 * only available in the child scope.
 */
function parent(){
    let a = 1;
    function child(){
        a = 2;
        let b = 5;
    }
    child();
    console.log(a); //prints 2
}
parent();

/*
 * When calling myFunc(z), variable z is being used from the global scope.
 * When using numZ, numZ is being used from the parameter because of local scope.
 */

let z = 10;

function myFunc(numZ){
  return numZ * 2;
}

myFunc(z);


