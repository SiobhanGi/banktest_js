const minAmount = 0;

class Account {
  constructor(log, transaction) {
    this.log = log || new Log;
    this.transaction = transaction || new Transaction();
    this._balance = 0;
  }

  deposit(amount) {
    this._balance += amount;
    this.log
        .addToDetails(this.transaction
        .addTransactionDetails('debit', amount, this._balance));
  }

  withdraw(amount) {
    if ((this._balance - amount) < minAmount) {
      throw new TypeError('Parameter is not a number!');
    } else {
      this._balance -= amount;
      this.log
        .addToDetails(this.transaction
        .addTransactionDetails('credit', amount, this._balance));
    }
  }
}

module.exports = Account;
