# [알고리즘 문제풀이] **119. Pascal's Triangle II**

# 119. Pascal’s Triangle II

링크: [https://leetcode.com/problems/pascals-triangle-ii/description/](https://leetcode.com/problems/pascals-triangle-ii/description/)

### 문제 파악

(어떤 문제인가)

- 숫자 n이 주어졌을 때, 파스칼 삼각형 n번째 줄 (인덱스라서 0부터 셈 시작) 에 있는 수를 호출하라
    - 0  ⇒ [1], 3 ⇒ [1, 3, 3, 1]
- **Follow up:**Could you optimize your algorithm to use only `O(rowIndex)` extra space?
    - 즉, O(n) 만큼만의 추가 공간을 사용해서 할 수 있겠느냐?

## 첫번째 풀이

```jsx
var getRow = function(rowIndex) {
    var res = [];
    var facs = [1];
    for (i=1;i<=rowIndex;i++) {
        facs.push(facs[i-1]*i);
        res.push(0);
    }
    for (r=0;r<=rowIndex/2;r++) {
        var val = facs[rowIndex] / facs[r] / facs[rowIndex-r];
        res.splice(r, 1, val);
        res.splice(rowIndex-r, 1, val);
    }
    return res;
};
```

(설명) 먼저 팩토리얼들을 모두 계산해놓고 배열에 저장.

이후 중복을 방지하기 위해, 절반 이하에 대해서만 for 문을 실행하여, res 배열 내 값 변경

- Time Complexity: O(n) + O(n/2) 만큼의 시간 복잡도
- Space Complexity: 나는 n개짜리 배열을 총 2개 생산했으니 O(2n) 의 space 를 사용했다.

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b51f07d4-5d94-497f-a139-438feaf40e62/Untitled.png)

(더 나은 풀이가 있을 수 있을지 고민)

- 사실, for 문을 사용하는 것을 좋아하지 않는데 for 문만을 이용해서 문제를 풀었기 때문에, 다소 찝찝함이 있다.
- 만약 재귀적으로 푼다면? ⇒ 앞 결과물의 마지막 원소는 ${n! \over (n-r+1)!r-1!}$ 이고, 현재 내가 추가해줘야 할 원소는 ${n! \over (n-r)!r!}$ 이므로,  $n+1-r \over r$을 매 번 곱해주는 방식의 풀이도 작성 가능하다.

## 좋은 풀이

```java
class Solution {
public:
    vector<int> getRow(int rowIndex) {
        vector<int> A(rowIndex+1, 0);
        A[0] = 1;
        for(int i=1; i<rowIndex+1; i++)
            for(int j=i; j>=1; j--)
                A[j] += A[j-1];
        return A;
    }
};
```

(설명) 한 배열 내에서 끝내고, 수학적 배경을 사용하지 않은 풀이. 하나의 배열에 첫번째 줄부터의 파스칼 삼각형을 채워나가는 방식. 새로운 줄이 되었을 경우, A[j] += A[j-1]; 에 따라서 내 원래 값 + 앞 index 값으로 변경

- 또한, 이것을 뒤에서 앞으로 오는 방식으로 해서 충돌이 없게 했다.
- Time Complexity: O(n^2)
- Space Complexity: O(n)

---

### 배운 것들 정리

- Iteration
- Dynamic programming