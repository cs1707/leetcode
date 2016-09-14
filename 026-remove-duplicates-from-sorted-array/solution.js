/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            for (var j = i; j < nums.length; j++) {
                nums[j] = nums[j + 1]
            }
            i--
            nums.pop()
        }
    }
    return nums.length
};