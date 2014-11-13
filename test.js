var assert = require('assert');
var gcd = require('./lib/gcd.js');

describe('GCD', function () {
    it('The greatest common divisor of 0 and 2 is 2', function () {
        assert.equal(2, gcd(0, 2));
    });
    
    it('The greatest common divisor of 8 and 12 is 4', function () {
        assert.equal(4, gcd(8, 12));
    });
    
    it('The greatest common divisor of of 3 and 2 is 1', function () {
        assert.equal(1, gcd(3, 2));
    });
    
    it('The greatest common divisor of of 24 and 18 is 6', function () {
        assert.equal(6, gcd(24, 18));
    });
    
    it('The greatest common divisor of 1, 2 and 3 is 1', function () {
        assert.equal(1, gcd(1, 2, 3));
    });
    
    it('The greatest common divisor of 12, 15 and 21 is 3', function () {
        assert.equal(3, gcd(12, 15, 21));
    });
});