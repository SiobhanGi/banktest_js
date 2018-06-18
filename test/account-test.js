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

  describe('_transactionLog', function(){
    it('initializes as an empty array', function() {
      expect(fakeAccount._transactionLog).to.deep.equal([]);
    })
  })

  describe('transactionDailyLog', function() {
    beforeEach(function() {
      simple.mock(fakeAccount, 'formatDate');
    })
    // issue with this scope
    // it('.date initializes with todays date', function () {
    //   fakeAccount.formatDate.returnWith('1-1-2018');
    //   expect(fakeAccount.transactionDailyLog.date).to.equal('1-1-2018');
    // });

    it('.debit initializes with 0', function() {
      expect(fakeAccount.transactionDailyLog.debit).to.equal(0);
    })

    it('prop credit initializes with 0', function() {
      expect(fakeAccount.transactionDailyLog.credit).to.equal(0);
    })
    // issue with this scope
    // it('prop balance initializes with 0', function() {
    //   expect(fakeAccount.transactionDailyLog.balance.to.equal(0));
    // })
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

  describe('addToTransactionLog', function(){
    it('pushes daily log to transaction log', function() {
      fakeAccount.deposit(50);
      expect(fakeAccount._transactionLog).to.have.length(1);
    })

    it('pushes daily log to transaction log twice', function() {
      fakeAccount.deposit(50);
      fakeAccount.deposit(50);
      expect(fakeAccount._transactionLog).to.have.length(2);
    })
  })

  describe('resetDailyTransactionLog', function() {
    it('resets daily log credit to 0', function() {
      fakeAccount.withdraw(50);
      fakeAccount.resetTransactionDailyLog();
      expect(fakeAccount.transactionDailyLog.credit).to.equal(0)

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
