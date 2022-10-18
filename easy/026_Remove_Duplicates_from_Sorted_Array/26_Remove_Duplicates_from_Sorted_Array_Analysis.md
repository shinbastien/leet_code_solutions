# [알고리즘 문제풀이] 26. Remove Duplicates from Sorted Array

# 26. Remove Duplicates from Sorted Array

링크: [https://leetcode.com/problems/remove-duplicates-from-sorted-array/](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

### 문제 파악

(어떤 문제인가)

- 중복된 수들이 있는 array 에서 중복된 수들을 제거하여 남겨라
- 이때 in-place 즉, input array를 직접 변경해서 남겨라.
    - 별도의 객체를 생성하지 말 것.

## 첫번째 풀이

```python
class Solution(object):
    def removeDuplicates(self, nums):
        mNum = nums[0]
        MNum = nums[-1]
        cnt = 1
        curr = mNum
        while curr < MNum:
            if curr == nums[cnt]:
                nums.pop(cnt)
            else:
                curr = nums[cnt]
                cnt += 1
        return cnt
```

(설명)

중복된 요소들을 비교하면서 pop 한다. 이때, cnt 는 index를 위한 커서 역할. curr 는 지금까지의 최솟값을 나타낸다.

- Time Complexity: O(n)
- Space Complexity:

### (실패했다면? 틀린 이유)

 (실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 두번째 풀이

```python
x = 1
for i in range(len(nums)-1):
	if(nums[i]!=nums[i+1]):
		nums[x] = nums[i+1]
		x+=1
return(x)
```

(설명)

이 풀이에서 i 는 모든 요소를 확인하면서 가는 것이고, x는 그때그때 앞에서부터 겹치지 않는 값들을 덮어씌우기 위한 커서 역할이다. 전체 길이 len 은 유지되는 특성이 있다.

- Time Complexity: O(n)
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