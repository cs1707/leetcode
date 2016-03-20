/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {}
    for(var i = 0; i < nums.length; i++) {
        if(map[nums[i]] == undefined) {
            map[target - nums[i]] = i
        } else {
            return [map[nums[i]], i]
        }
    }
};