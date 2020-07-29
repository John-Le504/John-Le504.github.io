// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    };
    

};


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        
        // we implemented the length api for you //
        length: function() {
            return contacts.length; //returns the length of the contact-list
        },
        
        // takes a contact object to be added to the contact-list
        addContact: function(contact){
            return contacts.push(contact); //adds a contact object to contact-list
            
        },
        
        // takes a full name string and returns the contact object if found in contact-list, or return undefined if not found
        findContact: function(fullName){
            
            //loop through contact-list 
            for (var i = 0; i < contacts.length; i++){
              if (fullName === contacts[i].nameFirst + " " + contacts[i].nameLast){ //test if nameFirst and nameLast match the fullName
                return contacts[i]; //return the object if it matches
              }
              else return undefined; //return undefined if it doesn't match
              
            }
             
        },
        
        //removes a contact object and removes it from the contacts-list
        removeContact: function(contact){
            
            // loop through the contact-list
            for (var i = 0; i < contacts.length; i++){
              if (contacts[i] === contact){ //check if the objects match
                contacts.splice(i,1) //splice the index from the array
              }
            }
        },
        
        //returns a string format with all full-names in a separated way
        printAllContactNames: function(){
        
        //created empty string
        var nameList = "";
        
        //loop through contact-list 
        for (var i = 0; i < contacts.length; i++){
        
            //concatenates nameFirst,a space,nameLast, and a newline character into nameList
            nameList += contacts[i].nameFirst + " " + contacts[i].nameLast + "\n"

        }

        //return a sliced nameList that slices the last \n
        return nameList.slice(0, nameList.length-1);
            
            
          
        }
    }
}



// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
