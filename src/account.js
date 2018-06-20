class Account {
  constructor() {
    this.log = new Log;
    this._balance = 0;
  }

  deposit(amount) {
    this._balance = this._balance += amount;
    this.log.details.push(new Transaction('debit', amount, this._balance));
  }

  withdraw(amount) {
    const minAmount = 0;
    if((this._balance + amount) >= minAmount) {
      this._balance = this._balance -= amount;
      this.log.details.push(new Transaction('credit', amount, this._balance));
    } else {
      throw "Parameter is not a number!";
    }
  }

  print() {
    var statement = new Statement(this.log)
    statement.printHeader();
    statement.printData();
  }
}

module.exports = Account;
