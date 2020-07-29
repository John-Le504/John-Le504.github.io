/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a function search that takes in an array of animals and a string 
//representing it's name
function search(list, name){
    for (var i = 0; i < list.length; i++){ //loop through animals array
        if (list[i].name === name){ //if the name in the object matches the argument name
            return list[i]; //returns the object that matches the name
        }
    }
    return null; //returns null if no animal with that name exists
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create replace function that takes animals array ,name,and replacement animal object
function replace(list, name, newAnimObj){
    for (var i = 0; i < list.length; i++){ //loop through animals array
        if (list[i].name === name){ //if the name in the object matches the argument name
            list[i] = newAnimObj; //replace the index with the replacement object
        }
    }   
}    

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create function remove with animals array and name parameters
function remove(list, name){
    for (var i = 0; i < list.length; i++){ //loop through animals array
        if (list[i].name === name){ //if the name in the object matches the argument name
            list.shift(list[i]); //if the name argument matches with the name in the object, remove it
        }
        else return;
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create function add with parameters animals array and animal object
function add(list, animObj){
    if (animObj.name.length > 0){ //checks if name length is greater than 0
        if(animObj.species.length > 0){ //checks if species length is greater than 0
            for(var i = 0; i < list.length; i++){ //loop through animals array
                if (list[i].name !== animObj.name){ //checks if the names are different
                    return list.unshift(animObj); //adds the animal object into the animals array
                }
                else return;
            }
        }
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
