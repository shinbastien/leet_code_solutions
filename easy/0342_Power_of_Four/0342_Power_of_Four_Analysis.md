# [알고리즘 문제풀이] **342. Power of Four**

# 342. Power of Four

링크: [https://leetcode.com/problems/power-of-four/description/](https://leetcode.com/problems/power-of-four/description/)

### 문제 파악

(어떤 문제인가)

- 어떤 정수가 4의 거듭제곱인지 반환하라
- loop /recursion 을 안쓰고 풀 수 있겠는가?

## 첫번째 풀이

```tsx
function isPowerOfFour(n: number): boolean {
  let q = n;
  if (q <= 0) return false;
  while (q > 1) {
    if (q % 4 !== 0) {
      return false;
    }
    q /= 4;
  }
  return true;
};
```

(설명) recursion을 안 쓰는 법을 떠올리지 못했다..

- Time Complexity: O(n)
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 좋은 풀이

```tsx
function isPowerOfFour(n: number): boolean {
    return Number.isInteger( Math.log(n) /Math.log(4) );
};
```

(설명) 로그 개념이 있었지…  고등학교 수학 때로 돌아가자. 밑이 e로 통일된 두 값을 나누면 log4N이 되는 것이니. 이 개념을 활용했으면 쉬웠을 것.

- Time Complexity: O(1)
- Space Complexity: O(1)

---

### 배운 것들 정리

- log 개념 복습