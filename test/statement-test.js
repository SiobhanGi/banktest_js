const Statement = require('../src/statement');
const sinon = require('sinon');
const expect = require('chai').expect;

describe('Statement', function() {
  var fakeStatement; var printStub;

  beforeEach(function() {
    var data = {
      details: {
        0: {type: "credit", amount: 50, date: "19-5-2018", balance: -50}
      }
    }
    fakeStatement = new Statement(data);
  });

  describe('header', function() {
    it('returns header text', function() {
      expect(fakeStatement.header()).to.equal('date \t\t|| transaction type || amount || balance')
    })
  })

  describe('print', function() {
    it('prints out data to console', function() {
      sinon.spy(console, 'log');
      expect(console.log).to.have.been.called;
    });
  })
})
