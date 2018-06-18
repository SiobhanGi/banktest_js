class Account {

  constructor() {
    this._balance = 0;
    this._transactionLog = [];
    this.date = new Date;

    this.transactionDailyLog = {
      date: this.formatDate(),
      debit: 0,
      credit: 0,
      balance: this._balance
    }
  }

  deposit(amount) {
    this._balance += amount;
    this.transactionDailyLog['debit'] = amount;
    this.transactionDailyLog['balance'] = this._balance;
  }

  withdraw(amount) {
    this._balance -= amount;
  }

  formatDate() {
    return (`${this.date.getDate()}-${this.date.getMonth()}-${this.date.getFullYear()}`);
  }
}

module.exports = Account;
