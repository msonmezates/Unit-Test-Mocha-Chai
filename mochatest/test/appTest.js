const assert = require('chai').assert;
const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;

describe('App', function() {
  it('sayHello should return hello', function() {
    let result = sayHello();
    assert.equal(result, 'hello');
  });

  it('sayHello should return type string', () => {
    let result = sayHello();
    assert.typeOf(result, 'string');
  });

  it('addNumbers should be above 5', () => {
    let result = addNumbers(5, 5);
    assert.isAbove(result, 5)
  });
});
