# **101. Symmetric Tree**

링크: [https://leetcode.com/problems/symmetric-tree/description/](https://leetcode.com/problems/symmetric-tree/description/)

### 문제 파악

(어떤 문제인가)

- 주어진 Binary Tree 가 대칭적인 tree인지 확인해야 한다. (가장 상위 root를 기준으로만 대칭이면 됨)

## 첫번째 풀이

```jsx
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
```

(설명)

- Time Complexity: O(n) ⇒ n개의 node 에 대해서 (n/2) 번 만큼 함수 실행
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

## 좋은 풀이

```jsx
var isSymmetric = function(root) {
    // Special case...
    if (!root)
        return true;
    // Return the function recursively...
    return isSame(root.left, root.right);
};
// A tree is called symmetric if the left subtree must be a mirror reflection of the right subtree...
var isSame = function (leftroot, rightroot) {
    // If both root nodes are null pointers, return true...
    // If exactly one of them is a null node, return false...
    // If root nodes haven't same value, return false...
    if ((!leftroot && rightroot) || (leftroot && !rightroot) || (leftroot && rightroot && leftroot.val !== rightroot.val))
        return false;
    // Return true if the values of root nodes are same and left as well as right subtrees are symmetric...
    if (leftroot && rightroot)
        return isSame(leftroot.left, rightroot.right) && isSame(leftroot.right, rightroot.left);
    return true;
```

(설명) 비슷한 원리.. 반복된 if 문을 하나로 합쳤다는 것 정도에 차이가 있다.

- Time Complexity:
- Space Complexity:

---

### 배운 것들 정리

- 끝을 알 수 없고, 반복되는 구조의 형태는 recursion을, 또한 나눠지는 단위를 기준으로 작성하면 된다.