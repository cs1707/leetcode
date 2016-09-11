/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var zeroCount = 0
    
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeroCount++
        } else {
            nums[i - zeroCount] = nums[i]
        }
    }
    
    for (var j = zeroCount; j > 0; j--) {
        nums[nums.length - j] = 0
    }
};