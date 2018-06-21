class Statement {
  constructor(data) {
    this.data = data;
    this.formatedData = '';
  }

  formatDate() {
    const date = new Date();
    return (`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`);
  }

  printHeader() {
    console.log('date \t\t|| transaction type || amount || balance');
  }

  printData() {
    for(var i = 0; i < this.data.log.details.length; i++) {
    let transaction = this.data.log.details[i];
    this.formatedData += (`${transaction.date}\t||\t${transaction.type}\t\t\t||\t${transaction.amount}\t||\t${transaction.balance}\n`)
    }
    console.log(this.formatedData);
  }

}
module.exports = Statement;
