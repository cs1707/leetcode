/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var MAX = 2147483647 // 2 ^ 31 - 1
    var MIN = -2147483648 // 2 ^ 31
    var r = 0
    var n 
    while (x !== 0) {
        // 检查溢出
        n = x % 10
        /*
            r * 10 + n > MAX      =>     (MAX - n) / 10 < r
            r * 10 + n < MIN      =>     (MIN - n) / 10 > r
        */
        if ((MAX - n) / 10 < r || (MIN - n) / 10 > r) {
            return 0
        }
        r = r * 10 + n
        x = ~~(x / 10)
    }
    return r
};