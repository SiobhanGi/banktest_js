let Account = require('../src/account');
let expect = require('chai').expect;
let simple = require('simple-mock');

describe('Account', function() {
  var fakeAccount;

  beforeEach(function() {
    fakeAccount = new Account();
  });

  afterEach(function() {
    simple.restore();
  })

  describe('_balance', function(){
    it('initializes with default balance of zero', function(){
      expect(fakeAccount._balance).to.equal(0);
    });
  });

  describe('_transactionLog', function(){
    it('initializes as an empty array', function() {
      expect(fakeAccount._transactionLog).to.deep.equal([]);
    })
  })

  describe('deposit', function(){
    it('adds amount to balance', function() {
      fakeAccount.deposit(50);
      expect(fakeAccount._balance).to.equal(50);
    })
  })

  describe('withdraw', function() {
    it('withdraws amount from balance', function() {
      fakeAccount.deposit(50);
      fakeAccount.withdraw(50);
      expect(fakeAccount._balance).to.equal(0);
    })
  })

  describe('formatDate', function() {
    beforeEach(function() {
      simple.mock(fakeAccount, 'formatDate');
    })

    it('returns current date', function() {
      fakeAccount.formatDate.returnWith('1-1-2018');
      expect(fakeAccount.formatDate()).to.equal('1-1-2018');
    })
  })
})
