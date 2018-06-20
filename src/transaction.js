class Transaction  {
  constructor() {
    this.type = '';
    this.amount = 0;
    this.date = this.formatDate();
    this.balance = 0;
  }

  formatDate() {
    const date = new Date();
    return (`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`);
  }

  addTransactionDetails(type, amount, balance) {
    this.type = type;
    this.amount = amount;
    this.balance = balance;
  }
}

module.exports = Transaction;
