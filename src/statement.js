class Statement {
  constructor(log = new TransactionLog) {
    this.log = log;
  }

  header() {
    return ('date || credit || debit || balance')
  }

}
module.exports = Statement;
