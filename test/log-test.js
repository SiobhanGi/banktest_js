const Log = require('../src/log');
const expect = require('chai').expect;

describe('TransactionLog', function() {
  var fakeLog;

  beforeEach(function() {
    fakeLog = new Log;
  })

  describe('details', function() {
    it('initializes as an empty array', function() {
      expect(fakeLog.details).to.deep.equal([])
    })
  })
})
