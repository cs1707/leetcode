/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    var result = []
    var word = ''
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            word += str[i]
        }
        if (str[i] === ' ' || i === str.length - 1){
            if (word) {
                result.unshift(word)
            }
            
            word = ''
        }
    }
    return result.join(' ')
};