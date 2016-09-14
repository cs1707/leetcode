/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (haystack === needle) {
        return 0
    }
    
    if (needle.length >= haystack.length) {
        return -1
    }
    for (var i = 0; i < haystack.length; i++) {
        if (haystack.substring(i, i + needle.length) === needle) {
            return i
        }
    }
    return -1
};