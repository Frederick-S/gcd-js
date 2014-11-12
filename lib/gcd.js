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

module.exports.gcd = gcd;