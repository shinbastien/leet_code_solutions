# [알고리즘 문제풀이] 27. Remove Element

# 27. Remove Element

링크: [https://leetcode.com/problems/remove-element/](https://leetcode.com/problems/remove-element/)

### 문제 파악

(어떤 문제인가)

- 리스트에서 input 으로 주어진 Val 과 동일한 값들을 모두 제거한 리스트를 반환해라
- in-place 로 코딩할 것. 즉, 주어진 nums 값을 변경해서 반환할 것

## 첫번째 풀이

```python
class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        cnt = 0
        for i in range(len(nums)):
            if nums[i] == val:
                continue
            else:
                nums[cnt] = nums[i]
                cnt += 1
        return cnt
```

(설명)

- Time Complexity: O(n)
- Space Complexity:

### (실패했다면? 틀린 이유)

 (실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

각 요소들을 돌면서, val 과 같지 않은 애들만을 앞에서부터 넣어준다.

Runtime: 41 ms, faster than 80.29% of Python3 online submissions for Remove Element.
Memory Usage: 13.7 MB, less than 97.10% of Python3 online submissions for Remove Element.

## 두번째 풀이

```jsx

```

(설명)

- Time Complexity:
- Space Complexity:

### (실패했다면? 틀린 이유)

 (실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 세번째 풀이

```jsx

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

```jsx

```

(설명)

- Time Complexity:
- Space Complexity:

---

### 배운 것들 정리

- (자료구조 등)