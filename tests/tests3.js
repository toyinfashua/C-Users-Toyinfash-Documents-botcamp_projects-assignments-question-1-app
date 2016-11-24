describe("Fizz Buzz tests ", function() {

var chai = require('chai');
var expect = chai.expect

var fizzBuzz = require('../app/solution3.js');

  it("should return `Fizz` for number divisible by 3", function() {
    expect(fizzBuzz(3)).to.be('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(fizzBuzz.fizzBuzz(5)).to.be('Buzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    expect(fizzBuzz.fizzBuzz(15)).to.be('FizzBuzz');
  });

  it("should return `FizzBuzz` for 45", function() {
    expect(fizzBuzz.fizzBuzz(45)).to.be('FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    expect(fizzBuzz.fizzBuzz(90)).to.be('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    expect(fizzBuzz(63)).to.be('Fizz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz(7)).to.be(7);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz(101)).to.be(101);
  });
});