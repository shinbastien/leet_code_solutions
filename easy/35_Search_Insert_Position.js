/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.length == 1) {
        if (nums[0] < target)
            return 1
        else
            return 0
    }
    else {
        if (target <= nums[0])
            return 0
        else if (target > nums[-1])
            return nums.length+1
        else
            return searchInsert(nums.slice(0, (nums.length / 2).toFixed()), target) + searchInsert(nums.slice((nums.length / 2).toFixed()), target)
    }
};