# [알고리즘 문제풀이] **217. Contains Duplicate**

# **217. Contains Duplicate**

링크: [https://leetcode.com/problems/contains-duplicate/description/](https://leetcode.com/problems/contains-duplicate/description/)

### 문제 파악

(어떤 문제인가) 수로 구성된 배열 내 2개 이상의 중복이 있으면 true, 없다면 false 를 반환하라.

-
-

## 첫번째 풀이

```tsx
function containsDuplicate(nums: number[]): boolean {
    var set = new Set(nums);
    return (set.size !== nums.length);
};
```

(설명) Set 은 중복을 없애주니, set 으로 변환했을 때 길이가 줄어드는지 확인

- Time Complexity: O(n) set을 만들기 위한 과정
- Space Complexity: O(n) set의 최대 크기는 n 이므로,

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 좋은 풀이

```jsx
// Time complexity: O(n)
// Space complexity: O(n)
var containsDuplicate = function(nums) {
    const s = new Set(nums); return s.size !== nums.length
};
```

(설명) 동일한 원리와 형태

- Time Complexity:
- Space Complexity:

---

### 배운 것들 정리

- Set 을 이용한 간단하고 직관적 풀이 적용