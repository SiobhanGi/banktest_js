const minAmount = 0;

class Account {
  constructor(log, statement, transaction) {
    this.log = log || new Log;
    this.statement = statement || new Statement();
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

  print() {
    this.statement.printHeader();
    this.statement.printData();
  }
}

module.exports = Account;
