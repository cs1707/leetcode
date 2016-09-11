/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var sum1 = 0
    var sum2 = 0
    for (var i = 0; i < s.length; i++) {
        sum1 += s[i].charCodeat()
    }
    for (var i = 0; i < t.length; i++) {
        sum1 += t[i].charCodeat()
    }
    return String.fromCharCode(sum2 - sum1)
};