/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var map = {}
    for (var i = 0; i < nums.length; i++) {
        var number = nums[i]
        if (map[number] == null) {
            map[number] = 0
        }
        map[number]++
        if (map[number] > nums.length / 2) {
            return number
        }
    }
};