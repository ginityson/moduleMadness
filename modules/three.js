var one = require('./one');
var two = require('./two');

var balance = {
  comboDollar: function comboDollar() {
    var result = two(one(100, 1000000));
    return result;
  },
  textAccount: function anything() {
    return "Account balance: \n";
  }
}


module.exports = balance;
