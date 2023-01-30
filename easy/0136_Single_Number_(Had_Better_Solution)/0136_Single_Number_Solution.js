/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var set = new Set(nums);
    var a = 0;
    set.forEach(item => a += item);
    var b = nums.reduce((prev, curr) => prev+curr, 0);

    return 2*a - b;
};