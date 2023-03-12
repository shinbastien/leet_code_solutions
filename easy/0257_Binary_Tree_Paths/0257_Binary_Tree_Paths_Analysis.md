# [알고리즘 문제풀이] **257. Binary Tree Paths**

# **257. Binary Tree Paths**

링크: [https://leetcode.com/problems/binary-tree-paths/description/](https://leetcode.com/problems/binary-tree-paths/description/)

### 문제 파악

(어떤 문제인가) Binary Tree 가 주어질 때, 가능한 모든 root ⇒ leaf 경로를 담은 배열을 반환하라.

## 첫번째 풀이

```tsx
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
```

(설명) DFS 로 구현. 만약 자식이 없다면 자기 자신을 하나의 배열로 반환

- Time Complexity: O(n)
- Space Complexity: O(nlogn)

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민) 의미없는 배열의 생성이 많다.

## 두번째 풀이

```tsx
function binaryTreePaths(root: TreeNode | null): string[] {
    const paths: string[] = [];

    function dfs(node: TreeNode | null, path: string): void {
        if (!node) {
            return;
        }
        if (!node.left && !node.right) {
            paths.push(path + node.val);
            return;
        }
        dfs(node.left, path + node.val + "->");
        dfs(node.right, path + node.val + "->");
    }

    dfs(root, "");
    return paths;
}
```

(설명) paths를 공통 변수로 두어, child가 있을 때만 push 하고 left, right 각각의 helper function에는 필요한 string을 넣는다.

- Time Complexity: O(n)
- Space Complexity: O(n)

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 좋은 풀이 (Iterative)

```jsx
function binaryTreePaths(root: TreeNode | null): string[] {
  let res: string[] = [];
  if (!root) {
    return res;
  }
  const stack: [TreeNode, string][] = [[root, root.val.toString()]];
  while (stack.length) {
    const [node, path] = stack.pop()!;
    if (!node.left && !node.right) {
      res.push(path);
    }
    if (node.right) {
      stack.push([node.right, path + "->" + node.right.val]);
    }
    if (node.left) {
      stack.push([node.left, path + "->" + node.left.val]);
    }
  }
  return res;
}
```

(설명) stack에다가 자식이 나올 때마다 하나씩 넣어가면서 res에는 leaf일 때만 추가하는 방식.

- Time Complexity:
- Space Complexity:

---

### 배운 것들 정리

- helper function의 이용
- 본질은 string 값만을 유지하면 된다는 것. 배열 자체로 반환할 필요는 없다!