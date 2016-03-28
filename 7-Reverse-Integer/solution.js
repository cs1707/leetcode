/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var r = 0
    while (x !== 0) {
        r = r * 10 + x % 10
        x = ~~(x / 10)
    }
    return r
};