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
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions.type[i] === 'deposit') {
      balance += this.transactions.amount[i];
    } else if (this.transactions.type[i] === 'withdrawal') {
      balance -= this.transactions.amount[i];
    }
  }
  return balance;
};
