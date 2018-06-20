const minAmount = 0;

class Account {
  constructor(log, statement) {
    this.log = log || new Log;
    this.statement = statement || new Statement();
    this._balance = 0;
  }

  deposit(amount) {
    this._balance += amount;
    this.log.addToDetails(new Transaction('debit', amount, this._balance));
  }

  withdraw(amount) {
    if ((this._balance - amount) <= minAmount) {
      throw 'Parameter is not a number!';
    } else {
      this._balance -= amount;
      this.log.addToDetails(new Transaction('credit', amount, this._balance));
    }
  }

  print() {
    this.statement.printHeader();
    this.statement.printData();
  }
}

module.exports = Account;
