const Transaction = require('../src/transaction');
const expect = require('chai').expect;
const simple = require('simple-mock');

describe('Transaction', function() {
  var fakeTransaction;

  beforeEach(function() {
    fakeTransaction = new Transaction();
  });

  // afterEach(function() {
  //   simple.restore();
  // });

  describe('addTransaction', function() {
    it('sets props based if transaction type is credit', function() {
      fakeTransaction.addTransaction('credit', 50)
        expect(fakeTransaction.type).to.equal('credit');
        expect(fakeTransaction.amount).to.equal(50);
        expect(fakeTransaction.balance).to.equal(-50);
    });

    it('sets props based if transaction type is debit', function() {
      fakeTransaction.addTransaction('debit', 50)
        expect(fakeTransaction.type).to.equal('debit');
        expect(fakeTransaction.amount).to.equal(50);
        expect(fakeTransaction.balance).to.equal(50);
    });

    it('returns message if invalid transaction type', function() {
        expect(fakeTransaction.addTransaction('nil', 50)).to.equal('invalid transaction type');
    });
  });

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
