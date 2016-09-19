/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    var result = []
    var start = 0
    var word = ''
    for (var i = 0; i < str.length; i++) {
        if (str[i] === ' ' || i === str.length - 1) {
            word = str.slice(start, i + 1)
        }
        if (word && word !== ' ') {
            result.push(word)
        }
    }
    var resultStr = result[0] || ''
    for (var j = 1; j < result.length; j++) {
        resultStr = result[i] + ' ' + resultStr
    }
    return resltStr
};