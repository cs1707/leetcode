/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var map = {}
    for (var i = 0; i < s.length; i++) {
        if (map[s[i]] == null) {
            map[s[i]] = {
                i: i,
                count: 0
            }
        }
        map[s[i]].count++
    }
    var i = s.length
    for (var key in map) {
        var item = map[key]
        if (item.count === 1) {
            i = Math.min(i, item.i)
        }
    }
    if (i === s.length) {
        return -1
    }
    return i
};