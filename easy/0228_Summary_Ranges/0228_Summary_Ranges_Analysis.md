# [알고리즘 문제풀이] **228. Summary Ranges**

# **228. Summary Ranges**

링크: [https://leetcode.com/problems/summary-ranges/description/](https://leetcode.com/problems/summary-ranges/description/)

### 문제 파악

(어떤 문제인가) 주어진 수 배열에서 연속된 수들은 “→”로 , 연속되지 않은 수는 그 수 자체로 해서 배열 내 수를 모두 포함하는 범위를 반환하라.

- 예시

```
Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
```

- 배열은 0, 1, 2를 포함하므로  0→2 로 표현
- 4는 2와 연속되지 않으므로 새로운 시작으로 표현 4→5
- 7은 이후에 수가 없으므로 7 독립으로 표현

## 첫번째 풀이

```tsx
function summaryRanges(nums: number[]): string[] {
    var start = 0;
    var temp = 0;
    var res: string[] = [];
    for (let i=1; i < nums.length; i++) {
        var cur = nums[i];
        if (cur - nums[temp] === 1) {
            temp = i;
            console.log("update temp", temp)
            continue;
        }
        else if (temp ! == start) { 
            res.push(`${nums[start]}->${nums[temp]}`);
        }
        else {
            res.push(`${nums[start]}`);
        }
        start = i;
        temp = i;
    }
    return res;

};
```

(설명) loop 를 돌면서, start 는 연속되는 range 의 시작을, temp는 현재의 위치를, Cur는 i에 대응되는 nums 내 값을 지칭한다.

핵심은 temp와 cur의 값이 연속되면 start를 초기화하지 않고, 연속되지 않으면, start를 초기화한다는 것. 이때 이전까지의 temp 가 있으면 → 로, 아니면 수만 나타낸다.

- Time Complexity: O(n)
- Space Complexity: O(1)

### (실패했다면? 틀린 이유)

(실패한 이유) 실패 .. “! ==” 로 띄어서 써서 해석이 잘못 되었다..  + 마지막에 도착했을 때의 대응을 하지 않았다. 그래서 마지막 수에 대한 결과를 반환하지 않았다.

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 두번째 풀이

```tsx
function summaryRanges(nums: number[]): string[] {
    var start = 0;
    var temp = 0;
    var res: string[] = [];
    if (nums.length === 0) return [];
    for (let i=1; i < nums.length; i++) {
        var cur = nums[i];
        if (cur - nums[temp] === 1) {
            temp = i;
            continue;
        }
        else if (temp !== start) { 
            res.push(`${nums[start]}->${nums[temp]}`);
        }
        else {
            res.push(`${nums[start]}`);
        }
        start = i;
        temp = i;
    }
    if (temp !== start) {
        res.push(`${nums[start]}->${nums[temp]}`);
    }
    else res.push(`${nums[start]}`);
    return res;

};
```

(설명) 위와 동일, for loop을 나왔을 때도 한 번 더 처리해서 마지막 원소에 대한 결과도 반환할 수 있도록 했다.

- Time Complexity: O(n)
- Space Complexity: O(1)

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민) for loop 내 if 문이 조금 지저분한게 마음에 안 든다…  조금 주먹구구로 짠 기분?

## 좋은 풀이

```tsx
function summaryRanges(nums: number[]): string[] {
    const res: string[] = [];
    let i = 0;
    while (i < nums.length) {
        let j = i;
        while (j + 1 < nums.length && nums[j + 1] === nums[j] + 1) {
            j++;
        }
        res.push(j > i ? `${nums[i]}->${nums[j]}` : `${nums[i]}`);
        i = j + 1;
    }
    return res;
}
```

(설명) if 문 처리를 깔끔하게 해준 chatGPT. i는 시작 위치를, j는 종료 위치를 나타낸다.

**j는 1차이가 유지될 때까지 연속된다. ⇒ 굳이 i 1칸, j 1칸씩 이동할 필요가 없음을 나타낸다!!**

j 와 i 가 같지 않으면 연속으로, 아니면 단독으로 push. 이후 i는 j 다음 칸부터 진행

- Time Complexity: O(n) ⇒ while 문이 2개 더라도, 안쪽 while이 진행된 만큼 i가 넘어가기 때문에 O(n)
- Space Complexity: O(1)

---

### 배운 것들 정리

- Iterative method. while을 이용한 효과적 iteration.