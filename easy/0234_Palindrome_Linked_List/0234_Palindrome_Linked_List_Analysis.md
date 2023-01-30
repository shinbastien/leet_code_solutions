# [알고리즘 문제풀이] 234. Palindrome Linked List

# 234. Palindrome Linked List

링크: [https://leetcode.com/problems/palindrome-linked-list/](https://leetcode.com/problems/palindrome-linked-list/)

### 문제 파악

- Singly linked list 이 Palindrome 인지 확인
- 

## 첫번째 풀이

```python
# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution(object):
    def isPalindrome(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """
        def makeNumber(x, head):
            if head.next == None:
                return 10*x + head.val
            else:
                return makeNumber(10*x+head.val, head.next)
    
        def makeReverseNumber(x, head, cnt):
            if head.next == None:
                return x+head.val*pow(10,cnt)
            else:
                return makeReverseNumber(x+head.val*pow(10,cnt), head.next,cnt+1)
        
        number = makeNumber(0, head)
        reverseNumber = makeReverseNumber(0, head, 0)
        
        if number == reverseNumber:
            return True
        else:
            return False
```

(설명)

- Time Complexity:
- Space Complexity:

### (실패했다면? 틀린 이유)

 (실패한 이유) TLE 발생

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 두번째 풀이

```jsx
# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution(object):
    def isPalindrome(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """
        
        def makeNumber(x1, x2, head, cnt):
            if head.next == None:
                return 10*x1 + head.val == x2+head.val*pow(10,cnt)
            else:
                return makeNumber(10*x1+head.val,x2+head.val*pow(10,cnt), head.next, cnt+1)
        
        return makeNumber(0,0, head, 0)
```

(설명)

- Time Complexity:
- Space Complexity:

### (실패했다면? 틀린 이유)

 (실패한 이유) TLE 발생

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 세번째 풀이

```python
# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution(object):
    def isPalindrome(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """
            
        def findLength(head, cnt):
            if head.next == None:
                return cnt
            else:
                return findLength(head.next, cnt+1)
            
        def run2cnt(head, cnt):
            if cnt <= 0:
                return head.val
            else:
                return run2cnt(head.next, cnt-1)
        
        def checkPalindrome (head, cnt):
            if head == None:
                return True
            elif head.val == run2cnt(head, cnt):
                return True
                
            else:
                return False
        def repeatCheckPalindrome(head, length):
            if head == None:
                return True
            
            elif checkPalindrome(head, length):
                return repeatCheckPalindrome(head.next, length-2)
            else:
                return False
        length = findLength(head, 0)
        return repeatCheckPalindrome(head, length)
```

(설명) 일일히 숫자로 만들어서 숫자 간 비교하는 방식에서, Linked List 내부의 양끝을 비교하는 방식 채택

- Time Complexity: n + n-2 + n-4 + …. ⇒ $O(n^{2})$
- Space Complexity:

### (실패했다면? 틀린 이유)

 (실패한 이유) 마찬가지로 TLE 발생

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 좋은 풀이

```python
class Solution(object):

            
    def isPalindrome(self, head):

        self.front_pointer = head

        def recursively_check(current_node=head):
            if current_node is not None:
                if not recursively_check(current_node.next):
                    return False
                if self.front_pointer.val != current_node.val:
                    return False
                self.front_pointer = self.front_pointer.next
            return True

        return recursively_check()
```

재귀함수 사용

- 커서를 두 개를 두고, 내부 함수에서 외부 함수로 땡겨올 때마다 앞쪽 커서를 뒤로 민다.
- ex) 1,2,5,2,1 에 대해 recursively_check() 실행 시
    - 가장 바깥에 있는 recursively_check의 결과는 안쪽 node들에 대한 검사가 모두 끝났을 때 알 수 있다.
    - recursively_check (1_2)에 대해 실행되는 시점:
        - front_pointer = 1_1, current_node = 1_2라서 true
        - 
- Time Complexity:
- Space Complexity:

---

### 배운 것들 정리

- 함수 호출 시점에 대한 이해
    - 재귀함수의 본문은 하위 재귀함수가 모두 return 되고나서 실행된다.
    -