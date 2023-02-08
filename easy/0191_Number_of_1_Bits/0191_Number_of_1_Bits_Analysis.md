# [알고리즘 문제풀이] 191. Number of 1 Bits

# 191. Number of 1 Bits

링크: [https://leetcode.com/problems/number-of-1-bits/description/](https://leetcode.com/problems/number-of-1-bits/description/)

### 문제 파악

(어떤 문제인가)

- 32 bit 로 들어오는 수에 대해 수 안에 있는 1의 개수를 반환하시오

## 첫번째 풀이

```tsx
function hammingWeight(n: number): number {
    var cnt = 0;
    
    for (var i=0; i<32; i++) {
        if ((n & 1) === 1) cnt +=1 ;
        n = n >> 1;
    }

    return cnt;
};
```

(설명) n이 32 bit 로 딱 맞춰 들어온다는 것을 이용해, for 개수를 정했고, 앞에 190에서 연습한대로 비트연산자 & 을 이용해서 해결

- Time Complexity:  O(1)
- Space Complexity: O(1)

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 좋은 풀이

```jsx
var hammingWeight = function(int) {
    let count = 0;
    while (int !== 0) {
        const bitComparison = int & 1; // 1 & 1 will return 1. 0 & 1 will return 0.
        if (bitComparison === 1) count++;
        int >>>= 1; // unsigned right shift assignment (chop off the last bit and assign it)
    }  
    return count;
};
```

(설명) 대부분 동일한 풀이

- Time Complexity:
- Space Complexity:

---

### 배운 것들 정리

- 비트연산 복습 & 1 을 하면 1, 0 이 나온다..? right shifting >>