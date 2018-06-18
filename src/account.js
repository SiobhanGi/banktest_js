class Account {
  constructor() {
    this._balance = 0;
  }

  deposit(amount) {
    this._balance += amount;
  }
}

module.exports = Account;
