# [알고리즘 문제풀이] **367. Valid Perfect Square**

# **367. Valid Perfect Square**

링크: https://leetcode.com/problems/valid-perfect-square/description/

### 문제 파악

(어떤 문제인가)

- 주어진 숫자 num 이 제곱수인지 판단하라.
-

## 첫번째 풀이

```tsx
function isPerfectSquare(num: number): boolean {
    let curr = 1;
    while (curr*curr < num) {
        if (curr*curr + 2*curr + 1 > num) {  
            return false;
        }
        else {
            curr++;
        }
    }

    return true;
};
```

(설명) iteration을 이용해서 주어진 수 num이 어느 제곱수 범위 사이에 있다면 false를 아니라면 true를 반환하라.

- Time Complexity: O(n)
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민) 모든 범위를 1씩 증가할 필요가 있을까 싶다. 2씩 더하고 다시 줄이고 이런 코드를 만들면 반복이 줄지 않을까?

## 좋은 풀이

```tsx
function isPerfectSquare(num) {
    if (num === 1) return true;
    let low = 1;
    let high = num;

    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        const sqr = mid * mid;
        if (sqr === num) return true;

        if (sqr > num) high = mid;
        else low = mid + 1;
    }

    return false;
};
```

(설명) 반씩 줄여가면서 접근.

- Time Complexity: O(logn)
- Space Complexity: O(1)

---

### 배운 것들 정리

- 일일히 하나씩 증가하는 것보다는 양쪽으로 접근하는게 맞다. left & right 양쪽에서 줄여나갈 것.
