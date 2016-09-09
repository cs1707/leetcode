/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var map = {}
    nums.forEach(function(num) {
        if (map[num]) {
            map[num]++
        } else {
            map[num] = 1
        }
    })
    for (var k in map) {
        if (map[k] === 1) {
            return +k
        }
    }
};