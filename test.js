var assert = require('assert');
var gcd = require('./lib/gcd.js').gcd;

describe('GCD', function () {
    it('2', function () {
        assert.equal(2, gcd(0, 2));
    });
    
    it('4', function () {
        assert.equal(4, gcd(8, 12));
    });
    
    it('1', function () {
        assert.equal(1, gcd(3, 2));
    });
    
    it('6', function () {
        assert.equal(6, gcd(24, 18));
    });
});