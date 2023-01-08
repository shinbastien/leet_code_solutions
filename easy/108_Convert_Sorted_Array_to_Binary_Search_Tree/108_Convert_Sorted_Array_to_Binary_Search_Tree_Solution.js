/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums.length === 0) {
        return null;
    }

    var midIdx = Math.floor(nums.length/2);
    var midNode = nums[midIdx];
    var leftTree = sortedArrayToBST(nums.slice(0,midIdx));
    var rightTree = sortedArrayToBST(nums.slice(midIdx+1));

    return new TreeNode(midNode, leftTree, rightTree);

};