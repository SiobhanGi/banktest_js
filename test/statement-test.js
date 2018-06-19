const TransactionLog = require('../src/transactionLog');
const Statement = require('../src/statement');
const Account = require('../src/account');


const expect = require('chai').expect;
const simple = require('simple-mock');

describe('Statement', function() {
  var fakeStatement; var fakeLog; var fakeAccount;

  beforeEach(function() {
    fakeAccount = new Account;
    fakeLog = new TransactionLog(fakeAccount);
    fakeStatement = new Statement(fakeLog);
  });

  describe('header', function() {
    it('returns header text', function() {
      expect(fakeStatement.header()).to.equal('date || credit || debit || balance')
    })
  })
})
