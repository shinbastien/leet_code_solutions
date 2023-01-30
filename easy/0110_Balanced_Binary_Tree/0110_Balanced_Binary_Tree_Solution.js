/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var maxDepth = function (root) {
    if (!root) {
        return 0;
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right))+1
}

var isBalanced = function(root) {
    if (!root) {
        return true;
    }

    return isBalanced(root.left) && isBalanced(root.right) && (Math.abs(maxDepth(root.left)-maxDepth(root.right)) <= 1);
};