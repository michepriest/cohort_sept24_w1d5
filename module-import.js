/* 3. Implement a Node.js script that imports the functionality of your module, 
adds at least 5 different data points to the module's data list, 
and outputs the sorted list. */

let storeInList = require("./creating-modules");
var testArray = [7,12,32,1,3];

// for loop used for testArray
for (let i = 0; i < testArray.length; i++) {
  storeInList.numList(testArray[i]);
};

storeInList.sortedList(storeInList.list);

console.log(storeInList.list);


