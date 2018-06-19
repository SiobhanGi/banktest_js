class Account {
  constructor() {
    this.transaction = new Transaction();
  }

  deposit(amount) {
    this.transaction.addTransaction('debit', amount);
  }

  withdraw(amount) {
    this.transaction.addTransaction('credit', amount);
  }

  // print statement
}

module.exports = Account;
