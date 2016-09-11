/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var sum1 = 0
    var sum2 = 0
    for (var i = 0; i < s.length; i++) {
        sum1 += s[i].charCodeAt()
    }
    
    for (var j = 0; j < t.length; j++) {
        sum2 += t[j].charCodeAt()
    }
    
    return String.fromCharCode(sum2 - sum1)
};