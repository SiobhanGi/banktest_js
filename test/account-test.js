const Account = require('../src/account');
const Log = require('../src/log');
const Statement = require('../src/statement');
const Transaction = require('../src/transaction');

const sinon = require('sinon');
const sinonChai = require("sinon-chai");
const chai = require('chai')
const expect = require('chai').expect;

chai.use(sinonChai);

describe('Account', function() {
  var fakeAccount; var log; var statement;

  beforeEach(function() {
    log = sinon.createStubInstance(Log);
    transaction = sinon.createStubInstance(Transaction);

    fakeAccount = new Account(log, transaction);
    var clock = sinon.useFakeTimers(new Date(2018,1,1));
  });

  describe('constructor', function() {
    it('returns object for log', function() {
      expect(fakeAccount.log).to.deep.equal({});
    })
    
    it('returns object for transaction', function() {
      expect(fakeAccount.transaction).to.deep.equal({});
    })
  })

  describe('deposit', function() {
    it('adds amount to balance', function() {
      fakeAccount.deposit(50);
      expect(fakeAccount._balance).to.equal(50);
    })
  });

  describe('withdraw', function() {
    it('withdraws amount from balance', function() {
      fakeAccount.deposit(50);
      fakeAccount.withdraw(50);
      expect(fakeAccount._balance).to.equal(0);
    })

    it('throws error if withdraw makes balance negative', function() {
      expect(() => fakeAccount.withdraw(50)).to.throw();
    })
  });

});
