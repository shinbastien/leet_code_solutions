# [알고리즘 문제풀이] 70. Climbing Stairs

# **70. Climbing Stairs**

링크: [https://leetcode.com/problems/climbing-stairs/](https://leetcode.com/problems/climbing-stairs/)

### 문제 파악

(어떤 문제인가)

- 계단을 오를 때 1칸 혹은 2칸을 오를 수 있다. 계단을 오르는 방법의 수는?
- 

## 첫번째 풀이

```jsx
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n == 1)
        return 1;
    else if (n == 2)
        return 2;
    else
        return climbStairs(n-1)+climbStairs(n-2);
        
};
```

(설명) 단순한 재귀로 해결.

- Time Complexity:
- Space Complexity:

### (실패했다면? 틀린 이유)

 (실패한 이유) 그랬더니 Time Exceeding Error 발생. climbStairs(n-1)에서 계산하는 것을 이후엔 안해도 되게 하는 방법이 필요했다.

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 두번째 풀이

```jsx
/**
 * @param {number} n
 * @return {number}
 */
var ways = [1, 2];

var climbStairs = function(n) {
    
    if (n == 1) {
        return 1;
    }
    else if (n == 2) {
        return 2;
    }
    else {
        if (ways.length >= n) {
            return ways[n-1]
        }
        else {
            ways.push(climbStairs(n-1)+climbStairs(n-2))
            return ways[ways.length-1]    
        }
        
    }
        
};
```

(설명) 글로벌 변수 ways 에 계산된 변수를 저장. 재귀할 때 값이 list에 있다면, 그 값을 이용.

- Time Complexity: O(n) n 번만 함수를 돌리면 된다.
- Space Complexity: O(n) 리스트 하나 사용

Runtime: 65 ms, faster than 88.63% of JavaScript online submissions for Climbing Stairs.

Memory Usage: 41.3 MB, less than 98.25% of JavaScript online submissions for Climbing Stairs.

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
    def climbStairs(self, n: int) -> int:
        if n < 2: # Trival base cases
            return 1
        i = 2
        dp = {
				  0: 1,
				  1: 1
				 } #Base case DP table
        while i < n+1:
            dp[i] = dp[i-1] + dp[i-2]
            i += 1
        return dp[n]
```

(설명) dynamic programming 으로 해결. while 문 돌면서, dict의 값을 하나씩 갱신해나가면서 마지막 값 확인

- Time Complexity: O(n) ⇒ O(1) * n 의 방식
- Space Complexity: O(n) ⇒ n 개짜리 리스트 생성

---

### 배운 것들 정리

- dynamic programming 으로 각 값을 하나씩 갱신해나가면서 자료구조에 추가하는 방식도 효과적이다.
    - 매번 함수를 새롭게 정의하고 실행할 필요가 없다는 장점이 있다.