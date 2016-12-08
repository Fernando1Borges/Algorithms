
var Person = function(firstAndLast) {

    firstAndLast = firstAndLast.split(' ');
  var first = firstAndLast[0];
  var last = firstAndLast[1];

    this.setFirstName = function(f) {
    first = f;
    console.log(first);
  };
    this.setLastName = function(l) {
    last = l;
  };
  this.setFullName = function(fn) {
    firstAndLast = fn.split(' ');
    first = firstAndLast[0];
    last = firstAndLast[1];
  };

  this.getFirstName = function() {
    return first;
  };
  this.getLastName = function() {
    return last;
  };
  this.getFullName = function() {
    return first + " " + last;
  };



};

var bob = new Person('Bob Ross');
// bob.getFirstName();


// bob.getFirstName()// should return "Bob".

// bob.setFirstName("Haskell");

// bob.getFullName(); //should return "Haskell Ross" after bob.setFirstName("Haskell").

// bob.getFullName();// should return "Bob Ross"
bob.setFullName("Haskell Curry");
bob.getFullName() //should return "Haskell Curry" after




// OFFICIAL SOLUTION


var Person = function(firstAndLast) {
  var fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
