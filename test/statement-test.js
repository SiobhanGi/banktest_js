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
      details: ['Transaction', { date: "19-5-2018",
       type:"credit",
       amount: 50,
       balance:-50}]
    }
    fakeStatement = new Statement(data);
  });

  describe('header', function() {
    it('returns header text', function() {
      expect(fakeStatement.header()).to.equal('date \t\t|| transaction type || amount || balance')
    })
  })

  describe('printHeader', function() {
    it('prints out header to console', function() {
      sinon.spy(console, 'log');
      fakeStatement.printHeader();
      expect(console.log).to.have.been.called;
    });
  })

  describe('formatData', function() {
    it('saves data to string', function() {
      fakeStatement.printData();
      expect(fakeStatement.formatedData).to.equal("19-5-2018\t||credit\t\t\t||50\t||-50");
    })
  })
})
