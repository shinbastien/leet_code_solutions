/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function binaryTreePaths(root: TreeNode | null): string[] {
    let res: string[] = [];
    if (!root) return res;
    let l = binaryTreePaths(root.left);
    let r = binaryTreePaths(root.right);
    let m = l.concat(r);
    if (m.length === 0) return [root.val.toString()];
    return m.map((item) => (
        root.val.toString()+"->"+item
    ))
};

//Neater solution
// function binaryTreePaths(root: TreeNode | null): string[] {
//     const paths: string[] = [];
//
//     function dfs(node: TreeNode | null, path: string): void {
//         if (!node) {
//             return;
//         }
//         if (!node.left && !node.right) {
//             paths.push(path + node.val);
//             return;
//         }
//         dfs(node.left, path + node.val + "->");
//         dfs(node.right, path + node.val + "->");
//     }
//
//     dfs(root, "");
//     return paths;
// };