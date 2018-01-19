const assert = require('chai').assert;
const app = require('../app');

//Results
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5,5);

describe('App', function() {
  describe('sayHello()', () => {
    it('sayHello should return hello', function() {
      // let result = app.sayHello();
      assert.equal(sayHelloResult, 'hello');
    });

    it('sayHello should return type string', () => {
      // let result = app.sayHello();
      assert.typeOf(sayHelloResult, 'string');
    });
  });

  describe('addNumbers()', () => {
    it('addNumbers should be above 5', () => {
      // let result = app.addNumbers(5, 5);
      assert.isAbove(addNumbersResult, 5)
    });

    it('AddNumbers should return type number', () => {
      // let result = app.addNumbers(5, 5);
      assert.typeOf(addNumbersResult, 'number');
    });
  });
});
