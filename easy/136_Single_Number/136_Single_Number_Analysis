# [알고리즘 문제풀이] **136. Single Number**

# **136. Single Number**

링크: [https://leetcode.com/problems/single-number/description/](https://leetcode.com/problems/single-number/description/)

### 문제 파악

(어떤 문제인가)

- 주어진 배열 nums 는 모든 수가 2번씩 들어있고, 딱 한 수만 한 번 들어가있다. 그 수를 찾아내라
- O(n)의 시간 복잡도와 O(k ⇒ 상수)의 공간 복잡도를 갖도록 풀어보아라.

## 첫번째 풀이

```jsx
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var set = new Set(nums);
    var a = 0;
    set.forEach(item => a += item);
    var b = nums.reduce((prev, curr) => prev+curr, 0);

    return 2*a - b;
};
```

(설명) 중복되는 요소들을 없애기 위해 집합으로 바꿔주고, 집합의 모든 수를 다 더한 뒤 *2 를 하면 모든 수가 2번씩 쓰여있는 것이기 때문에 원래 배열의 총합에서 빼주었다.

- Time Complexity: O(n)
- Space Complexity: O(n)

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/58762ae8-27d2-4789-a25b-b5860da0e441/Untitled.png)

- 성공은 했는데.. 공간 복잡도 O(n)인게 조금.. 걸린다.. 어떻게 하면 추가 공간을 사용하지 않을 수 있을까?

## 좋은 풀이

```jsx
var singleNumber = function(nums) {
    return nums.reduce((prev, curr) => prev^curr, 0);
};
```

(설명) XOR 연산자 사용: 이진법으로 바꿔서 비트 연산을 한다. 이때 ⇒ a^b^b = a 를 이용.

예시) [2,2,3, 4,4] ⇒ 10^10 =  00 ⇒ 00^11 = 11 ⇒ 11 ^100 = 111  ⇒ 111^100 ⇒ 011 ⇒ 3

- Time Complexity: O(n) reduce 를 모든 요소에 대해서 진행하므로 O(n)
- Space Complexity: 추가 공간 사용이 없으니 O(1)

---

### 배운 것들 정리

- XOR 연산자. 수를 비트연산으로 계산할 수도 있다는 것을 알았다.