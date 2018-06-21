class Transaction  {
  constructor() {
    this.type = '';
    this.amount = 0;
    this.date = new Date;
    this.balance = 0;
  }

  addTransactionDetails(type, amount, balance) {
    this.type = type;
    this.amount = amount;
    this.balance = balance;
  }
}

module.exports = Transaction;
