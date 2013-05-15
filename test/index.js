var accessor = 'undefined' == typeof window
  ? require('..')
  : require('tower-accessor'); // how to do this better?

var assert = require('assert');

describe('accessor', function(){
  it('should test', function(){
    assert.equal(1 + 1, 2);
  });
});
