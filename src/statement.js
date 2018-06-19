class Statement {
  constructor(data) {
    this.data = data;
  }

  header() {
    return ('date \t\t|| transaction type || amount || balance')
  }

  print() {
    console.log(this.header());
    console.log(typeof this.data);
    for(var i = 0; i < this.data.details.length; i++) {
      console.log(`${this.data.details[i].date}\t||` +
                  `${this.data.details[i].type}\t\t\t||` +
                  `${this.data.details[i].amount}\t\t||` +
                  `${this.data.details[i].balance}`)
    }
  }

}
module.exports = Statement;
