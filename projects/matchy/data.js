/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {}; //created animal object
animal.species = "dog"; //added key-value pair species: "dog"
animal["name"] = "Lucky"; //added key-value pair name: "lucky"
animal.noises = []; //added key-value pair noises: []

console.log(animal); //prints the animal object to the console

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = []; //created an empty noises array

noises[0] = "warf"; //assigned "warf" to the first index
noises.push("whimper"); //pushed "whimper" to the end of the noises array
noises.unshift("WOOF"); //unshifted "WOOF" to the front of the noises array
noises[noises.length] = "zzz"; //assigned "zzz" to the end of the noises array

console.log(noises.length); //prints the length of the noises array
console.log(noises.length-1); //prints the last index of the noises array
console.log(noises); //prints the  whole noises array

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal["noises"] = noises;
noises.push("wassup");
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *    
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = []; //created empty animals array
animals.push(animal); //pushed animal object into animals array
console.log(animals);  //prints the animal array

//created duck object
var duck = {
    species: "duck",
    name: "Jerome",
    noises: ["quack", "honk", "sneeze", "woosh"]
};
animals.push(duck); //pushed duck object into animals array

console.log(animals); //prints animals array to console

//created alligator object
var alligator = {
    species: "alligator",
    name: "Mator",
    noises: ["HISSS","MAH"]
};
animals.push(alligator); //pushed alligator object into animals array

//created cat object
var cat = {
    species: "cat",
    name: "Gerald",
    noises: ["meow","purrrr"]
};
animals.push(cat); //pushed cat object into animals array

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I chose to use an array because it will hold a collection of all the names of the friends
var friends = []; //created empty array friends

/*created getRandom function that takes an array and returns a random 
integer that is no bigger than the length of the array */
function getRandom(array){
    return Math.floor(Math.random() * array.length);  
}

var randomIndex = getRandom(animals);//  stored the random index in a variable

var randomAnimalObject = animals[randomIndex]; //retrieve random animal object from animals array using randomIndex
var randomAnimalName = randomAnimalObject.name; //store the animal name in a variable

friends.push(randomAnimalName); //push the animal name in the friends array

animals[0].friends = []; // gave the first animal in the animals array a key-value pair "friends" that is an empty array


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}

