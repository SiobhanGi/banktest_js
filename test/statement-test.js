const Account = require('../src/account');
const Statement = require('../src/statement');

const expect = require('chai').expect;
const simple = require('simple-mock');

describe('Statement', function() {
  var fakeAccount;
  var fakeStatement;

  beforeEach(function() {
    fakeAccount = new Account();
    fakeAccount.deposit(50);
    fakeAccount.withdraw(10);
    fakeStatement = new Statement();
  });

  describe('header', function() {
    it('returns header text', function() {
      expect(fakeStatement.header()).to.equal('date || credit || debit || balance')
    })
  })


})
