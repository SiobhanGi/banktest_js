const Statement = require('../src/statement');
const sinon = require('sinon');
const sinonChai = require("sinon-chai");
const chai = require('chai')
const expect = require('chai').expect;

chai.use(sinonChai);

describe('Statement', function() {
  var fakeStatement;

  beforeEach(function() {
    var clock = sinon.useFakeTimers(new Date(2018,1,1));

    var data = { log: {details: ['Transaction', {
      date: new Date,
      type: "credit",
      amount: 50,
      balance:-50}]}

    }
    fakeStatement = new Statement(data);
    console.log(data);
  });

  describe('printHeader', function() {
    it('prints out header to console', function() {
      sinon.spy(console, 'log');
      fakeStatement.printHeader();
      expect(console.log).to.have.been.called;
    });
  })

  describe('formatDate', function() {
    it('formats a date to string', function() {
      expect(fakeStatement.formatDate(new Date)).to.equal('1-1-2018')
    })
  })

  describe('printData', function() {
    it('prints out data to console', function() {
      var stub = sinon.stub(fakeStatement, "formatDate");
      fakeStatement.printData();
      expect(console.log).to.have.been.called;
    })
  })
})
