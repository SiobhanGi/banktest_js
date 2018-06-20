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
    this.formatedData += (`${this.data.details[i].date}\t||` +
                   `${this.data.details[i].type}\t\t\t||` +
                   `${this.data.details[i].amount}\t||` +
                   `${this.data.details[i].balance}`)
    }
    console.log(this.formatedData);
  }

}
module.exports = Statement;
