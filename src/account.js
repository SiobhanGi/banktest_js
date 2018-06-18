class Account {
  constructor() {
    this._balance = 0;
    this._transactionLog = [];
  }

  deposit(amount) {
    this._balance += amount;
  }

  withdraw(amount) {
    this._balance -= amount;
  }
}

module.exports = Account;
