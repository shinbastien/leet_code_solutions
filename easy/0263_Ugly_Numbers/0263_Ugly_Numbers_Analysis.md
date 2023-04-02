# 263. Ugly Number

링크: [https://leetcode.com/problems/ugly-number/](https://leetcode.com/problems/ugly-number/)

### 문제 파악

(어떤 문제인가) 어떤 정수를  소인수분해했을 때 2, 3, 5 로만 구성 되어있으면 `Ugly Number` 라고 하다. 인자로 받은 정수가 Ugly number 인지 확인하고 boolean을 반환하라.

- 예시) 6 = 2 x 3 ⇒ true 14 = 2 x 7 ⇒ false

## 첫번째 풀이

```tsx
function findK(n: number, k: number): number {
    if (n % k === 0) {
        return findK(n / k, k);
    }
    else return n
}

function isUgly(n: number): boolean {
    if (findK(findK(findK(n, 5), 3), 2) === 1) return true;
    else return false;
};
```

(설명) 재귀적으로 K에 대해서 계속 나눠 떨어질 때까지 반복해주는 보조 함수 생성. 5, 3, 2 로 계속 나눴을 때의 값이 1 이 아니라면 false 반환

처음에는 2, 3, 5 각각에 대한 보조함수를 만드려했으나, 로직이 반복됨을 깨닫고 인자를 하나 더 받아서 하나의 함수로 활용할 수 있도록 함

- Time Complexity: O(logn) ⇒ logn 과정이 3번 반복되므로.
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유) Edge case: 0 에 대해 고려하지 않았다.

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 두번째 풀이

```tsx
function findK(n: number, k: number): number {
    if (n % k === 0) {
        return findK(n / k, k);
    }
    else return n
}

function isUgly(n: number): boolean {
    if (n === 0) return false;
    else if (n === 1) return true;
    else if (findK(findK(findK(n, 5), 3), 2) === 1) return true;
    else return false;
};
```

(설명) 0과 1일 때 값 추가.

- Time Complexity: O(logn)
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 좋은 풀이

```tsx
function isUgly(n: number): boolean {
    if (n === 0) return false;
    if (n === 1) return true;
    while (n % 2 === 0) n /= 2;
    while (n % 3 === 0) n /= 3;
    while (n % 5 === 0) n /= 5;
    return n === 1;
}
```

(설명) Iteration 으로 보조 함수 없이 해결

- Time Complexity:
- Space Complexity:

---

### 배운 것들 정리

- 재귀 함수 ⇒ 보조함수 활용