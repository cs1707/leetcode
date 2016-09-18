/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var m1 = genCharCodeMap(s)
    var m2 = genCharCodeMap(t)
    for (var key in m1) {
        if (m1[key] !== m2[key]) {
            return false
        }
    }
    for (var key in m2) {
        if (m1[key] !== m2[key]) {
            return false
        }
    }
    return true
};

function genCharCodeMap(str) {
    var map = {}
    var i = 0
    
    while (i < str.length) {
        var charCode = str[i].charCodeAt()
        var char
        if (charCode >= 0xD800 && charCode <= 0xDBFF) {
            char = str[i] + str[i + 1]
            i++
        } else {
            char = str[i]
        }
        if (map[char] == null) {
            map[char] = 0
        }
        map[char]++
        i++
    }
    return map
    
}