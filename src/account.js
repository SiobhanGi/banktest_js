class Account {
  constructor() {
    this.log = new Log
    this.balance = 0;
  }

  deposit(amount) {
    this.balance = this.balance += amount;
    this.log.details.push(new Transaction('debit', amount, this.balance));
  }

  withdraw(amount) {
    this.balance = this.balance -= amount;
    this.log.details.push(new Transaction('debit', amount, this.balance));
  }

  // print statement
}

module.exports = Account;
