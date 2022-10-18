# [알고리즘 문제풀이] 67. Add Binary

# 67. Add Binary

링크: [https://leetcode.com/problems/add-binary/](https://leetcode.com/problems/add-binary/)

### 문제 파악

(어떤 문제인가)

- 두 이진수 a, b 를 string 으로 받고, 이 두 수를 더한 값을 string으로 반환해라
- 

## 첫번째 풀이

```jsx
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var cursor = "";
    if (a.length < b.length ) {
        [a, b] = [b, a];
    }

    if (a[a.length-1] == "1" && b[b.length-1] == "1") {
        cursor = "10";
        if (a.length == "1") {
            return cursor;
        }
        else if (b.length =="1") {
            a = a.slice(0, a.length -1);
            return addBinary(a+"0", cursor);
        }
        else {
            a = a.slice(0, a.length -1);
            b = b.slice(0, b.length -1);
            return addBinary(addBinary(a+"0", b+"0"), cursor);
        }
    }
    else {
        if (a[a.length-1] == "1" || b[b.length-1] == "1") {
            cursor = "1";
        }
        else {
            cursor = "0";
        }

        if (a.length == "1") {
            return cursor;
        }
        else if (b.length =="1") {
            a = a.slice(0, a.length -1);
            return a+cursor;
        }
        else {
            a = a.slice(0, a.length -1);
            b = b.slice(0, b.length -1);
            return addBinary(a, b) + cursor;
        }
    }
}
```

(설명) 

방법은 끝자리부터 하나씩 비교하면서 재귀적으로 올라가는 알고리즘

- Time Complexity: O(n)
    - 결국은 두 수의 길이만큼씩 한 번씩만 하는 것이기 때문에?
        - 아닌가? O(n^2)인건가…
- Space Complexity:

### (실패했다면? 틀린 이유)

 (실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

Runtime: 75 ms, faster than 87.52% of JavaScript online submissions for Add Binary.
Memory Usage: 44.4 MB, less than 26.09% of JavaScript online submissions for Add Binary.

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

```python
class Solution:
    def addBinary(self, a: str, b: str) -> str:
        carry = 0
        result = ''

        a = list(a)
        b = list(b)

        while a or b or carry:
            if a:
                carry += int(a.pop())
            if b:
                carry += int(b.pop())

            result += str(carry %2)
            carry //= 2

        return result[::-1]
```

(설명) 맨 끝에서부터 하나씩 빼고, 받아올림을 확인하는 하나의 커서 역할 carry를 세운다. carry를 기준으로 받아올림 여부를 확인

- Time Complexity:
- Space Complexity:

---

### 배운 것들 정리

- (자료구조 등)