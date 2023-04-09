# [알고리즘 문제풀이] **338. Counting Bits**

# **338. Counting Bits**

링크: [https://leetcode.com/problems/counting-bits/description/](https://leetcode.com/problems/counting-bits/description/)

### 문제 파악

(어떤 문제인가) n이 주어질 때 0 ~ n까지의 수를 이진법으로 나타냈을 때 필요한 1의 갯수를 원소로 하는 길이 n+1의 배열을 반환하라

- 예시)

    ```
    Input: n = 5
    Output: [0,1,1,2,1,2]
    Explanation:
    0 --> 0
    1 --> 1
    2 --> 10
    3 --> 11
    4 --> 100
    5 --> 101
    ```

- 추가요건) O(nlogn) 의 방법은 떠오르기 쉽다. single path로 작동하는 O(n)의 방법을 떠올릴 수 있겠는가?

## 첫번째 풀이

```tsx
function countBits(n: number): number[] {
  let bitMap = new Map();
  bitMap.set(0, 0);
  let curr = 2;
  for (let i = 1; i <= n; i++) {
    if ( i === 1 || i === 2 || i === curr) {
      bitMap.set(i, 1);  
    }

    else {
      bitMap.set(i, 1 + bitMap.get(i-curr));
      if (i + 1 === curr * 2) {
        curr *= 2;
      }
    }

  }
  return Array.from(bitMap.values());
};
```

(설명) 결국 n의 표현은 최대 자릿수 만큼 1개를 더하고 나머진 이전 값과 동일할 것이므로, 최대 자릿수를 찾는 curr를 이용한다.

- Time Complexity: O(n) for문 한 번 돌면서 각각의 iteration은 O(1) 만큼 작동하기에.
- Space Complexity: n 개짜리 map 을 이용.

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요) map 을 안쓰고 할 수 있을까? 처음 1, 2 edge case를 저렇게 예외처리 안하고 깔끔하게 할 수는 없을까?

(더 나은 풀이가 있을 수 있을지 고민)

## 좋은 풀이

```jsx
const countBits = (n) => {
  let result = Array(n + 1).fill(0);
  let offset = 1;
  for (let i = 1; i < n + 1; i++) {
    if (offset * 2 === i) {
      offset = i;
    }
    result[i] = 1 + result[i - offset];
  }

  return result;
};
```

(설명) 비슷한 풀이. 그러나 굳이 map으로 만들어 변환하지 않고 바로 arr를 이용했다는 것이 더 효과적. 또한 1과 2에 대해서 효율적으로 다뤘다!!

- 나처럼 offset 자체와 비교하고 나중에 올리는게 아니라, 두배와 같아졌을 때 offset을 바로 갱신하는 방법이 있군.
- Time Complexity: O(n)
- Space Complexity: O(n)

---

### 배운 것들 정리

- 자릿수 올리기의 핵심 ⇒ 이전 값을 이용할 수 있다. ⇒ DP