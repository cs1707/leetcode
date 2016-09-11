/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var result = ''
    for (var i = 0; i < s.length; i++) {
        result = s[i] + result
    }
    
    return result
};