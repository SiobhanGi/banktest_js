let Account = require('../src/account');
let expect = require('chai').expect;
let simple = require('simple-mock');

describe('Account', function() {
  var fakeAccount;

  before(function() {
    fakeAccount = new Account();
  });

  describe('_balance', function(){
    it('initializes with default balance of zero', function(){
      expect(fakeAccount._balance).to.equal(0);
    });
  });

  describe('showBalance', function() {
    it('shows the current balance of the account', function() {
      expect(fakeAccount.showBalance()).to.equal(0);
    })
  })
})
