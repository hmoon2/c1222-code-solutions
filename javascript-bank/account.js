/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var newDeposit = new Transaction('deposit', amount);
    this.transactions.push(newDeposit);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var newWithdrawal = new Transaction('withdrawal', amount);
    this.transactions.push(newWithdrawal);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var balance = 0;
  if (Account.deposit) {
    balance += this.transactions;
  } else if (Account.withdraw) {
    balance -= this.transactions;
  }
  return balance;
};
