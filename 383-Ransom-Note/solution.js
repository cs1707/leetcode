/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var map1 = countChar(ransomNote) 
    var map2 = countChar(magazine)
    
    for (var key in map1) {
        if (!map2[key] || map2[key] < map1[key]) {
            return false
        }
    }
    return true
};

function countChar(str) {
    var map = {}
    for (var i = 0; i < str.length; i++) {
       var char = str[i]
       map[char] = map[char] && map[char] + 1 || 1
    }
    return map
}