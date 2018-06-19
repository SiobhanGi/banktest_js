const Transaction = require('../src/transaction');
const expect = require('chai').expect;
const simple = require('simple-mock');

describe('Transaction', function() {
  var fakeTransaction;

  beforeEach(function() {
    fakeTransaction = new Transaction();
  });

  afterEach(function() {
    simple.restore();
  });

  describe('formatDate', function() {
    beforeEach(function() {
      simple.stub(fakeTransaction, 'formatDate');
    })

    it('returns current date', function() {
      fakeTransaction.formatDate().returnWith('1-1-2018');
      expect(fakeTransaction.date).to.equal('1-1-2018');
    })
  });

})
