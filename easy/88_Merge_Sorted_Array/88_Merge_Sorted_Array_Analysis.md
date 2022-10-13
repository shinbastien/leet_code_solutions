# [알고리즘 문제풀이] 88. Merge Sorted Array

# 88.Merge Sorted Array

링크: [https://leetcode.com/problems/merge-sorted-array/](https://leetcode.com/problems/merge-sorted-array/)

### 문제 파악

(어떤 문제인가)

- 두 개의 정렬된 배열 nums1, nums2 가 있을 때,
-

## 첫번째 풀이

```jsx
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    for (i=0; i<n; i++) {
        nums1[m+i] = nums2[i];
    }

    var index = 0;
    var cursor = 0;
    while (index < n && cursor < m+n) {
        if (nums1[m+index] >= nums1[cursor]) {
            cursor ++;
        }
        else {
            var a = nums1[cursor];
            nums1[cursor] = nums1[m+index];
            nums1[m+index] = a;
            cursor = m+index;
            index += 1;
        }
        
    }
    
};
```

(설명) nums1 의 0들을 다 nums2로 바꾸고, nums1 의 수들과 비교하면서 switching 진행

- Time Complexity:
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유) [4, 5, 6, 0, 0, 0] [1, 2, 3] 에 대해 오류 발생

⇒ [1, 5, 6, 2, 3, 4] 로 반환

오른쪽 배열에 더 작은 수들이 있을 때 불필요한 switching 이 발생하면서 틀림

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 두번째 풀이

```jsx
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var index = 0;
    var cursor = 0;
    while (cursor < n) {
        var item = nums2[cursor];
        console.log(item);
        while (index < m+cursor) {
            if (nums1[index] > item) {
                break;
            }
            index++;
        }
        nums1.splice(index, 0, item);
        nums1.pop();
        cursor++;
    }
};
```

(설명) 커서를 두 개를 설정해서, nums2 의 원소를 하나씩 nums1에 넣은 후, 이전 원소가 들어간 index 이후로부터 다음 원소가 들어갈 위치를 탐색

- Time Complexity: O((m+n)*n)
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 세번째 풀이

```jsx
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var index = 0;
    var cursor = 0;
    while (index < m+n) {
        var item = nums2[cursor];
        if (nums1[index] > item || index >= m+cursor) {
            nums1.splice(index, 0, item);
            nums1.pop();
            cursor++;
            continue;
        }
        index++;
    }
};
```

(설명) 두번째 풀이가 틀린 것은 아니었으나, O(m+n)으로 해결하기 위해, 세번째 풀이 작성

while 문을 하나로 줄이고, 조건문을 더 엄격하게 세워서 확인했다.

- Time Complexity: O(m+n)
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 좋은 풀이

```jsx
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  var insertPositionOfNums1 = m + n - 1;
  m -= 1;
  n -= 1;
  while (n >= 0) {
    if (nums1[m] > nums2[n]) {
      nums1[insertPositionOfNums1] = nums1[m];
      m -= 1;
    } else {
      nums1[insertPositionOfNums1] = nums2[n];
      n -= 1;
    }
    insertPositionOfNums1 -= 1;
  }
}
```

(설명) m, n 값을 각각 커서로 뒤에서부터 확인하면서 앞으로 채워가는 방식의 풀이.

삽입위치를 한 칸씩 당겨가며 nums1 이 더 클 때는, m만 움직이고 nums2가 더 클때는 다음 원소를 찾기 위해 n을 움직이는 것이 주요.

- Time Complexity: while문은 O(n) 이지만, 안에서의 동작이 최대 m+n번 발생하기 때문에 O(m+n)
- Space Complexity:

---

### 배운 것들 정리

- (자료구조 등)