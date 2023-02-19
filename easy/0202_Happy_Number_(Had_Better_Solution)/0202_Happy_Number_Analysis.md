# [알고리즘 문제풀이] 202. Happy Number

# 202. Happy Number

링크: [https://leetcode.com/problems/happy-number/description/](https://leetcode.com/problems/happy-number/description/)

### 문제 파악

n 이 주어질 때, n 의 모든 자릿수의 합이 1이 되면 그 수를 Happy number 라 한다. 주어진 n 이 Happy number 인지 true/ false 를 반환하라.

- n 의 자릿수의 합이 1이 나올 때 까지 반복

## 첫번째 풀이

```tsx
function isHappy(n: number): boolean {
    var res = 0;
    var cur = n;
    if (n < 10) {
        if (n === 1) return true;
        return false;
    }
    while (cur > 0) {
        cur = Math.floor(cur / 10);
        res += Math.pow((cur % 10), 2);
    }
    if (res === 1) return true;
    return isHappy(res);
};
```

(설명) n < 10 일때를 base case로 두고, 1이면 true 아니면 false 반환

- Time Complexity:
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유) 7일 때 ⇒ 49 ⇒ 97 ⇒ 130 ⇒ 10 ⇒ 1 이라서 happy number

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 두번째 풀이

```tsx
function isHappy(n: number): boolean {
    var res = 0;
    var cur = n;
    if (n < 10) {
        if (n === 1 || n === 7) return true;
        else return false;
    }
    while (cur > 0) {
        cur = Math.floor(cur / 10);
        res += Math.pow((cur % 10), 2);
    }
    if (res === 1) return true;
    return isHappy(res);
};
```

(설명) n 1 일 때, 7일때 빼곤 false 반환.

- Time Complexity:
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유) 11. cur 를 먼저 바꿔주고 res 를 반영하는데 있어서 순서가 잘못 되었다. 이 경우, res 는 1이 되어 true가 된다..

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 세번째 풀이

```tsx
function isHappy(n: number): boolean {
    var res = 0;
    var cur = n;
    if (n < 10) {
        if (n === 1 || n === 7) return true;
        else return false;
    }
    while (cur > 0) {
        res += Math.pow((cur % 10), 2);
        cur = Math.floor(cur / 10);
    }
    if (res === 1) return true;
    return isHappy(res);
};
```

(설명) 수학적 원리가 있을 것 같긴 했으나, 일단은 일종의 시행착오 + 규칙성 찾기로 문제 해결 + cur, res 순서 변경

1~9 사이 숫자 중에서는 1, 7 만이 해당되고 나머지는 특정 주기를 갖게 되어 4, 5 등으로 반복됨을 알게 되었다. 따라서, 만약 n 이 한 자릿수가 나왔는데 1 또는 7 이 아니면? 그때는 false를 반환하게 하고 재귀로 돌렸다.

- Time Complexity: O(logn) n의 자릿수 만크 while 문을 실행하기 때문
- Space Complexity: O(logn) recursion으로 인해,n의 자릿수만크의 숫자를 함수 메모리를 차지할 것이기 때문.

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 좋은 풀이

```tsx
function isHappy(n) {
  function getNext(n) {
    let sum = 0;
    while (n > 0) {
      const digit = n % 10;
      sum += digit * digit;
      n = Math.floor(n / 10);
    }
    return sum;
  }

  let slow = n;
  let fast = getNext(n);
  while (fast !== 1 && slow !== fast) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  }
  return fast === 1;
}
```

(설명) cycle 이 나온다? ⇒  토끼와 거북이 알고리즘 ⇒ cycle 여부 판단 후 값 반환

- Time Complexity: O(logn)
- Space Complexity: O(1) 추가 공간, 자료구조를 사용하지 않으므로

**HashSet을 이용한 풀이도 가능**

- 돌면서, Hashset에 하나씩 넣고, 만약 이미 추가된 값이 또 나오면 false 반환

---

### 배운 것들 정리

- 토끼와 거북이 알고리즘 복습
- hashset 이용