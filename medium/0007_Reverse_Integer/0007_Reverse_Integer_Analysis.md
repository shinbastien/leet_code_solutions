# [알고리즘 문제풀이] **7. Reverse Integer**

# **7. Reverse Integer**

링크: https://leetcode.com/problems/reverse-integer/description/

### 문제 파악

(어떤 문제인가)

- signed 32-bit 정수가 주어질 때, 그 수를 뒤집은 수를 반환하라.  이때 64bit 정수를 사용하지 않도록 주의.
- signed 32-bit integer range `[-231, 231 - 1]`, then return `0`.

```
// 예시 1
Input: x = 123
Output: 321

// 예시 2
Input: x = -123
Output: -321

// 예시 3
Input: x = 120
Output: 21
```

## 첫번째 풀이

```tsx
function reverse(x: number): number {
    let sign = x < 0 ? -1 : 1;
    let num = x * sign;
    let arr = [];
    let count = 0;
    let res = 0;

    while (num > 0) {
        let r = num % 10;
        arr.push(r);
        num = Math.floor(num / 10);
    }
    while (arr.length > 0) {
        res += arr.pop() * Math.pow(10, count);
        count++;
    }

    return res * sign;
};
```

(설명) 10씩 나눠서 배열에 포함 ⇒ 다시 배열을 pop 하며 10의 거듭제곱씩 곱해준다. push, pop 이니 순서는 자동으로 거꾸로.

- Time Complexity:
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요) 1534236469 ⇒ 9646324351 이 아니라 0을 반환해야 했다.

(더 나은 풀이가 있을 수 있을지 고민)

## 두번째 풀이

```tsx
function reverse(x: number): number {
    let sign = x < 0 ? -1 : 1;
    let num = x * sign;
    let arr = [];
    let count = 0;
    let res = 0;

    while (num > 0) {
        let r = num % 10;
        arr.push(r);
        num = Math.floor(num / 10);
    }
    while (arr.length > 0) {
        res += arr.pop() * Math.pow(10, count);
        count++;
    }

    res = res * sign;

    return (res > Math.pow(2, 31) -1 || res < Math.pow(2, 31) * -1) ? 0 : res;
};
```

(설명) 범위 내에 있는지 확인 ⇒ 아닐 경우 0 반환 추가

- Time Complexity:
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 좋은 풀이

```tsx
const minInt = -Math.pow(2, 31)
const maxInt = -minInt - 1

function reverse(x: number): number {
  const isNegative = x < 0
  let reversed = 0
  if (isNegative) { x = -x }

  while (x > 0) {
    const remainder = x % 10
    reversed = reversed * 10 + remainder
    x = Math.floor(x / 10)
  }

  if (reversed > maxInt) { return 0 }
  return isNegative ? -reversed : reversed
}
```

(설명) 유사한 풀이

- Time Complexity:
- Space Complexity:

---

### 배운 것들 정리

- (자료구조 등)
