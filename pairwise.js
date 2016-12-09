// Free Code Camp Advanced Algorithms Scripting

function pairwise(arr, arg) {
  var indices = [];

  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = (i + 1); j < arr.length; j++) {
      if (arg == arr[i] + arr[j]&& indices.indexOf(i) < 0 && indices.indexOf(j) < 0) {
        indices.push(i);
        indices.push(j);
      }
    }
  }
  indices = indices.reduce(function(a, b) {
    return a + b;
  }, 0)
  return indices;
}

// Test cases
// pairwise([1, 4, 2, 3, 0, 5], 7) should return 11.
// pairwise([1, 3, 2, 4], 4) should return 1.
// pairwise([1, 1, 1], 2) should return 1.
// pairwise([0, 0, 0, 0, 1, 1], 1) should return 10.
// pairwise([], 100) should return 0.



// Official Advanced Code Solution

function pairwise(arr, arg) {
  // search array for elements that when paired, equal the second argument, then sum their indices
  // make a local copy of the arguments object so we don't modify it directly
  var pairArr = arr.slice();
  return pairArr.reduce( function (a,b,index){ // use native reduce to collect running total of summed indices
      var search = arg - b; // get difference of current item so we know what value will sum to arg

      // check if search value in rest of the array, but also make sure it doesn't match current search index
      if ( pairArr.indexOf(search) != -1 && pairArr.indexOf(search) != index ){
         var total = index + pairArr.indexOf(search);  // if found, add to the runnning total
         pairArr.splice(index,1,NaN); // remove current index from the array
         pairArr.splice(pairArr.indexOf(search),1,NaN); // remove the other matched element from the array
         return a + total; //return the running total back to reduce for next item
      }
      return a; // simply return previous total if no operations needed
  },0);

}

// test here
pairwise([1,4,2,3,0,5], 7);

// Official Basic Code Solution

function pairwise(arr, arg) {
 // Set sum of indices to zero
 var sum = 0;
 // make a local copy of the arguments object so we don't modify it directly
 var pairArr = arr.slice();
 // looping from first element
 for(i = 0; i < pairArr.length; i++) {
   //Looping from second element by setting first element  constant
   for(j = i + 1; j < pairArr.length; j++) {
     // Check whether the sum is equal to arg
     if(pairArr[i] + pairArr[j] == arg) {
       //Add the indices
       sum += i + j;
       //Set the indices to NaN so that they can't be used in next iteration
       pairArr[i] = pairArr[j] = NaN;
     }
   }
 }
 return sum;
}

// test here
pairwise([1,4,2,3,0,5], 7);
