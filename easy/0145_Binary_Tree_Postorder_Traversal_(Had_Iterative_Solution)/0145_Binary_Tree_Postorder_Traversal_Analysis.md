# **145. Binary Tree Postorder Traversal**

링크: [https://leetcode.com/problems/binary-tree-postorder-traversal/description/](https://leetcode.com/problems/binary-tree-postorder-traversal/description/)

### 문제 파악

(어떤 문제인가)

- 주어진 binary tree 에 대해서 postorder traversal (후위 선회)한 배열을 반환해라
- 추가조건) Recursive solution은 간단하니, iterative 하게 해결할 수 있겠는가?

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
var postorderTraversal = function(root) {
    if (!root){
        return [];
    } 
    var res = [root.val];

    return postorderTraversal(root.left).concat(postorderTraversal(root.right), res);
};
```

(설명) 재귀로… 해결..

- Time Complexity: O(n) 각 node 한 번씩 순회
- Space Complexity: O(n) 1개짜리 배열이 n개 O(n)

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/351ee72f-02be-4e74-a974-a03676a8eae7/Untitled.png)

(더 나은 풀이가 있을 수 있을지 고민)

- iterative 하게 하려고 이전 Preorder와 같이 stack을 이용하려 했으나, 잘 안됐다.

## 좋은 풀이

```jsx
function postorderTraversal(root) {
    let result = [], stack = [], curr = root;
    while (curr || stack.length) {
        if (curr) {
            result.unshift(curr.val);
            stack.push(curr);
            curr = curr.right;
        } else {
            curr = stack.pop().left;
        }
    }
    return result;
}
```

(설명) iterative method. 위에서 시작해, 오른쪽부터 배열에 앞쪽에 넣기 시작한다(배열의 끝부터 채워넣는 것). 만약 오른쪽 child가 없다면 stack.pop() 하면 부모가 나오기에, 왼쪽 자식을 cur로 해서 다시 배열에 넣는다.

- 왼쪽 아래부터 결과에 나와야하는 것이기 때문에, 오른쪽 위부터 배열 끝에 넣어서 거꾸로 접근하는 것이 포인트!!
- Time Complexity: O(n)
- Space Complexity: O(n)

---

### 배운 것들 정리

- Iterative Method using Stack