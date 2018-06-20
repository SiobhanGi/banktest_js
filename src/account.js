class Account {
  constructor() {
    this.log = new Log;
    this.statement = new Log;
    this.balance = 0;
  }

  deposit(amount) {
    this.balance = this.balance += amount;
    this.log.details.push(new Transaction('debit', amount, this.balance));
  }

  withdraw(amount) {
    this.balance = this.balance -= amount;
    this.log.details.push(new Transaction('credit', amount, this.balance));
  }

  print() {
    var statement = new Statement(this.log)
    statement.printHeader();
    statement.printData();
  }
}

module.exports = Account;
