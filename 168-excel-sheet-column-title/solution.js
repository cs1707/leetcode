/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var result = ''
    var r
    var char
    while (n) {
        r = n % 26
        n = Math.floor(n / 26)
        if (r === 0) {
            char = 'Z'
            n--
        } else {
            char = String.fromCharCode(64 + r)
        }
        result = char + reslut
    }
    return result
};