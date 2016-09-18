/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var result = 0
    for (var i = 0; i < s.length; i++) {
        result *= 26
        result += s[i].charCodeAt() - 64
    }
    return result
};