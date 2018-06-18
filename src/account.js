class Account {

  constructor() {
    this._balance = 0;
    this._transactionLog = [];
    this.date = this.formatDate();

    this.transactionDailyLog = {
      date: this.date,
      debit: 0,
      credit: 0,
    };
  }

  deposit(amount) {
    this._balance += amount;
    this.transactionDailyLog.debit = amount;
    this.addToTransactionLog();
  }

  withdraw(amount) {
    this._balance -= amount;
    this.transactionDailyLog.credit = amount;
    this.addToTransactionLog();
  }

  addToTransactionLog() {
    this.transactionDailyLog.balance = this._balance;
    this._transactionLog.push(this.transactionDailyLog);
    this.resetTransactionDailyLog();
  }

  resetTransactionDailyLog() {
    this.transactionDailyLog.debit = 0;
    this.transactionDailyLog.credit = 0;
  }

  formatDate() {
    const date = new Date();
    return (`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`);
  }
}

module.exports = Account;
