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

var checkSymmetric = function(root1, root2) {
    if (root1 === null || root2 === null) {
        if (root1 === root2) {
            return true;
        }
        else return false;
    }
    else if (root1.val !== root2.val) {
        return false;
    }
    else return checkSymmetric(root1.left, root2.right) && checkSymmetric(root1.right, root2.left);
}

var isSymmetric = function(root) {
    return checkSymmetric(root.left, root.right);
};

