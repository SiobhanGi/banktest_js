const Statement = require('../src/statement');
const sinon = require('sinon');
const sinonChai = require("sinon-chai");
const chai = require('chai')
const expect = require('chai').expect;
chai.use(sinonChai);


describe('Statement', function() {
  var fakeStatement;

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
      fakeStatement.print();
      expect(console.log).to.have.been.called;
    });
  })
})
