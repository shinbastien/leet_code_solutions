# [알고리즘 문제풀이] **111. Minimum Depth of Binary Tree**

# **111. Minimum Depth of Binary Tree**

링크: [https://leetcode.com/problems/minimum-depth-of-binary-tree/](https://leetcode.com/problems/minimum-depth-of-binary-tree/)

### 문제 파악

(어떤 문제인가)

- 주어진 이중 트리에 대해, 최소 깊이를 찾아라
-

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
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) {
        return -1;
    }  
    if (!root.left && !root.right) {
        return 1;
    }

    var leftDepth = minDepth(root.left);
    var rightDepth = minDepth(root.right);
    if (leftDepth < 0 || rightDepth < 0) {
        return Math.max(leftDepth, rightDepth)+1;
    }
    else return Math.min(leftDepth, rightDepth)+1;
};
```

(설명) 만약 null 값이면 -1을 return하고 마지막 node 면 1을 return 하도록 한다. -1인 subTree가 있다면 큰 값을 return 하도록 하고 둘 다 양수면 더 작은 것을 return 하도록 한다.

(null 인 것은 경로가 없다는 것이므로, 그쪽으로 빠지지 않게 경우 구분)

- Time Complexity: O(n) 각 node 마다 한 번씩 탐색
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유) input: [] 에 대해서 0을 return 해야 하는데 -1을 return

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 두번째 풀이

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
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) {
        return 0;
    }  
    if (!root.left && !root.right) {
        return 1;
    }

    var leftDepth = minDepth(root.left);
    var rightDepth = minDepth(root.right);
    if (leftDepth === 0 || rightDepth === 0) {
        return Math.max(leftDepth, rightDepth)+1;
    }
    else return Math.min(leftDepth, rightDepth)+1;
};
```

(설명) 위와 원리는 동일. -1을 0으로 변경

- Time Complexity:
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4974a037-b83d-468e-8a82-b07ad6fa55b8/Untitled.png)

## 좋은 풀이

```jsx
var minDepth = function(root) {
    // Base case...
    // If the subtree is empty i.e. root is NULL, return depth as 0...
    if(root == null)  return 0;
    // If the both subtrees are empty...
    if(root.left == null && root.right == null)
        return 1;
    // If the left subtree is empty, return the depth of right subtree after adding 1 to it...
    if(root.left == null)
        return 1 + minDepth(root.right);
    // If the right subtree is empty, return the depth of left subtree after adding 1 to it...
    if(root.right == null)
        return 1 + minDepth(root.left);
    // When the two child function return its depth...
    // Pick the minimum out of these two subtrees and return this value after adding 1 to it...
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;    // Adding 1 is the current node which is the parent of the two subtrees...
};
```

(설명) 나와 동일. left, right가 각각 null 인 경우를 구분했다는 것에 차이가 있다.

- Time Complexity:
- Space Complexity:

---

### 배운 것들 정리

- 재귀함수 활용