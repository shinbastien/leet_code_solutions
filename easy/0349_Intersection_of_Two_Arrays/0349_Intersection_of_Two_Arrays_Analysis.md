# [알고리즘 문제풀이] **349. Intersection of Two Arrays**

# **349. Intersection of Two Arrays**

링크: https://leetcode.com/problems/intersection-of-two-arrays/description/

### 문제 파악

(어떤 문제인가)

- 두 nums array 가 주어질 때 교집합을 구하라.

```tsx
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
```

## 첫번째 풀이

```tsx
function intersection(nums1: number[], nums2: number[]): number[] {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const arr = Array.from(new Set(nums1.concat(nums2)));

    return arr.filter((e) => set1.has(e) && set2.has(e));

};
```

(설명) 각 배열을 집합으로 만들어서 중복을 제거했고, 합집합에서 양쪽에 모두 있는 원소들만 array.filter 로 남겼다.

- Time Complexity: O(m+n) 중복이 없다면 m+n개 에 대해 iteration 진행
- Space Complexity: O(n) + O(m) + O(m+n) ⇒ set 2개 m+n 배열 1 개 필요

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민) 각각을 set으로 만들어주는게 이득인가??

## 좋은 풀이

```tsx
function intersection(nums1: number[], nums2: number[]): number[] {
    const set: Set<number> = new Set(nums1);

    return nums2.filter(item => set.delete(item));
};
```

(설명) 하나의 배열만을 set으로 두고, 남은 하나의 배열을 돌면서 교집함에 포함되는 원소만 남긴다. 그러나, 이미 검색한 원소의 중복을 막기 위해 검색 후 set에서 삭제한다.

- Time Complexity: O(n)
- Space Complexity:  O(n)

불필요한 배열 생성을 막을 수 있다.

---

### 배운 것들 정리

- 핵심: 교집합은 결국 A, B 각각에 대한 부분집합이기에 그 안에서만 순회할 수 있다면 더 좋다.
