'use strict';

function gcd (a, b) {
    var m = Math.max(a, b);
    var n = Math.min(a, b);
    var mod = 0;
    
    while (n !== 0) {
        mod = m % n;
        m = n;
        n = mod;
    }
    
    return m;
}

module.exports = function () {
    var args = Array.prototype.slice.apply(arguments);
    return args.reduce(function (previousValue, currentValue, index, array) {
        return gcd(previousValue, currentValue);
    });
}