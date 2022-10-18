# [알고리즘 문제풀이] 94. Binary Tree Inorder Traversal

# 94. Binary Tree Inorder Traversal

링크: [https://leetcode.com/problems/binary-tree-inorder-traversal/](https://leetcode.com/problems/binary-tree-inorder-traversal/)

### 문제 파악

(어떤 문제인가)

- Inorder Traversal ⇒ Binary Tree에서 다음과 같은 순서로 탐색
    - 왼쪽 subtree 확인
    - 본 노드 확인
    - 오른쪽 subtree 확인

## 첫번째 풀이

```jsx
var inorderTraversal = function(root) {
    if (root !== null) {
        return inorderTraversal(root.left).concat([root.val]).concat(inorderTraversal(root.right));
    }
    else {
        return []
    }
};
```

(설명) 재귀를 사용했다. 본 노드가 Null 인지만 확인하고, f(left) + 노드 + f(right) 을 병합해서 반환

- Time Complexity: O(n) node 수 n개 + edge 수 n-1개 ⇒ O(n)
- Space Complexity:

Runtime: 81 ms, faster than 74.77% of JavaScript online submissions for Binary Tree Inorder Traversal.
Memory Usage: 42.1 MB, less than 54.80% of JavaScript online submissions for Binary Tree Inorder Traversal

## 좋은 풀이

```jsx
function inorderTraversal(root) {
  const stack = [];
  const res = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      res.push(root.val);
      root = root.right;
    }
  }

  return res;
}
```

(설명) Iteration 이용, stack, res 두 가지 array 를 이용. 값이 있으면 root 전체를 stack 에 넣고 root은 왼쪽 하위 subtree 탐색. 값이 없으면, stack에 저장된 가장 마지막 root을 빼서 그 root의 노드값을 넣고, 오른쪽 subtree 탐색

- Time Complexity:
- Space Complexity:

---

### 배운 것들 정리

- Depth-First Traversal 복습
    - 각 노드에 작용하는 일의 횟수는 상수값.
        - 다른 노드들이 서로 노드 탐색횟수에 영향을 주지 않기 때문에 항상 O(n)