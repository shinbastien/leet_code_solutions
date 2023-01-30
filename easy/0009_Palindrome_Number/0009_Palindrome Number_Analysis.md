# [알고리즘 문제풀이] 9. Palindrome Number

# 9. Palindrome Number

링크: [https://leetcode.com/problems/palindrome-number/](https://leetcode.com/problems/palindrome-number/)

### 문제 파악

- palindrome 이란, 앞 뒤로 순서를 뒤집어도 동일한 수를 의미한다.
- input x 가 palindrome이면 true 를, 아니면 false 를 반환해라.

## 첫번째 풀이

```jsx
class Solution:
    def isPalindrome(self, x: int) -> bool:
        l1 = []
        xreverse = 0
        def decimalsplit (x, box):
            if x >= 10:
                a = x % 10
                box.append(x % 10)
                return decimalsplit((x-a)//10, box)
            else:
                box.append(x)  
                return box
        if x < 0:
            return False
        else:
            result = decimalsplit(x, l1)
            result.reverse()
            if result[-1] == 0:
                return False
            else:
                for i in range(len(result)):
                    xreverse = xreverse+pow(10,(len(result)-1-i))*result[i]
                if x == xreverse:
                    return True
                else:
                    return False
```

(설명)

- Time Complexity:
- Space Complexity:

### (실패했다면? 틀린 이유)

 (실패한 이유) 숫자 0 하나만 있는 경우를 고려하지 않았다. 이 경우, 내 알고리즘 상 리스트의 마지막 수가 0이기 때문에 False 가 나온다.

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 두번째 풀이

```jsx
class Solution:
    def isPalindrome(self, x: int) -> bool:
        l1 = []
        xreverse = 0
        def decimalsplit (x, box):
            if x >= 10:
                a = x % 10
                box.append(x % 10)
                return decimalsplit((x-a)//10, box)
            else:
                box.append(x)  
                return box
        if x < 0:
            return False
        else:
            result = decimalsplit(x, l1)
            result.reverse()
            if result[-1] == 0 and result[0] != 0:
                return False
            else:
                for i in range(len(result)):
                    xreverse = xreverse+pow(10,(len(result)-1-i))*result[i]
                if x == xreverse:
                    return True
                else:
                    return False
```

(설명)

- Time Complexity:
- Space Complexity:

### (실패했다면? 틀린 이유)

123 을 넣었을 때, false 가 나와야하는데 true 가 나온다.

중간에 reverse 를 하면 어떤 숫자를 해도, 원래 숫자가 다시 나오게 되어 무조건 true가 나오는 코드였다.

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 세번째 풀이

```jsx
class Solution:
    def isPalindrome(self, x: int) -> bool:
        l1 = []
        xreverse = 0
        def decimalsplit (x, box):
            if x >= 10:
                a = x % 10
                box.append(x % 10)
                return decimalsplit((x-a)//10, box)
            else:
                box.append(x)  
                return box
        if x < 0:
            return False
        else:
            result = decimalsplit(x, l1)
            if result[-1] == 0 and result[0] != 0:
                return False
            else:
                for i in range(len(result)):
                    xreverse = xreverse+pow(10,(len(result)-1-i))*result[i]
                if x == xreverse:
                    return True
                else:
                    return False
```

(설명)

- 아이템 간 순서가 중요할 것 같아서 리스트 형태를 사용
- integer 를 string 으로 바꾸지 않고 하기 위해, 10으로 나눈 나머지 이용

불필요한 reverse 제거

- Time Complexity:
- Space Complexity:

### (실패했다면? 틀린 이유)

 (실패한 이유)

### (성공했다면? 결과)

Runtime: 206 ms, faster than 5.00% of Python3 online submissions for Palindrome Number.
Memory Usage: 14.1 MB, less than 15.91% of Python3 online submissions for Palindrome Number.

## 좋은 풀이

```csharp
public class Solution {
    public bool IsPalindrome(int x) {
        // Special cases:
        // As discussed above, when x < 0, x is not a palindrome.
        // Also if the last digit of the number is 0, in order to be a palindrome,
        // the first digit of the number also needs to be 0.
        // Only 0 satisfy this property.
        if(x < 0 || (x % 10 == 0 && x != 0)) {
            return false;
        }

        int revertedNumber = 0;
        while(x > revertedNumber) {
            revertedNumber = revertedNumber * 10 + x % 10;
            x /= 10;
        }

        // When the length is an odd number, we can get rid of the middle digit by revertedNumber/10
        // For example when the input is 12321, at the end of the while loop we get x = 12, revertedNumber = 123,
        // since the middle digit doesn't matter in palidrome(it will always equal to itself), we can simply get rid of it.
        return x == revertedNumber || x == revertedNumber/10;
    }
}
```

(설명)

- 핵심 아이디어: 전체 길이의 반만 비교해도 된다.
    - revertedNumber 는 나머지를 거꾸로 붙이는 방식
        - ex 1)
            - x: 123 → 12
            - revertedNumber: 3→ 32
                - 32 ≠ 12 이므로 false
        - ex 2)
            - x: 1221 → 122 → 12
            - revertedNumber 1 →12 → 122
            - x: 12 와 revertedNumber 122 / 10 = 12 가 같기 때문에 true
- Time Complexity:  $Olog_{10}(n)$
- Space Complexity: O(1)

---

### 배운 것들 정리

- 별도 자료 구조 없이 수 하나만 정의해줘도 됐다. 굳이 리스트에 넣었다가 다시 리스트에서 빼서 수에 기록할 필요가 없었다.
- 대칭 여부를 확인하는 것이기 때문에 각 수가 앞쪽 반, 뒤쪽 반을 갖고 있다면, 전체를 하나씩 대응하지 않아도 전부를 알 수 있기에 효율적이다.