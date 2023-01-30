# [알고리즘 문제풀이] 21. Merge Two Sorted Lists

# 21. Merge Two Sorted Lists

링크: [https://leetcode.com/problems/merge-two-sorted-lists/](https://leetcode.com/problems/merge-two-sorted-lists/)

### 문제 파악

(어떤 문제인가)

- 
- 

## 첫번째 풀이

```jsx
# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution(object):
    def mergeTwoLists(self, list1, list2):
        """
        :type list1: Optional[ListNode]
        :type list2: Optional[ListNode]
        :rtype: Optional[ListNode]
        """
        
        
        def search(l1, l2):
            rv = ListNode()
            if l1 == None:
                return l2
            elif l2 == None:
                return l1
            else:
                if (l1.val <= l2.val):
                    rv.val = l1.val
                    rv.next = search(l1.next, l2)
                    return rv
                else:
                    rv.val = l2.val
                    rv.next = search(l1, l2.next)
                    return rv
            
        return search(list1, list2)
```

(설명)

- Time Complexity: O(n^2) 각 항목에 대해 한번씩 함수를 실행해야 하므로 n*n 만큼 소요된다.
- Space Complexity:

### (실패했다면? 틀린 이유)

 (실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

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
def mergeTwoLists2(self, l1, l2):
    if not l1 or not l2:
        return l1 or l2
    if l1.val < l2.val:
        l1.next = self.mergeTwoLists(l1.next, l2)
        return l1
    else:
        l2.next = self.mergeTwoLists(l1, l2.next)
        return l2
```

(설명)별도 linked list를 매번 생성하지 않고 파라미터로 들어온 값을 바로 바꾸는 것이 더 효율적이다. 

- Time Complexity:
- Space Complexity:

---

### 배운 것들 정리

- singly linked list ⇒ 재귀함수 사용이 보편적인 해결방법