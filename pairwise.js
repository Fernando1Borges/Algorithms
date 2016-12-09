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
