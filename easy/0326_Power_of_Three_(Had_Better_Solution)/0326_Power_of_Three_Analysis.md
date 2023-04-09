# [알고리즘 문제풀이] **326. Power of Three**

# **326. Power of Three**

링크: [https://leetcode.com/problems/power-of-three/](https://leetcode.com/problems/power-of-three/)

### 문제 파악

(어떤 문제인가) 정수 n 이 주어질 때 해당 정수가 3의 거듭제곱인지 확인하라.

- 추가요건) loop 이나 recursion 없이 해결할 수 있겠는가?

## 첫번째 풀이

```tsx
function isPowerOfThree(n: number): boolean {
    if (n <= 0) return false;
    if (n === 1) return true;
    const str = n.toString(3);
    if (str[0] === "1" && parseInt(str.slice(1)) === 0) return true;
    return false;
};
```

(설명) 3의 거듭제곱 꼴의 string으로 변환한 다음 1000….00 꼴인지 확인한다.

- Time Complexity: O(log3n) string으로 변환하는 것도 결국 자릿수의 변환이라 이만큼의 시간이 걸린다고 한다.
- Space Complexity: O(log3n): 새로운 string만큼의 길이

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민) string 변환이 포인트가 아닌 것 같다..

## 좋은 풀이

```tsx
function isPowerOfThree(n: number): boolean {
    return n > 0 && 1162261467 % n == 0;
};
```

(설명) 주어지는 n 이 integer 범위 내임을 이용. 2^31-1 범위 내에서 가장 큰 3의 거듭제곱은 1162261467 이 수로 나눴을 때의 나머지가 0이면 n은 소인수가 3 뿐이므로 true.

- Time Complexity: O(1)
- Space Complexity: O(1)

이 풀이는 꼭 3이 아니더라도 사용할 수 있다는 것에 알아두면 좋을 것 같다!!

---

### 배운 것들 정리

- 소수의 거듭제곱을 확인하는 방법
- string으로의 변환이 사실 loop보다도 오래 걸린다..