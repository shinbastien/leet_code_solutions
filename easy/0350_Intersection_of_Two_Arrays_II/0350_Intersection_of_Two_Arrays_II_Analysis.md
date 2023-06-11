# [알고리즘 문제풀이] **350. Intersection of Two Arrays II**

# **350. Intersection of Two Arrays II**

링크: https://leetcode.com/problems/intersection-of-two-arrays-ii/description/

### 문제 파악

(어떤 문제인가)

- 주어진 두 nums 배열이 있을 때, 중복되는 모든 수들을 겹치는 만큼 반환하라

```tsx
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
```

## 첫번째 풀이

```tsx
function intersect(nums1: number[], nums2: number[]): number[] {
    const map1 = new Map();
    const map2 = new Map();
    const res = [];
    function setMap (map: Map<number, number>, e: number): void {
        if (map.has(e)) {
            map.set(e, map.get(e) + 1);
        }
        else map.set(e, 1);
    
    }
    nums1.forEach((e) => setMap(map1, e));
    nums2.forEach((e) => setMap(map2, e));

    map1.forEach((value, key, map) => {
        if (map2.has(key)) {
            for (let i = 0; i < Math.min(value, map2.get(key)); i++) {
                res.push(key);
            }
        }
    })

    return res;
};
```

(설명) 각각을 Map으로 반환해서 key, value pair 로 만들고 결과값 배열에는 두 map 의 value 중 작은 값만큼 배열에 포함한다.

- Time Complexity: O(n) ⇒ 모두 중복되지 않을 경우.  + O(n) +O(n) (Map 2개 만드는데 드는 ㅣㅅ간)
- Space Complexity: O(n) + O(n) +O(n) Map 2개 배열 1개를 반환.

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민) 이 또한, 다 map 으로 만드는게 이득일까? 단일 iteration 길이 자체는 줄어드는 효과

## 좋은 풀이

```tsx
function intersect(nums1: number[], nums2: number[]): number[] {
    const counts: {} = {};
    const result: number[] = [];

    nums1.forEach(el => counts[el] = ++counts[el] || 1);

    for (let el of nums2) {
        if (counts[el]) {
            result.push(el);
            counts[el]--;
        }
    }

    return result;
};
```

(설명) 이 또한 앞선 문제와 같이 하나의 map 만을 만들어준다.

map 을 만드는 방법도 더 간단하다. or 연산자를 써서 쉽게 표현

iteration은 nums2에 대해서만 돌고, 중복이 나올때마다 결과에는 push를, map에서는 한 개씩 값을 줄이는 아이디어

- Time Complexity: O(m+n)
- Space Complexity: O(n) + O(n)

---

### 배운 것들 정리

- 양쪽 다 map으로 바꿔줄 필ㅇ는 없다.
- 연산자를 적극적으로 활용해보자.
- 배열 Iteration 도 of 를 쓰니 더 깔끔하다.
