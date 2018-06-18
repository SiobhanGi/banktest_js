class Account {

  constructor() {
    this._balance = 0;
    this._transactionLog = [];
    this.date = new Date;
  }

  deposit(amount) {
    this._balance += amount;
  }

  withdraw(amount) {
    this._balance -= amount;
  }

  formatDate() {
    return (`${this.date.getDate()}-${this.date.getMonth()}-${this.date.getFullYear()}`);
  }
}

module.exports = Account;
