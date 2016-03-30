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
    var len = 1
    while (parseInt(x / 10) >= 10) {
        len *= 10
    }
    
    while (x !== 0) {
        var left = ~~(x / len) // 最高位数字
        var right = x % 10 // 个位数字
        if (left !== right) {
            return false
        }
        
        x = ~~(x % len / 10) // 去除最高位和个位数字
        len /= 100
    }
    return true
};