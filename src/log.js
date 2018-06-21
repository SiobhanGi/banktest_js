class Log {
  constructor() {
    this.details = [];
  }

  addToDetails(args) {
    this.details.push(args);
  }
}

module.exports = Log;
