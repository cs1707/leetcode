/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }
    var r = 0
    var y = x
    while (y !== 0) {
        r = r * 10 + y % 10
        y = parseInt(y / 10)
    }
    if (r === y) {
        return true
    }
    return false
};