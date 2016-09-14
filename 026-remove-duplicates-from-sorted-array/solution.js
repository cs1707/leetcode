/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var j = 0
    for (var i = 1; i < nums.length; i++) {
        if (nums[j] !== nums[i]) {
            j++
            nums[j] = nums[i]
        }
    }
    nums.length = j + 1
    return nums.length
};