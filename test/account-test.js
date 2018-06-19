const Account = require('../src/account');
const Transaction = require('../src/transaction');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('Account', function() {
  var fakeAccount; var fakeLog;

  beforeEach(function() {
    fakeLog = new Log;
    fakeAccount = new Account();

  });

  describe('deposit', function() {
    it('adds amount to balance', function() {
      fakeAccount = new Account;
      fakeAccount.deposit(50);
      expect(fakeAccount.balance).to.equal(50);
      // expect(fakeAccount.log).to.equal('debit');
    })
  });

  describe('withdraw', function() {
    it('withdraws amount from balance', function() {
      fakeAccount.withdraw(50);
      expect(fakeAccount.balance).to.equal(-50);
      expect(fakeAccount.transaction.type).to.equal('credit');
    })
  });
});
