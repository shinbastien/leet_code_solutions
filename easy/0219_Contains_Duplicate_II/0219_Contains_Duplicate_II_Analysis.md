# [알고리즘 문제풀이] **219. Contains Duplicate II**

# **219. Contains Duplicate II**

링크: [https://leetcode.com/problems/contains-duplicate-ii/description/](https://leetcode.com/problems/contains-duplicate-ii/description/)

### 문제 파악

(어떤 문제인가) 앞선 217과 유사, 단 이번엔 nums 와 k를 받아서 중복이 k index 간격 내에 있는지 확인 후 참 / 거짓을 반환하라.

- 예시

```
Input: nums = [1,2,3,1], k = 3
Output: true
```

## 첫번째 풀이

```tsx
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    var hash: {[key: number]: number} = {};

    for (let i = 0; i < nums.length; i++) {
        if (hash.hasOwnProperty(nums[i])) {
            if (i - hash[nums[i]] <= k) return true;
        }
        hash[nums[i]] = i;
    }
    return false;
};
```

(설명) hash 를 만들어서 해결. for 문을 돌면서 hash 에 기 정의된 값이 있으면 그 값과 현재의 인덱스를 비교. k 보다 작다면 true, 아니라면 hash 내 값을 갱신.

- Time Complexity: O(n)
- Space Complexity: O(n)

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 좋은 풀이

```jsx
// Time Complexity : O(n)
// Space Complexity : O(n)
var containsNearbyDuplicate = function(nums, k) {
    const hasmap = new Map();
    for (let idx = 0; idx < nums.length; idx++) {
        // Check if the difference betweend duplicates is less than k
        if (idx - hasmap.get(nums[idx]) <= k) {
            return true;
        }
        hasmap.set(nums[idx], idx);
    }
    return false;
};
```

(설명) 동일한 로직. 내부 객체인 Map 을 이용.

- Time Complexity: O(n)
- Space Complexity: O(n)

---

### 배운 것들 정리

- hashmap 이용