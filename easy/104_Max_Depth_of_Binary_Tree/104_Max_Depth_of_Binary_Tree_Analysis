# 104. **Maximum Depth of Binary Tree**

링크: [https://leetcode.com/problems/maximum-depth-of-binary-tree/description/](https://leetcode.com/problems/maximum-depth-of-binary-tree/description/)

### 문제 파악

(어떤 문제인가)

- binary tree의 최대 깊이를 찾아내라 ⇒ 가장 하단에 있는 자식의 깊이를 찾아내라

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

var maxDepth = function(root) {
    if (!root) return 0;
    else if (root.left || root.right) {
            return Math.max(maxDepth(root.left), maxDepth(root.right))+1;
    }
    else return 1; 
};
```

(설명)

- Time Complexity: O(n) 각 node 에 대해서 maxDepth 를 실행해야 하기 때문.
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 좋은 풀이

```jsx
var maxDepth = function(root) {
    let depth = 0
    depthTraverse(root)
    function depthTraverse(root,nodeDepth = 1){
         if (!root){
            return
        }
        
        if (nodeDepth>depth){
            depth=nodeDepth
        }
      
        
        depthTraverse(root.left,nodeDepth+1)
        depthTraverse(root.right,nodeDepth+1)
    }
    
    return depth
    
};
```

(설명) helper function을 써서 조금 더 직관적으로 둔 것 같다. 함수의 실행 횟수 자체는 동일한 것으로 이해.

- Time Complexity: O(n)
- Space Complexity:

---

### 배운 것들 정리

- 재귀함수