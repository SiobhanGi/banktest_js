const Transaction = require('../src/transaction');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('Transaction', function() {
  var fakeTransaction;

  beforeEach(function() {
    fakeTransaction = new Transaction();
    var clock = sinon.useFakeTimers(new Date(2018,1,1));
  });

  describe('constructor', function() {
    it('returns the type of transaction', function() {
      expect(fakeTransaction.type).to.equal('');
      expect(fakeTransaction.amount).to.equal(0);
      expect(fakeTransaction.balance).to.equal(0)
    })
  })

  describe('addTransactionDetails', function() {
    it('adds args to properties', function() {
      fakeTransaction.addTransactionDetails('debit', 50, 50);
      expect(fakeTransaction.type).to.equal('debit');
      expect(fakeTransaction.amount).to.equal(50);
      expect(fakeTransaction.balance).to.equal(50);
    })
  })
})
