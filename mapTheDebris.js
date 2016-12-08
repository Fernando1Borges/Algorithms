
function orbitalPeriod(arr) {
  const GM = 398600.4418,
        EARTH_RADIUS = 6367.4447;


  function calculateOrbitalPeriod(item) {
    item.orbitalPeriod = orbitalP; // create orbital period property

    var r = EARTH_RADIUS + item.avgAlt; // calculate orbit's semi-major axis
    var orbitalP = 2 * Math.PI * Math.sqrt((Math.pow(r, 3)) / GM); // calculate orbital period
    orbitalP = Math.round(orbitalP); // round orbital period
    item.orbitalPeriod = orbitalP; // add orbital period property to object
    delete item.avgAlt; // remove average altitude property
  }

  arr.forEach(calculateOrbitalPeriod);

  return arr;
}

//orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

//should return [{name: "sputnik", orbitalPeriod: 86400}].

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])
// should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].



//Official solution

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var a = 2 * Math.PI;
  var newArr = [];
  var getOrbPeriod = function(obj) {
    var c = Math.pow(earthRadius + obj.avgAlt, 3);
    var b = Math.sqrt(c / GM);
    var orbPeriod = Math.round(a * b);
    delete obj.avgAlt;
    obj.orbitalPeriod = orbPeriod;
    return obj;
  };

  for (var elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]));
  }

  return newArr;
}

// test here
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
