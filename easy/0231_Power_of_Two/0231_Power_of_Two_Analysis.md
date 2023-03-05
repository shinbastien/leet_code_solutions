# **231. Power of Two**

링크: [https://leetcode.com/problems/power-of-two/description/](https://leetcode.com/problems/power-of-two/description/)

### 문제 파악

(어떤 문제인가) 어떤 수가 2의 거듭제곱인지 판단하라.

- 추가 조건: loop이나, 재귀를 사용하지 않을 수 있겠는가?
    - 비트 연산을 떠올렸다!

## 첫번째 풀이

```tsx
function isPowerOfTwo(n: number): boolean {
    if ((n & ~n + 1) === n) return true;
    return false;
};
```

(설명) 2의 거듭제곱이면 n & ~n + 1 하면 자기 자신이 나온다.

- 예시  ~n + 1 = 00…1000 ⇒ 111…0111 + 1 ⇒ 111…1000 n & ~n+1 ⇒ 한 숫자 빼고 다 다르기 때문에 자기 자신이 나온다. 이 방법을 이용해 해결
- Time Complexity: O(1)
- Space Complexity: O(1)

### (실패했다면? 틀린 이유)

(실패한 이유) 0에 대해서 실패. 0 도 ⇒ 0000… ⇒ 1111+1 ⇒ 0000 이 나오고 0은 & 연산에 대해서 항상 0이기 때문.

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 두번째 풀이

```tsx
function isPowerOfTwo(n: number): boolean {
    if (n === 0) return false;
    if ((n & ~n + 1) === n) return true;
    return false;
};
```

(설명) 0을 예외처리로 추가.

- Time Complexity:
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유) -21474483648 에 대해서 실패 ⇒ 10000000…00 . 이 경우 011111 +1 이 되어 결국 자기 자신이 나오기 때문.

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 세번째 풀이

```tsx
function isPowerOfTwo(n: number): boolean {
    if (n === 0 || (n >> 31) + 1 === 0) return false;
    if ((n & ~n + 1) === n) return true;
    return false;
};
```

(설명) 부호처리를 추가. n >> 31을 할 경우, 음수인 수들은 모두 1111…11 이 되기 때문에 1을 더하면 무조건 0이 된다.

- Time Complexity: O(1)
- Space Complexity: O(1)

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 좋은 풀이

```jsx
function isPowerOfTwo(n: number): boolean {
    return n > 0 && (n & (n - 1)) === 0;
}
```

(설명) 비트 연산만을 이용하기 보다는 0 보다 큰지 우선으로 확인하고, n & (n-1)을 통해 1000 → 01111이 되므로 그 값이 0인지 확인하는 방법.

- Time Complexity: O(1)
- Space Complexity: O(1)

---

### 배운 것들 정리

- 오랜만에 비트연산 복습… 시스템 프로그래밍 때가 생각난다.
- 비트 연산이 빠르게 안 떠오른다면 그냥 부호처리를 이용하는 것도 방법.