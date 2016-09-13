/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var map1 = convertToMap(nums1)
    var map2 = convertToMap(nums2)
    var result = []
    for (var num in map1) {
        if (map2[num]) {
            result.push(+num)
        }
    }
    return result
};

function convertToMap(arr) {
    var map = {}
    for (var i = 0; i < arr.length; i++) {
        map[arr[i]] = true
    }
    return map
}