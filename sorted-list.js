/* 2. Export another function that returns a version of the data list 
that is sorted in ascending order. 
The function you use to sort the data correctly 
should not be accessible from outside the module. */ 
let storeInList = require("./creating-modules") 

let sortedList = function(list) {
  list.sort(function(a, b) {
    return a-b
    })
    return list;

  };
  console.log(sortedList([1, 6, 4, 5]));