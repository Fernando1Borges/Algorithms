//Heap's algorithm works recursively get a list of all the permutations.

function heap(string) {
  var arr = string.split(''),
    permutations = [];
 console.log(809 % 2 ? 'odd' : 'even');
  function swap(a, b) {
    var tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }

  function gen(n) {
    if (n === 1) {
      permutations.push(arr.join(''));
      console.log('Added: ' + arr.join(''));
    } else {
      for (var i = 0; i != n; i++) {
        gen(n - 1);
        console.log("n: "+ n + " - i:" + i);
        console.log('Swap: ' + (n % 2 ? 0 : i) + ' and ' + (n - 1));
        console.log('Original: ' + arr);
        swap(n % 2 ? 0 : i, n - 1);
        console.log('Swapped: ' + arr);
        console.log('----------------');
      }
    }
  }

  gen(arr.length);
  return permutations;
}

heap('hey');
