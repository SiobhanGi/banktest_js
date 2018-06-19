const Transaction = require('../src/transaction');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('Transaction', function() {
  var fakeTransaction;

  beforeEach(function() {
    fakeTransaction = new Transaction('credit', 50, 50);
    var clock = sinon.useFakeTimers(new Date(2018,1,1));
  });

  describe('constructor', function() {
    it('returns the type of transaction', function() {
      expect(fakeTransaction.type).to.equal('credit');
      expect(fakeTransaction.amount).to.equal(50);
      expect(fakeTransaction.balance).to.equal(50)
    })
  })

  describe('formatDate', function() {
    it('returns current date', function() {
      fakeTransaction.formatDate();
      expect(fakeTransaction.date).to.equal('1-1-2018');
    })
  });
})
