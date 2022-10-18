# [알고리즘 문제풀이] 20. Valid Parentheses

# 20. Valid Parentheses

링크: [https://leetcode.com/problems/valid-parentheses/](https://leetcode.com/problems/valid-parentheses/)

### 문제 파악

(어떤 문제인가)

- 유효한 괄호인지 확인하는 문제
    - 괄호가 전부 닫혀있는가? 짝을 이루는가?
    - 같은 괄호끼리 닫혀있는가?

## 첫번째 풀이

```jsx
class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        
        d1 = {']': '[',
                '}': '{',
                ')': '('
               }
        l1 = []
        for i in range(len(s)):
            if (s[i] not in d1):
                l1.append(s[i])
            else:
                if(len(l1) > 0 and l1.pop() == d1[s[i]]):
                    continue
                else:
                    return False
        
        if (len(l1) == 0):
            return True
```

(설명)

- Time Complexity: O(n)
- Space Complexity:

### (실패했다면? 틀린 이유)

 (실패한 이유)

### (성공했다면? 결과)

Runtime: 44 ms, faster than 11.98% of Python online submissions for Valid Parentheses.

Memory Usage: 13.5 MB, less than 57.53% of Python online submissions for Valid Parentheses.

- 마지막에 return 전에 if문을 넣지 않고 바로 return 할 수 있었다.

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

- 개형 괄호를 stack 으로 넣어서 LIFO 원리로 하나씩 비교를 했다.
    - stack의 전형적인 문제유형이므로 필히 해결방법을 알아두는 것이 중요.