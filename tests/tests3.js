describe("Fizz Buzz tests ", function() {

var chai = require('chai');
var expect = chai.expect

var myFinder = require('../app/solution3.js');

  it("should return `Fizz` for number divisible by 3", function() {
    expect(myFinder.fizzBuzz(3)).to.be.equal('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(myFinder.fizzBuzz(5)).to.be.equal('Buzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    expect(myFinder.fizzBuzz(15)).to.be.equal('FizzBuzz');
  });

  it("should return `FizzBuzz` for 45", function() {
    expect(myFinder.fizzBuzz(45)).to.be.equal('FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    expect(myFinder.fizzBuzz(90)).to.be.equal('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    expect(myFinder.fizzBuzz(63)).to.be.equal('Fizz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(myFinder.fizzBuzz(7)).to.be.equal(7);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(myFinder.fizzBuzz(101)).to.be.equal(101);
  });
});