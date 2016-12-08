
function checkCashRegister(price, cash, cid) {
  //Declare variables
  var result = ['TOTALCID', 0];
  var bills = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.10], ["QUARTER", 0.25], ["ONE", 1.00], ["FIVE", 5.00], ["TEN", 10.00], ["TWENTY", 20.00], ["ONE HUNDRED", 100.00]];
  var resultChange = [];
  var i = cid.length - 1;

  //Find total cash in drawer function
  function totalFunction(billOne, billTwo) {
    result[1] = billOne[1] + billTwo[1];
    return result;
  }

  //Check if cash in drawer is sufficient
  var change = cash - price;
  var totalCID = cid.reduce(totalFunction);

  if (totalCID[1] < change) {
    return "Insufficient Funds";
  } else if (totalCID[1] == change) {
    return "Closed";
  }
  // loop through bill amounts and add up change to give out
  while (change > 0 && i >= 0) {
    if ((change / bills[i][1] >= 1) && (cid[i][1] > 0)) {
      var output = [bills[i][0], 0];
      while ((change / bills[i][1] >= 0.99999) && (cid[i][1] > 0)) {
        cid[i][1] -= bills[i][1];
        change -= bills[i][1];
        output[1] += bills[i][1];
      }
      resultChange.push(output);
    }
      i -= 1;
  }

  //Check again if there are enough bills/coins to give full change
  if (resultChange.reduce(totalFunction)[1] < change) {
    return "Insufficient Funds";
  }

  return resultChange;
}
