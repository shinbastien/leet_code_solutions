# [알고리즘 문제풀이] **144. Binary Tree Preorder Traversal**

# **144. Binary Tree Preorder Traversal**

링크: [https://leetcode.com/problems/binary-tree-preorder-traversal/description/](https://leetcode.com/problems/binary-tree-preorder-traversal/description/)

### 문제 파악

(어떤 문제인가)

- 주어진 binary tree 에 대해 전위 순회한 배열을 반환하라.
- 추가조건) 재귀적 해결법은 너무 쉽다. iterative 하게 할 수 있겠는가?

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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    var res = [];
    if (!root) {
        return [];
    }
    res.push(root.val);

    return res.concat(preorderTraversal(root.left)).concat(preorderTraversal(root.right))
};
```

(설명) 재귀적으로 해결. 현재 값을 넣고, 그 뒤에 왼쪽을 거쳤을 때의 배열, 오른쪽을 거쳤을 때의 배열을 차례대로 넣는다.

- Time Complexity: O(n): n개의 node를 거쳐간다.
- Space Complexity: O(n) 최대 n개만큼의 array를 생성한다.

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b5b61fc1-cbc4-4154-abd3-3b71df1cf6b5/Untitled.png)

(더 나은 풀이가 있을 수 있을지 고민)

- iterative 하게 하는 방법, 메모리를 적게 하는 방법이 있을 것이다.

## 좋은 풀이

```jsx
function preorderTraversal(root) {
  if (!root) {
    return [];
  }
  let stack = [root], result = [];
  while (stack.length) {
    let node = stack.pop();
    result.push(node.val);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  return result;
}
```

(설명) stack을 이용.  res에는 현재 stack의 값을 넣고, stack 에 자식들을 넣는다. 이때 오른쪽 것부터 push 해서 pop할때는 왼쪽이 먼저 pop되게 하는게 포인트. 그러면, 왼쪽 subtree의 자식들부터 쭉 stack에 들어갔다 나오게 되고, 이후 오른쪽 subtree가 pop되면서 오른쪽 subtree의 자식들이 stack에 들어갔다 나온다.

- Time Complexity: O(n) 똑같이 모든 node 한 번씩 왔다 간다.
- Space Complexity: stack의 길이가 최대가 될때가 최대 메모리 사용이므로, worst case는 O(n) ⇒ 한쪽으로 치우쳐져 있을 때, 일반적인 경우는 O(h) 다. 높이만큼 stack에 채워지기 때문.

---

### 배운 것들 정리

- stack을 이용한 iterative 풀이. stack이 이전 것들의 순서를 tracking 하기 좋은 방법이다.