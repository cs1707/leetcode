/*
    思路：找到所有的回文字符串，然后找出最大的
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var max = ''
    var str
    for (var i = 0; i < s.length; i++) {
        // 奇数 abcba
        str = findPalindrome(s, i, i)
        if( str.length > max.length) {
            max = str
        }
        // 偶数 abccba
        str = findPalindrome(s, i, i + 1)
        if( str.length > max.length) {
            max = str
        }
    }
    return max
};

function findPalindrome (s, left, right) {
    while(left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
        left--
        right++
    }
    return s.substring(left + 1, right)
}