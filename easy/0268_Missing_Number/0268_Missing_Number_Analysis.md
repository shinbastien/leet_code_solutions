# **268. Missing Number**

링크: [https://leetcode.com/problems/missing-number/](https://leetcode.com/problems/missing-number/)

### 문제 파악

(어떤 문제인가)

- [0, n] 의 범위 내의 n개의 수가 들어 있는 배열이 주어진다. 이 때, 해당 배열에 포함되지 않는 수를 찾아라.
    - 예시) [0, 1] ⇒ 2 . [3, 0, 1] ⇒ 2
- 추가 조건) O(1) 의 공간 복잡도와 O(n)의 시간 복잡도로 해결할 수 있는가?

## 첫번째 풀이

```tsx
function missingNumber(nums: number[]): number {
    const len = nums.length;
    const sum = len * (len + 1) / 2;
    const arraySum = nums.reduce((prev, curr) => prev + curr, 0);

    return sum - arraySum;
}
```

(설명) [0,n] 이라는 고정된 범위가 있으므로 그 범위의 합은 고정된다는 아이디어를 갖고  풀었다.

따라서, [0, n] 까지의 합에서 배열의 합은 reduce 로 구해서 빈 값을 찾았다.

- Time Complexity: O(n) ⇒ 각 원소의 합을 구할 때의 시간
- Space Complexity: O(1) ⇒ 추가적인 객체, 자료 구조의 생성 X 이므로.

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요) 처음에는 sorting 을 하고, iteration을 돌면서 확인하려했으나, sorting 자체도 O(n)을 넘는 결과일 것 같아 잠시 멈추고 다시 생각해서 방법을 찾아냈다.

(더 나은 풀이가 있을 수 있을지 고민)
리트코드도 동일한 풀이.
---

### 배운 것들 정리

- 변하는 것과 변하지 않는 것을 활용.