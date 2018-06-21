const Statement = require('../src/statement');
const sinon = require('sinon');
const sinonChai = require("sinon-chai");
const chai = require('chai')
const expect = require('chai').expect;

chai.use(sinonChai);

describe('Statement', function() {
  var fakeStatement;

  beforeEach(function() {
    var data = { log: {details: ['Transaction', {
      date: "19-5-2018",
      type: "credit",
      amount: 50,
      balance:-50}]}

    }
    fakeStatement = new Statement(data);
  });

  describe('printHeader', function() {
    it('prints out header to console', function() {
      sinon.spy(console, 'log');
      fakeStatement.printHeader();
      expect(console.log).to.have.been.called;
    });
  })

  describe('printData', function() {
    it('prints out data to console', function() {
      fakeStatement.printData();
      expect(console.log).to.have.been.called;
    })
  })
})
