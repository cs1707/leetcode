/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// mergesort
var findMedianSortedArrays = function(nums1, nums2) {
    var result = []
    var i = 0
    var j = 0
    while (i < nums1.length && j < nums2.length) {
        if(nums1[i] < nums2[j]) {
            result.push(nums1[i])
            i++
        } else {
            result.push(nums2[j])
            j++
        }
    }
    
    while (i < nums1.length) {
        result.push(nums1[i])
        i++
    }
    while (j < nums2.length) {
        result.push(nums2[j])
        j++
    }
    
    var mid = Math.floor(result.length / 2)
    if(result.length % 2 === 0) {
        return (result[mid - 1] + result[mid]) / 2
    } else {
        return result[mid]
    }
};