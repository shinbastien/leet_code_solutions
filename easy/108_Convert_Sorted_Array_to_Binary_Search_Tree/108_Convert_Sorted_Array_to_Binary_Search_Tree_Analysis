# [알고리즘 문제풀이] 108. Convert Sorted Array to Binary Search Tree

# 0.문제 이름

링크: [https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/)

### 문제 파악

(어떤 문제인가)

- 정렬된 배열 nums 가 주어졌을 때, 이를 height-balanced BST 로 재생성하라
    - height-balanced 란 subtree 간의 깊이 차이가 최대 1차이 나는 이중 검색 트리다.

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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums.length === 0) {
        return null;
    }

    var midIdx = Math.floor(nums.length/2);
    var midNode = nums[midIdx];
    var leftTree = sortedArrayToBST(nums.slice(0,midIdx));
    var rightTree = sortedArrayToBST(nums.slice(midIdx+1));
    
    return new TreeNode(midNode, leftTree, rightTree);

};
```

(설명) 중앙 노드를 기준으로 왼쪽에 있는 수들은 왼쪽 subTree로, 오른쪽은 오른쪽 subTree로 생성하고 이를 재귀적으로 판단하여, 계속 중앙을 기준으로 좌우에 tree를 생성하도록 했다.

배열이 정렬되어 있기 때문에, 트리에서의 정렬은 크게 고민하지 않을 수 있었다.

- Time Complexity: 이 또한 모든 노드마다 한 번씩 실행해야 하므로 O(n)의 시간 복잡도를 갖는다.
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c5baed95-f4a3-41ae-9267-b8239ae711cd/Untitled.png)

## 좋은 풀이

```jsx
var sortedArrayToBST = function(nums) {
    // Call the function recursively...
	return ConvToBST(nums, 0, nums.length - 1);
}
// Create a function which will convert any particular range of given nums array...
// & return its corresponding BST root node....
var ConvToBST = function(nums, beg, end) {
    // If beg > end, return NULL, as we receive a wrong range...
	if (beg > end)
		return null;
    // set the middle node...
	var mid = Math.ceil((beg + end) / 2);
    // Initialise root node with value same as nums[mid]...
	var root = new TreeNode(nums[mid]);
    // Assign left subtrees as the same function called on left subranges...
	root.left = ConvToBST(nums, beg, mid - 1);
    // Assign right subtrees as the same function called on right subranges...
	root.right = ConvToBST(nums, mid + 1, end);
    // Return the root node...
	return root;
```

(설명) 원리는 비슷하다! convToBST 라는 helper function을 정의하고 나처럼 left, right 을 재귀적으로 선언해줬다는 것은

- Time Complexity:
- Space Complexity:

---

### 배운 것들 정리

- 새로운 타입을 return 하도록 선언해주려면, new 키워드를 붙여서 return 해줬어야 했다.
    - new 를 안 붙이느라.. 다소 고생..
- array.slice (beg, end) 으로 구성. end 는 미포함