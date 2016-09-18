/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var map = {}
    for (var i = 0; i < nums.length; i++) {
        var num = nums[i]
        if (map[num] == null) {
            map[num] = 0   
        }
        map[num]++
        if (map[num] > 1) {
            return true
        }
    }
    return false
};