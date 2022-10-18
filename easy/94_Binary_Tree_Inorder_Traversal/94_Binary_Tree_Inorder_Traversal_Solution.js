var inorderTraversal = function(root) {
    if (root !== null) {
        return inorderTraversal(root.left).concat([root.val]).concat(inorderTraversal(root.right));
    }
    else {
        return []
    }
};