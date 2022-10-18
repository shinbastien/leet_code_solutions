# [알고리즘 문제풀이] 1. Two Sum

# 1. Two Sum

링크: [https://leetcode.com/problems/two-sum/](https://leetcode.com/problems/two-sum/)

### 문제 파악

(어떤 문제인가)

- 리스트 안에 있는 수 중 두 수의 합으로 목표값을 이루고자 할 때, 해당하는 숫자들의 index를 배열로 반환하시오.
- 전제 조건
    - 목표값을 이루는 경우의 수는 한 가지만 있다.
    - 각 수는 한 번만 이용할 수 있다.
    - 배열의 index 순서는 중요하지 않다.

## 첫번째 풀이

```python
class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        a = []
        for i in nums:
          a.append(i)
        nums.sort()
        def recminMaxSum(l, target, mincnt, maxcnt):
            if (l[0]+l[-1]) > target:
              return recminMaxSum(l[0:-1], target, mincnt, maxcnt+1)
            elif (l[0]+l[-1]) < target:
              return recminMaxSum(l[1: ], target, mincnt+1, maxcnt) 
            else:
              minIndex = a.index(l[0])
              a.reverse()
              maxIndex = len(a)-1-a.index(l[-1])
              return [minIndex, maxIndex]
        keys = recminMaxSum(nums, target, 0, 0)
        return keys
```

(설명)

- sorting 이후,  nums 의 최댓값(max)와 최솟값(min)을 더한 값 (minmaxsum)을 이용해 비교
    - minmaxsum > target ⇒ max 제거
    - minmaxsum < target ⇒ min 제거
    - min, max 값을 갖고 재귀적으로 소거하는 방식
- 마지막에 두 값을 갖고 있다면, nums.index 로 찾아서 return
- Time Complexity: nlogn (sorting) + n (min, max 소거과정) + n(reverse) + n (indexing) ⇒ nlogn 으로 예상
- Space Complexity:

### (실패했다면? 틀린 이유)

 (실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

위 결과로 성공. 

Runtime: 991 ms, faster than 41.88% of Python online submissions for Two Sum.
Memory Usage: 414 MB, less than 5.36% of Python online submissions for Two Sum.

더 나은 풀이

index 처리를 조금 더 깔끔하게 할 수 있을 것 같은데.. mincnt, maxcnt 를 이용해서 하려했지만 sorting 하기 전 list 가 없다면 보존이 불가능하다. sorting 이전과 이후가 모두 필요한 상황.

sorting이 필요없을 수 있을까?

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

## Approach 1 - Two-pass Hash Table

```jsx
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashmap = {}
        for i in range(len(nums)):
            hashmap[nums[i]] = i
        for i in range(len(nums)):
            complement = target - nums[i]
            if complement in hashmap and hashmap[complement] != i:
                return [i, hashmap[complement]]
```

hashmap 데이터 구조 이용

- key(num) - value (index) pair 로 저장 O(n)
- 각 num의 complement 가 hashmap 에 있는지, 그리고 자기자신과 같지 않은지를 확인하여 return
    - complement 별로 한 번씩만 확인하니 O(n)
    - key-value pair 로 했다 하더라도 하나의 complement가 n번씩 맞는지 다른지 확인해야 하는 것 아닌가? ⇒ 이게 O(n^2) 이지 않은지.. 헷갈린다.
- Time Complexity:  O(n)
- Space Complexity: O(n) ⇒ n개짜리 hash table 하나만 만들면 되므로

⇒ Dictionary는 전체적인 time complexity가 낮기에 dict, hashmap를 적극적으로 활용하는 것이 좋다. 

## Approach 2 - One-pass Hash Table

```python
class Solution:
def twoSum(self, nums: List[int], target: int) -> List[int]:
hashmap = {}
for i in range(len(nums)):
complement = target - nums[i]
if complement in hashmap:
return [i, hashmap[complement]]
hashmap[nums[i]] = i
```

hashmap 을 저장하면서, 동시에 찾는 방식을 채택.

- Time Complexity:  O(n): O(1) * n 번 진행하므로.
- Space Complexity: O(n):  n개짜리 hash table 하나 메모리에 생성

---

### 배운 것들 정리

- ⇒ Dictionary는 전체적인 time complexity가 list 보다 낮기에 dict, hashmap를 적극적으로 활용하는 것이 좋다.
- sorting 이 막상 필요가 없었다..? hashmap을 쓰면은 key 값을 이용해 바로 찾을 수 있었다.