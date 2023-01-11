# 112. Path Sum

링크: [https://leetcode.com/problems/path-sum/description/](https://leetcode.com/problems/path-sum/description/)

### 문제 파악

(어떤 문제인가)

- 이진 트리와 목표 합이 주어졌을 때, 목표 합을 구성하는 트리의 root→leaf 까지의 경로가 있는지 확인하라

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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) {
        return false;
    }
    else if (targetSum - root.val === 0) {
        return true;
    }
    return hasPathSum(root.left, targetSum-root.val) || hasPathSum(root.right, targetSum-root.val)
};
```

(설명) 재귀 함수를 사용하여, root 값이 null이면 false를, 목표 합에서root의 값을 뺀 값이 0이 되면 true를 return 하게 했다. 아니라면, 아래 child 에 대해서 동일하게 실행. child에서 true 가 나오면 위까지 올라와서 true를 반환

- Time Complexity:  각 node 마다 한 번씩 돌아야 하기 때문에 O(n)
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유)

root: [1,2], targetSum: 1 에 대해서 틀렸다. (Output: true, Expected: False)

마지막 leaf 인지를 확인하지 않고 빼서 0이 되기만 하면 true 라고 했기 때문

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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) {
        return false;
    }
    else if (targetSum - root.val === 0 && root.right === null && root.left === null) {
        return true;
    }
    return hasPathSum(root.left, targetSum-root.val) || hasPathSum(root.right, targetSum-root.val)
};
```

(설명) leaf 인지 확인하는 조건문을 추가했다. (좌우 child가 모두 null인지 확인)

- Time Complexity: 동일하게 O(n)
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0e4ef8e2-c208-4122-aa91-7b22a1f7d006/Untitled.png)

## 좋은 풀이

```jsx
const hasPathSum = (root, targetSum) => {
    // DFS
    // Relatively easy to understand
    if(!root) return false; // Base case if we DFS all the way to the end, but dont find an answer
    
    // Condition if true
    // Since we substract the node value from the targetSum as we DFS
    // If we get to a node with no left or right AND the node.val === targetSum, we found an answer
	// Because if node.val === targetSum, that means if we subtract the two, it is 0
    if(!root.left && !root.right && targetSum === root.val) return true;
    
    // We just need to find 1, so if either side returns true, it is true
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};
```

(설명) 동일하다.

- Time Complexity:
- Space Complexity:

---

### 배운 것들 정리

- 재귀함수