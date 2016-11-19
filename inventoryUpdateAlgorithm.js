// Competed 11/18/16
// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.


function updateInventory(arr1, arr2) {
    var found = false;
    // add items from arr2 to arr1
    arr1.forEach(function (item, index) {
      arr2.forEach(function (item2, index2) {
        if (item[1] == item2[1]) {
          item[0] += item2[0];
        }
      });
    });

    //check if any new items are found in arr2 and add them to arr1
    arr2.forEach(function (item2, index2) {
      found = false;
      arr1.forEach(function(item, index) {

        if (item2[1] == item[1]) {
          found = true;
        }
        if (index == arr1.length - 1 && !found) {
          arr1.push(item2);
          found = false;
        }
      });
    });

    // check if arr1 is empty and if yes concat arr2
       if (arr1.length === 0) {
      arr1 = arr1.concat(arr2);
    }

    // alphabetically bubble sort arr1
    for (var j = 0; j < arr1.length; j++) {
      for (var i = 1; i < arr1.length; i++) {
        if (arr1[i - 1][1] > arr1[i][1]) {
          var temp = arr1[i - 1];
          arr1[i - 1] = arr1[i];
          arr1[i] = temp;
        }
      }
    }

    return arr1;
}

//test case

updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])

//should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].







// OFFICIAL SOLUTION BY QUINCEY LARSON

function updateInventory(arr1, arr2) {

    // Variable for location of product
    var index;

    // A helper method to return the index of a specified product (undefined if not found)
    var getProductIndex = function (name) {
        for (var i = 0; i < this.length; i++) {
            if (this[i][1] === name) {
                return i;
            }
        }
        return undefined;
    }

    // For each item of the new Inventory
    for (var i = 0; i < arr2.length; i++) {

        // Invoke our helper function using arr1 as this
        index = getProductIndex.call(arr1, arr2[i][1]);

        // If the item doesn't exist
        if (index === undefined) {
            // Push the entire item
            arr1.push(arr2[i]);
        } else {
            // Add the new quantity of the current item
            arr1[index][0] += arr2[i][0];
        }

    }

    // Sort alphabetically, by the product name of each item
    arr1.sort(function (a, b) {
        if (a[1] > b[1]) {
            return 1;
        }
        if (a[1] < b[1]) {
            return -1;
        }
        return 0;
    });

    return arr1;
}

// test here
// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
