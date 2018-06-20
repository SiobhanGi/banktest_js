const Log = require('../src/log');
const expect = require('chai').expect;

describe('TransactionLog', function() {
  var log; var args;

  beforeEach(function() {
    log = new Log;
  })

  describe('details', function() {
    it('initializes as an empty array', function() {
      expect(log.details).to.deep.equal([])
      expect(log.details).to.be.empty;
    })
  })

  describe('addToDetails', function() {
    it('adds details to detail array', function(){
      args = 'argument'
      log.addToDetails(args);
      expect(log.details).to.deep.equal(["argument"])
    })
  })
})
