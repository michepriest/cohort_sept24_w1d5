/* 1. Create a module that exports a function that takes a number 
as a parameter and stores it in a list. 
The list should not be accessible from outside the module. */

var list = []; 

let numList = function(num) {
  list.push(num);
};

let sortedList = function(list) {
  list.sort(sortRules);
    return list;
};

function sortRules(a, b) {
  return a-b;
  };

module.exports = {
  numList,
  list,
  sortedList
};

/* 2. Export another function that returns a version of the data list 
that is sorted in ascending order. 
The function you use to sort the data correctly 
should not be accessible from outside the module. */ 

/* 3. Implement a Node.js script that imports the functionality of your module, 
adds at least 5 different data points to the module's data list, 
and outputs the sorted list. */
