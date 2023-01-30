/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var index = 0;
    var cursor = 0;
    while (index < m+n) {
        var item = nums2[cursor];
        if (nums1[index] > item || index >= m+cursor) {
            nums1.splice(index, 0, item);
            nums1.pop();
            cursor++;
            continue;
        }
        index++;
    }
};