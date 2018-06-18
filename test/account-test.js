let Account = require('../src/account');
let expect = require('chai').expect

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
})
