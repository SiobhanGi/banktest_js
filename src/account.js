class Account {
  constructor(log, statement) {
    this.log = new Log();
    this.statement = new Statement();
    this._balance = 0;
  }

  deposit(amount) {
    this._balance += amount;
    this.log.details.push(new Transaction('debit', amount, this._balance));
  }

  withdraw(amount) {
    const minAmount = 0;
    if ((this._balance + amount) >= minAmount) {
      this._balance -= amount;
      this.log.details.push(new Transaction('credit', amount, this._balance));
    } else {
      throw 'Parameter is not a number!';
    }
  }

  print() {
    this.statement.printHeader();
    this.statement.printData();
  }
}

module.exports = Account;
