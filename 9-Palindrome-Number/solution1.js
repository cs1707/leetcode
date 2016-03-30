/**
 * @param {number} x
 * @return {boolean}
 */
/*  反转数字比较是否相当
    没有考虑溢出……
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
    if (r === x) {
        return true
    }
    return false
};