/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var count = 0
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            a[count] = nums[i]
            count++
        }
    }
    nums.length = count + 1
    return count + 1
};