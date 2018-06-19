class TransactionLog {
  constructor(account = new Account) {
    this.details = [];
    this.account = account;
  }

  formatDetails() {
    this.details.push(this.account.transactionDailyLog);
  }
}

module.exports = TransactionLog;
