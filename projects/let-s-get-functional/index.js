// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-john-le");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *    // Make sure you're in the github.io folder in the terminal
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    
    //must use filter function to filter out the male customers
    //output must be a number
    return _.filter(array, (customer) => {
        //return true or false based on the argument
        //test if the customer obj has a gender property of male
        return customer.gender === "male";
    }).length;
    
    
};

var femaleCount = function(array){
   //must use reduce() to filter out the female customers
    //output must be a number
    return _.reduce(array, (counter, customerObj) => { //customerObj is the value in each index
        //if gender is female, increment counter
        if (customerObj.gender === "female"){
            //increment counter
            counter++;
        }
        //return counter
        return counter;
    }, 0); //seed is 0 because output will be different from first value in array
}

var oldestCustomer = function(array){
    //find the oldest customer's name
    //output will be a string of the customer's name
    return _.reduce(array, (currentOldestPerson, customerObj) => {
        //if the age of the currentObj is greater than the current oldest person
        if (customerObj.age > currentOldestPerson.age){
            //update the current oldest person with the new customerObj
            currentOldestPerson = customerObj;
        }
        //return the current oldest person obj
        return currentOldestPerson;
    }).name;//when returning reduce(), it'll return the name of the current oldest person obj
};

var youngestCustomer = function(array){
    //find the youngest customer's name
    //output will be a string of the customer's name
    return _.reduce(array, (currentYoungestPerson, customerObj) => {
        //if the age of the currentObj is greater than the current youngest person
        if (customerObj.age < currentYoungestPerson.age){
            //update the current youngest person with the new customerObj
            currentYoungestPerson = customerObj;
        }
        //return the current youngest person obj
        return currentYoungestPerson;
    }).name;//when returning reduce(), it'll return the name of the current youngest person obj
};

var averageBalance = function(array){
    //find the average balance of all customers
    //return a number
    
    //return the result of reduce
    return _.reduce(array, (acc, customerObj) => {
        //return acc and balance added together after converting balance to a string without the dollar sign
        return acc + parseFloat(customerObj.balance.replace(",", "").slice(1));
    //since reduce is returning a number, divide it by the length of array to get average    
    }, 0) / array.length;
};

var firstLetterCount = function(array, letter){
    //find how many customer's names begin with a given letter
    //output should be a number
    
    //use filter()
    return _.filter(array, (customerObj) => {
        //first letter of name of customerObj === letter?
        return customerObj.name[0].toUpperCase() === letter.toUpperCase();
    }).length; //.length at end of filter() to return a number
};

var friendFirstLetterCount = function(array, customer, letter){
    //find how many friends of a given customer have names that start with a given letter
    //output should be a number
    
    return _.reduce(array, (count, customerObj) => { 
        //if customer name matches current object's name
        if(customer === customerObj.name){
            //for loop through friends array in customerObj
            for(let friendObj of customerObj.friends){
              //first letter of friends in customerObj's friends list === letter?
              if(friendObj["name"].charAt(0).toUpperCase() === letter.toUpperCase()){
                  //increment count
                  count++;
              }
            }
        }
        //return count
        return count;
    }, 0);
};

var friendsCount = function(array, name){
    //Find the customers' names that have a given customer's name in their friends list
    //return an array
    
    //create empty array
    let resArr = [];

    //use each
    _.each(array, (customerObj) => {
      //for of loop through friends array in each person obj
      for(let friend of customerObj.friends){
        //if name in friends list matches name argument
        if(friend.name === name){
          //push customerObj's name into resArr;
          resArr.push(customerObj.name);
        }

      }
      //return resArr 
      return resArr;
    });
    //return resArr
    return resArr;
};

var topThreeTags = function(array){
    //Find the three most common tags among all customers' associated tags
    //return an array
    
    let tagArray = [];
    
    for (let i = 0; i < array.length; i++) {
        // concatenate the tags array from each object in the input array and assign the result to the tagArray variable
        tagArray = tagArray.concat(array[i].tags);
    }
    
    //use pluck method to iterate over all customers in data file, returning an array of arrays;
    //each sub-array contains an individual customer's tags
    //tagArray = _.pluck(array, "tags");
    
    /* using the reduce function and passing in the master tagArray and a function that takes a tagObj initialized to an empty object and each tag string,
       an object that holds a property for each tag with the key of the number of times that the tag was used*/ 
    let tagCount = _.reduce(tagArray, (tagObj, tag) => {
        //if the tag key exists on the tagObj already, increase the counter by 1
        if(tagObj[tag]){
            tagObj[tag]++;
        } else{
            //if not, create the property for the given tag and initialize the counter to 1
            tagObj[tag] = 1;
        }
        //return tagObj
        return tagObj;
    }, {});
    
    //create a new variable called countsArray and assign to it an empty array
    let countsArray = [];
    
    //loop through the tagCount object
    for(let key in tagCount){
        //push each property key:value pair to an array as subarrays
        countsArray.push([key, tagCount[key]]);
    }
    
    //sort the sub arrays by the tag count in descending order
    countsArray.sort((a, b) => {
        // the sort function will sort in descending order
        return b[1] - a[1];
    })
    
    //use the slice method to move the first 3 results to new array called topThreeArray
    let topThreeArray = countsArray.slice(0, 3);
    
    //use the map function to return only index 0, holding the tag string, and push it to a new array called topThreeWords
    let topThreeWords = _.map(topThreeArray, (arr) => {
        return arr[0];
    })
    
    //return the topThreeWords array
    return topThreeWords;
};

var genderCount = function(array){
    //create a summary of genders
    //return an object
    //use reduce()
    
    //in reduce(), if gender is male, female, or non-binary, increment respective gender value in output object
    return _.reduce(array, (finalObj, customerObj) => {
        //if gender is male
        if(customerObj.gender === "male"){
            finalObj.male++; //increment male counter
        }
        //if gender is female
        else if(customerObj.gender === "female"){
            finalObj.female++; //increment female counter
        }
        else finalObj["non-binary"]++; //increment non-binary counter
        
        return finalObj; //return the object
        
    }, {male: 0, female: 0, "non-binary": 0}) //started with an object that already has summary of genders
    
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
