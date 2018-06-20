class Statement {
  constructor(data) {
    this.data = data;
    this.formatedData = '';
  }

  header() {
    return ('date \t\t|| transaction type || amount || balance')
  }

  printHeader() {
    console.log(this.header());
  }

  printData() {
    for(var i = 0; i < this.data.details.length; i++) {
    let transaction = this.data.details[i]
    this.formatedData += (`${transaction.date}\t||\t${transaction.type}\t\t\t||\t${transaction.amount}\t||\t${transaction.balance}\n`)
    }
    console.log(this.formatedData);
  }

}
module.exports = Statement;
