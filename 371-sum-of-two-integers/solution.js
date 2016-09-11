/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    var t 
    while (b) {
        t = a ^ b
        b = (a & b) << 1
        a = t
    }
    return a
};