class Transaction  {
  constructor(type, amount, balance) {
    this.type = type;
    this.amount = amount;
    this.date = this.formatDate();
    this.balance = balance;
  }

  formatDate() {
    const date = new Date();
    return (`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`);
  }
}

module.exports = Transaction;
