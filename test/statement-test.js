const Account = require('../src/account');
const sinon = require('sinon');
const expect = require('chai').expect;

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
