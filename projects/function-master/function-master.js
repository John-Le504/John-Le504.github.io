//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    let arr = []; //created empty array
    for(let key in object){ //loop through object
        arr.push(object[key]); //pushed the values into arr
    }
    return arr; //return arr
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    let arr = []; //created empty array
    let joined; //defined joined
    for(let key in object){ //loop through object
        arr.push(key); //pushed keys into arr
    }
    
    //joined the keys in arr and separated them with a space
    joined = arr.join(" "); 
    return joined; //return joined
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    let arr = []; //created empty array
    let joined; //defined joined
    for(let key in object){ //loop through object
        if(typeof(object[key]) === "string"){ //if value is a string
        arr.push(object[key]); //push the value into arr
        }    
    }    
    //join values in arr and separated them with a space
    joined = arr.join(" "); 
    return joined; //return joined
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)){ //if collection is an array
        return "array"; //return "array"
    }
    else if (collection === null){ //if collection is null
        return "neither"; //return "neither"
    }
    else if (collection instanceof Date){ //if collection is an instanceof Date
        return "neither"; //return "neither"
    }
    else if (typeof(collection)){ //if collection is an object
        return "object"; //return object
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    /* 
     * uppercases the character at index 0 and concatenates a sliced 
     * string containing every letter after the first letter
     */
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    let strArr = string.split(" "); //split the string by spaces and assign to strArr
    let finalStr = ""; //created empty string
    for(let i = 0; i < strArr.length; i++){ //loop through string
        
        /* concatenated the capitalized first letter to their sliced word, 
         * concatenated a space after the word, and assigned it to finalStr
         */
        finalStr = finalStr + strArr[i][0].toUpperCase() + strArr[i].slice(1) + " ";
    }
    //return finalStr with the last space omitted
    return finalStr.slice(0, finalStr.length - 1);
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    /* uppercased first letter of name value and concatenates the name value
     * to the remaining letters of that name.
     */
    let nameVar = object.name.charAt(0).toUpperCase() + object.name.slice(1);
    return "Welcome " + nameVar +"!"; //returns "Welcome (name)!"
    
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    /* uppercased first letter of name value and concatenates the name value
     * to the remaining letters of that name.
     */
    let nameVar = object.name.charAt(0).toUpperCase() + object.name.slice(1);
    /* uppercased first letter of species value and concatenates the species value
     * to the remaining letters of that name.
     */
    let speciesVar = object.species.charAt(0).toUpperCase() + object.species.slice(1);
    
    return nameVar + " is a " + speciesVar; //returns "(name) is a (species name)"
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    //check if object isn't empty
    if(Object.keys(object).length > 0){
    
    //check if noises array isn't empty
    if (object.noises.length > 0) {
        let str = object.noises.join(" "); //join array into a string with a space
        return str; //return str
    }
    else return "there are no noises"; //return "there are no noises"
    }
    else return "there are no noises"; //return "there are no noises"
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    
    //check if word is in string of words
    if(string.includes(word)){
        return true; //return true if word is in string of words
    }
    else return false; //return false if word is not in string of words
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    
    //push name into object's friends array
    object.friends.push(name);
    
    //return object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    
    //check if object is empty
    if (Object.keys(object).length > 0){
        
        //turned the friends array into a string
        let str = object.friends.join(" ");
        //check if name is in object's friends array
        if (str.includes(name)){
            return true; //return true
        }
        else return false; //return false
    }
    else return false; //return false
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    
   let notFriends = []; //created notFriends empty array
   
   //loop through array of people objects to find the current person in the array
   for(let i = 0; i < array.length; i++){
       //if the name of the current person object is NOT equal to name argument AND 
       //the friends array of the current person object do NOT include name argument
       if(array[i]['name'] !== name && !array[i]["friends"].includes(name)){
           //push the name of people who aren't in the name argument's friends list
           //into the notFriends array
           notFriends.push(array[i]["name"]); 
       }
   }
   
   return notFriends; //return notFriends array
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    
    object[key] = value; //updated the key in object to equal value
    return object; //return object
    
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    
    //loop through array
    for(let i = 0; i < array.length; i++){
        //loop through object
        for(let key in object){
            //if value in array equals key in object,remove it
            if(array[i] === key){
                delete object[key]; //delete key-value pair
            }
        }
    }
    
    
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    //remove duplicates from array
    let noDupSet = new Set(array);
    //convert noDupSet back to array
    let convertedArr = [...noDupSet];
    return convertedArr; //return convertedArr
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}