const Account = require('../src/account');
const expect = require('chai').expect;
const simple = require('simple-mock');

describe('Account', function() {
  var fakeAccount;

  // beforeEach(function() {
  //   fakeAccount = new Account();
  //   simple.stub(Log, '[]')
  //   simple.stub(fakeAccount, 'Log')
  //   simple.stub(fakeAccount, 'Log')
  // });

  describe('deposit', function() {
    it('adds amount to balance', function() {
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
