# [알고리즘 문제풀이] 13. Roman to Integer

# 13. Roman to Integer

링크: [https://leetcode.com/problems/roman-to-integer/](https://leetcode.com/problems/roman-to-integer/)

### 문제 파악

(어떤 문제인가)

- 로마 숫자 string으로 입력이 될 시 이를 정수 꼴로 변환하라
- 로마자는 보통 큰 수 → 작은 수 진행되나, 뺄셈이 적용될 때도 있다.
    - IV ⇒ 4, IX ⇒ 9
    - XL ⇒ 40, XC ⇒ 90
    - CD ⇒ 400, CM ⇒ 900

## 첫번째 풀이

```python
class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        romanDict = {"I": 1, "V": 5, "X": 10, "L": 50, "C":100, "D": 500, "M": 1000 }
    
        
        def readFromEnd(s):
            if len(s) > 0:
                if romanDict[s[0]] > readFromEnd(s[1:]):
                    return romanDict[s[0]]+readFromEnd(s[1:])
                else:
                    if romanDict[s[0]] < romanDict[s[1]]:
                        return readFromEnd(s[1:]) - romanDict[s[0]]
                    else:
                        return romanDict[s[0]]+readFromEnd(s[1: ])
                    
            else:
                return 0
                    
        return readFromEnd(s)
```

(설명) 로마자를 dictionary 로 만들고, 오른쪽부터 검사하면서 왼쪽에 있는 숫자보다 오른쪽이 클 경우 뺄셈을 적용했다.

Time Complexity: O(n)+O(n)+O(n) = O(3n) 

### (실패했다면? 틀린 이유)

 (실패한 이유) 

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

Runtime: 1205 ms, faster than 5.16% of Python online submissions for Roman to Integer.
Memory Usage: 13.6 MB, less than 9.18% of Python online submissions for Roman to Integer.

재귀함수 호출을 줄이면 runTime은 줄어들 것이다.

## 두번째 풀이

```python
class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        romanDict = {"I": 1, "V": 5, "X": 10, "L": 50, "C":100, "D": 500, "M": 1000 }
    
        
        def readFromEnd(s):
            if len(s) > 0:
                ans = readFromEnd(s[1:])
                if romanDict[s[0]] > ans:
                    return romanDict[s[0]]+ans
                else:
                    if romanDict[s[0]] < romanDict[s[1]]:
                        return ans - romanDict[s[0]]
                    else:
                        return romanDict[s[0]]+ans
                    
            else:
                return 0
                    
        return readFromEnd(s)
```

(설명) 반복되는 readFromEnd 함수 호출을 최소화했다.

- Time Complexity: O(n)
- Space Complexity:

### (실패했다면? 틀린 이유)

 (실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

Runtime: 48 ms, faster than 65.98% of Python online submissions for Roman to Integer.
Memory Usage: 13.7 MB, less than 9.18% of Python online submissions for Roman to Integer.

재귀를 굳이 사용하지 않더라도 동일한 방식의 코드를 작성할 수 있다. 재귀의 장점이 딱히 없는 느낌

나의 재귀함수 사용의 특징: loop을 대신하는 용도. while  cnt> len 등의 과정을 생략할 수 있다.

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

```python
class Solution(object):
    
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        sm = 0
        prev = 0
        convert = {'I': 1, 'V': 5, 'X': 10, 'L':50, 'C': 100, 'D': 500, 'M':1000}
        for symb in s[::-1]:
            num = convert[symb]
            if prev <= num:
                sm += num
            else:
                sm -= num
            prev = num
        return sm
```

(설명) 함숫값이 아니라, 변수 두 개 num, prev 를 두고 이 값들간의 비교를 하면서 갱신해 나가는 것이 효과적으로 보였다. 

- Time Complexity: 15ms
- Space Complexity:

---

### 배운 것들 정리

- loop을 넣으면서 변수를 갱신하며 확인하는 방법이 있다.