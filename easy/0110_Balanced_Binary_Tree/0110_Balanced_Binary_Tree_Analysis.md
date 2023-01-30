# [알고리즘 문제풀이] **110. Balanced Binary Tree**

# **110. Balanced Binary Tree**

링크: [https://leetcode.com/problems/balanced-binary-tree/](https://leetcode.com/problems/balanced-binary-tree/)

### 문제 파악

(어떤 문제인가)

- 주어진 binary tree 가 height-balanced 한 지 판단해라
  - height balanced: 좌우 subTree도 모두 height balanced 하고, 좌우 subTree 간 depth 가 최대 1 차이 나는 tree

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

var maxDepth = function (root) {
    if (!root) {
        return 0;
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right))+1
}

var isBalanced = function(root) {
    if (!root) {
        return true;
    }
    return isBalanced(root.left) && isBalanced(root.right) && (Math.abs(maxDepth(root.left)-maxDepth(root.right) <= 1));
};
```

(설명) 왼쪽, 오른쪽 subTree가 각각 balanced 인지, 이후에 왼쪽의 최대 깊이와 오른쪽의 최대 깊이를 비교해서 전체 트리의 balance 여부를 재귀적으로 판단한다.

- Time Complexity:
- Space Complexity:

### (실패했다면? 틀린 이유)

input: [1,null,2,null,3]

output: false 여야 하는데 true 를 return 했다.

한쪽으로만 child 가 난 경우인데, 이때는 left 는 0, right 는 2다.

⇒ 알고 보니.. 괄호를 올바르게 치지 않았다. 결국 boolean 값 0, 1에 대해 Math.abs 를 돌린 것이기 때문에 적절하지 않았음

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
 * @return {boolean}
 */

var maxDepth = function (root) {
    if (!root) {
        return 0;
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right))+1
}

var isBalanced = function(root) {
    if (!root) {
        return true;
    }

    return isBalanced(root.left) && isBalanced(root.right) && (Math.abs(maxDepth(root.left)-maxDepth(root.right)) <= 1);
};
```

(설명) 위와 동일

- Time Complexity: O(3n) = isBalanced에서 한 번씩 확인 + maxDepth 를 각 node 마다 2번씩 실행하므로 O(3n)
- Space Complexity:

### (성공했다면? 결과)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/18e5b901-9ced-4524-b165-9b17636c42ce/Untitled.png)

## 좋은 풀이

```jsx
var isBalanced = function(root) {
    // If the tree is empty, we can say it’s balanced...
    if (root == null)  return true;
    // Height Function will return -1, when it’s an unbalanced tree...
	if (Height(root) == -1)  return false;
	return true;
}
// Create a function to return the “height” of a current subtree using recursion...
var Height = function(root) {
    // Base case...
	if (root == null)  return 0;
    // Height of left subtree...
	let leftHeight = Height(root.left);
    // Height of height subtree...
	let rightHight = Height(root.right);
    // In case of left subtree or right subtree unbalanced, return -1...
	if (leftHeight == -1 || rightHight == -1)  return -1;
    // If their heights differ by more than ‘1’, return -1...
    if (Math.abs(leftHeight - rightHight) > 1)  return -1;
    // Otherwise, return the height of this subtree as max(leftHeight, rightHight) + 1...
	return Math.max(leftHeight, rightHight) + 1;
};
```

(설명) 깊이와 함께 subTree의 balance 판단까지 한 번에 진행한다는 점에서 내 풀이보다 효과적이다. Height function은 node 마다 한 번씩만 실행되기 때문에, O(n)의 복잡도를 가진다.

subTree의 좌 우 depth 판단 후 만약 unbalanced 라면 -1을 return하게 하고, subTree의 height 가 -1 이면 root 도 height 는 -1 ⇒ false

- Time Complexity: O(n)
- Space Complexity:

---

### 배운 것들 정리

- 효율적인 재귀 ⇒ 결국은 “최대 반복 단위”를 찾는 문제.. 한 번 더 고민하니 시간 복잡도가 더 줄어든 풀이가 나온다.