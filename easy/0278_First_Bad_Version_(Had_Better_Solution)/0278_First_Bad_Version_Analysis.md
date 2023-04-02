# [알고리즘 문제풀이] **278. First Bad Version**

# **278. First Bad Version**

링크: [https://leetcode.com/problems/first-bad-version/description/](https://leetcode.com/problems/first-bad-version/description/)

### 문제 파악

(어떤 문제인가) n차 버전까지의 문서가 있는데, 문서가 잘못된 것을 깨닫고 첫번째로 잘못된 버전을 찾고 싶다. 문서가 잘못된 버전인지 올바른 버전인지 확인해주는 API가 주어진다 할 때, API 호출이 최소가 되는 알고리즘을 구상하라.

```
Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
```

## 첫번째 풀이

```tsx
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let upperBound = n;
        let lowerBound = 1;
        let result = new Map();
        if (n === 1) return 1;
        while (upperBound - lowerBound > 1) {
            const half = Math.floor((upperBound + lowerBound) /2)
            if (isBadVersion(half)) {
                result.set(half, true);
                upperBound = half;
            }

            else {
                result.set(half, false);
                lowerBound = half;
            }   
        }
        return (result.get(upperBound) === result.get(lowerBound) ? lowerBound : upperBound);

        
    };
};
```

(설명) binary search를 떠올렸다. 반씩 줄여가면서 잘못된 버전을 확인하면 되지 않을까?

- Time Complexity: O(logn)
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유) edge case 대응이 잘못되었다. n =2 이고 bad 가 2일때, 현재의 코드는 무조건 2를 반환. result에 undefined 되기 때문.

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 두번째 풀이

```tsx
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let upperBound = n;
        let lowerBound = 1;
        let result = new Map();
        if (n === 1 || isBadVersion(1)) return 1;
        while (upperBound - lowerBound > 1) {
            const half = Math.floor((upperBound + lowerBound) /2)
            if (isBadVersion(half)) {
                result.set(half, true);
                upperBound = half;
            }

            else {
                result.set(half, false);
                lowerBound = half;
            }   
        }

        return (result.get(upperBound) === result.get(lowerBound) ? lowerBound : upperBound);

        
    };
};
```

(설명) 첫번째 풀이에서 시작부터 잘못되었을 경우를 포함. 동일한 상황을 해결하지 못했다.

- Time Complexity:
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 세번째 풀이

```tsx
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let upperBound = n;
        let lowerBound = 1;
        let result = new Map();
        if (n === 1 || isBadVersion(1)) return 1;
        while (upperBound - lowerBound > 1) {
            const half = Math.floor((upperBound + lowerBound) /2)
            if (isBadVersion(half)) {
                result.set(half, true);
                upperBound = half;
            }

            else {
                result.set(half, false);
                lowerBound = half;
            }   
        }
        if (result.get(upperBound) === undefined) {
            return isBadVersion(lowerBound) ? lowerBound : upperBound;
        }
        return (result.get(upperBound) === result.get(lowerBound) ? lowerBound : upperBound);

        
    };
};
```

(설명) undefined 될 경우를 추가해서 lowerbound와 higherBound의 값이 같으면 아래값을, 아니면 윗값을 반환하도록 추가.

- Time Complexity:
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민) 성공했으나,, edge case를 일일히 대응하지 않고 해결할 수 있을 것 같다.

## 좋은 풀이

```tsx
function binarySearch(n: number, isBadVersion: any): number {
    let low = 1, high = n;
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (isBadVersion(mid)) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
}

function solution(isBadVersion: any) {
    return function(n: number): number {
        return binarySearch(n, isBadVersion);
    };
}
```

(설명) binary search를 깔끔하게 하는 방법..  low 를 갱신할 때는 mid + 1을 해주면 되는거구나.. 그리고 같아질 때까지 확인하면 되는 거였어.. 생각해보니 1~5 까지라 하고 3은 올바른 버전이면 4, 5만 확인하면 되니까 4부터 low를 도입하는게 맞네. 그러면 mid 는 무조건 4가 되니..

- Time Complexity:
- Space Complexity:

---

### 배운 것들 정리

- Binary Search를 깔끔하게 하는 방법.