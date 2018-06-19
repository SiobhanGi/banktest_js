const Transaction = require('../src/transaction');
const expect = require('chai').expect;
const simple = require('simple-mock');

describe('Transaction', function() {
  var fakeTransaction;

  beforeEach(function() {
    fakeTransaction = new Transaction('credit', 50, 50);
  });

  describe('constructor', function() {
    it('returns the type of transaction', function() {
      expect(fakeTransaction.type).to.equal('credit');
      expect(fakeTransaction.amount).to.equal(50);
      expect(fakeTransaction.balance).to.equal(50)
    })
  })

  // afterEach(function() {
  //   simple.restore();
  // });

  // describe('formatDate', function() {
  //   beforeEach(function() {
  //     simple.mock(fakeTransaction, formatDate());
  //   })
  //
  //   it('returns current date', function() {
  //     fakeTransaction.formatDate().returnWith('1-1-2018');
  //     expect(fakeTransaction.date).to.equal('19-5-2018');
  //   })
  // });

})
