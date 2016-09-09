/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var arr = []
    for (var i = 0; i < s.length; i++) {
        arr.unshift(s[i])
    }
    
    return arr.join('')
};