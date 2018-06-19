class Log {
  constructor(account = new Account) {
    this.account = account;
    this.details = [];
  }
}

module.exports = Log;
