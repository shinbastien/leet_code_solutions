# [알고리즘 문제풀이] **292. Nim Game**

# **292. Nim Game**

링크: [https://leetcode.com/problems/nim-game/description/](https://leetcode.com/problems/nim-game/description/)

### 문제 파악

(어떤 문제인가)

- 친구와 돌 가져가기 게임을 한다. 이때 한 사람은 1~3개의 돌을 가져갈 수 있다.
- 항상 내가 먼저 시작하고, 마지막 돌을 가져가는 사람이 이기는 것이라 할 때 n개의 돌이 있을 경우 내가 이길 수 있는지 반환하라.
- 항상 모든 선수는 최선을 다한다고 생각하라.

## 첫번째 풀이

```tsx
function canWinNim(n: number): boolean {
    if (n % 4 === 0) return false;
    else return true;
};
```

(설명) 4의 배수를 받게 되는 사람이 진다. 그 이유는 마지막 4개가 남았을 때 내 차례면, 나는 무조건 1개는 남기게 되므로, 친구가 마지막 돌을 가져갈 수 있기 때문이다. 따라서, 내가 시작할 때 4의 배수면 지고 아니면 내가 4의 배수를 만들어서 이기면 된다.

- Time Complexity: O(1)
- Space Complexity: O(1)

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 좋은 풀이

```jsx
var canWinNim = function(n) {
    if( n % 4 == 0) return false;
    else return true;
};
```

(설명) 동일한 풀이

- Time Complexity:
- Space Complexity:

---

### 배운 것들 정리

- 로직, 최선의 풀이 찾기