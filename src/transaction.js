class Transaction  {
  constructor() {
    this.type; this.amount, this.balance;
    this.date = this.formatDate();
  }

  addTransaction(type, amount) {
    if (type === 'credit') {
      this.balance = 0 - amount;
    } else if (type === 'debit') {
      this.balance = amount;
    } else {
      return 'invalid transaction type'
    }
    this.type = type;
    this.amount = amount;
  }

  formatDate() {
    const date = new Date();
    return (`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`);
  }

  addToLog() {
    var log = new Log;
    log.push(this.date , this.type, this.amount, this.balance);
  }
}

module.exports = Transaction;
