const TransactionLog = require('../src/transactionLog');
const Account = require('../src/account');
const expect = require('chai').expect;
const simple = require('simple-mock');

describe('TransactionLog', function() {
  var fakeLog; var fakeAccount;

  beforeEach(function() {
    fakeAccount = new Account;
    fakeAccount.deposit(50);
    fakeAccount.withdraw(50);
    fakeLog = new TransactionLog(fakeAccount);
  })

  describe('details', function() {
    it('initializes on empty array', function() {
      expect(fakeLog.details).to.deep.equal([])
    })
  })

  describe('formatDetails', function() {
    it('push transactionLog content to array', function() {
      fakeLog.formatDetails();
      expect(fakeLog.details).to.have.length(1);
    })

  })

})
