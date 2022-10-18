# [알고리즘 문제풀이] 35. Search Insert Position

# **35. Search Insert Position**

링크: [https://leetcode.com/problems/search-insert-position/](https://leetcode.com/problems/search-insert-position/)

### 문제 파악

(어떤 문제인가)

- 정렬된 정수 배열에서 target 이 들어가야 할 index를 찾아라
- 만약 이미 target이 배열에 있다면, 그 위치를 찾아라
- $O(logn)$ 이 되는 알고리즘을 짜라.

## 첫번째 풀이

```jsx
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.length == 1) {
        if (nums[0] < target)
            return 1
        else
            return 0
    }
    else if (nums.length == 2) {
        if (nums[1] < target)
            return 2
        else if (target <= nums[0])
            return 0
        else
            return 1
    }
    else  
        return searchInsert(nums.slice(0, (nums.length / 2).toFixed()), target) + searchInsert(nums.slice((nums.length / 2).toFixed()), target)
};
```

(설명)

 재귀함수로 구현. 배열 길이가 1 혹은 2일때를 default case 로 두고 그 이상일 때는, 반씩 쪼개서 index 확인

- Time Complexity: $O(n)$
- Space Complexity:

### (실패했다면? 틀린 이유)

 (실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

Runtime: 100 ms, faster than 28.68% of JavaScript online submissions for Search Insert Position.
Memory Usage: 45 MB, less than 5.21% of JavaScript online submissions for Search Insert Position.

더 나은 풀이는 만약, 최대보다 길다면, 그냥 length 만큼을 return 하게 하는게 맞다.

지금은, 최댓값을 넘어버려도 각각을 1씩 더해버리기 때문에 쪼개는 의미가 없다.

## 두번째 풀이

```jsx
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.length == 1) {
        if (nums[0] < target)
            return 1
        else
            return 0
    }
    else if (nums.length == 2) {
        if (nums[1] < target)
            return 2
        else if (target <= nums[0])
            return 0
        else
            return 1
    }
    else {
        if (target <= nums[0])
            return 0
        else if (target > nums[-1])
            return nums.length+1
        else
            return searchInsert(nums.slice(0, (nums.length / 2).toFixed()), target) + searchInsert(nums.slice((nums.length / 2).toFixed()), target)
    }
};
```

(설명)

- Time Complexity: $O(logn)$
- Space Complexity: $O(logn)$

### (실패했다면? 틀린 이유)

 (실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

이렇게 보니 1일때와 2일때로 나눌 필요는 없어졌다.

## 세번째 풀이

```jsx
var searchInsert = function(nums, target) {
    if (nums.length == 1) {
        if (nums[0] < target)
            return 1
        else
            return 0
    }
    else {
        if (target <= nums[0])
            return 0
        else if (target > nums[-1])
            return nums.length+1
        else
            return searchInsert(nums.slice(0, (nums.length / 2).toFixed()), target) + searchInsert(nums.slice((nums.length / 2).toFixed()), target)
    }
};
```

(설명)

- Time Complexity:
- Space Complexity:

### (실패했다면? 틀린 이유)

 (실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 좋은 풀이

```python
def searchInsert(self, nums, target):
    l , r = 0, len(nums)-1
    while l <= r:
        mid=(l+r)/2
        if nums[mid]== target:
            return mid
        if nums[mid] < target:
            l = mid+1
        else:
            r = mid-1
    return l
```

(설명)

재귀함수가 아닌 iteration으로 했다. 각각 l, r을 커서로 두고 커서를 점차 좁혀나가는 방향으로 진행

- Time Complexity:
- Space Complexity:

---

### 배운 것들 정리

- (자료구조 등)