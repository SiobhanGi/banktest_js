const Account = require('../src/account');
const Log = require('../src/log');

const sinon = require('sinon');
const sinonChai = require("sinon-chai");
const chai = require('chai')
const expect = require('chai').expect;

chai.use(sinonChai);

describe('Account', function() {
  var fakeAccount; var log;

  beforeEach(function() {
    log = sinon.spy(Log, 'details');
    fakeAccount = new Account(log);
    var clock = sinon.useFakeTimers(new Date(2018,1,1));
  });

  describe('deposit', function() {
    it('adds amount to balance', function() {
      fakeAccount.deposit(50);
      expect(fakeAccount._balance).to.equal(50);
      expect(fakeAccount.log.detail[0].type).to.equal('debit');
      expect(fakeAccount.log.detail[0].amount).to.equal(50);
      expect(fakeAccount.log.detail[0].date).to.equal('1-1-2018');
      expect(fakeAccount.log.detail[0].balance).to.equal(50);
    })
  });

  describe('withdraw', function() {
    it('withdraws amount from balance', function() {
      fakeAccount.withdraw(50);
      expect(fakeAccount._balance).to.equal(-50);
      expect(fakeAccount.log.detail[0].type).to.equal('credit');
      expect(fakeAccount.log.detail[0].amount).to.equal(50);
      expect(fakeAccount.log.detail[0].date).to.equal('1-1-2018');
      expect(fakeAccount.log.detail[0].balance).to.equal(-50);
    })
  });

  describe('print', function() {
    it('prints out statement to console', function() {
      sinon.spy(console, 'log');
      fakeAccount.print();
      expect(console.log).to.have.been.calledTwice;
    })
  })

});
