const minAmount = 0;

class Account {
  constructor(log, transaction) {
    this.log = log || new Log;
    this.transaction = transaction || new Transaction();
    this._balance = minAmount;
  }

  deposit(amount) {
    this._balance += amount;
    this.transaction.addTransactionDetails('debit', amount, this._balance)
    this.log.addToDetails(this.transaction);
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
