# **258. Add Digits**

# **258. Add Digits**

링크: [https://leetcode.com/problems/add-digits/description/](https://leetcode.com/problems/add-digits/description/)

### 문제 파악

(어떤 문제인가) 정수 n 이 주어졌을 때, n의 자릿수의 합이 한 자릿수가 나올 때까지 자릿수의 합을 더해라.

- 추가조건) loop 이나 recursion 없이 O(1)으로 할 수 있겠는가?

## 첫번째 풀이

```tsx
function addDigits(num: number): number {
    if (num === 0) return 0;
    return (num % 9 === 0) ? 9 :  num % 9; 
};
```

(설명) 자릿수의 합은 결국 9로 나눈 나머지이고, 이는 계속 유지된다.

- Time Complexity: O(1)
- Space Complexity: O(1)

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요) 99.34 %를 이겼다!!

(더 나은 풀이가 있을 수 있을지 고민)

## 좋은 풀이

```jsx
var addDigits = function(num) {
    return 1 + (num - 1) % 9;
};
```

(설명) 원리는 동일! 조금 더 깔끔한 풀이. 미리 1을 빼놓고 연산하고 1을 더하는 방식.

- Time Complexity:
- Space Complexity:

---

### 배운 것들 정리

- 수학적 논리…?