# [알고리즘 문제풀이] **118. Pascal's Triangle**

# **118. Pascal's Triangle**

링크: [https://leetcode.com/problems/pascals-triangle/description/](https://leetcode.com/problems/pascals-triangle/description/)

### 문제 파악

(어떤 문제인가)

- 열 수가 주어졌을 때, 각 열의 파스칼 삼각형 구성 숫자를 호출하시오
    - numRows = 1 ⇒ [[1]]
    - numRows = 2 ⇒ [[1], [1,1]]

  와 같은 형태로 호출


## 첫번째 풀이

```jsx
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows == 1) {
        return [[1]];
    }
    else {
        var previous = generate(numRows-1);
        var last = [1];
        var previousLast = previous[previous.length-1];
        previousLast.forEach((e, index) => {
            if (index !== 0) {
                return last.push(e + previousLast[index-1]); 
            }
        });
        last.push(1);
        return previous.concat([last]);
    }
}
```

(설명) 재귀함수로 이전 열까지의 결과를 찾고, 마지막 열에서의 아이템들을 더해서 마지막 열 값을 만들어준다.

- Time Complexity:
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a9ea04b5-c8e8-4b97-80fd-c7e9238b8e76/Untitled.png)

(더 나은 풀이가 있을 수 있을지 고민)

- 재귀로 하기에는 코드 실행 횟수가 많아지는 것 같다. 하위 코드까지 갔다왔다가 다시 실행해야 하는 구조..?

## 좋은 풀이

```java
class Solution {
    public List<List<Integer>> generate(int numRows) {
        if(numRows == 0) return new ArrayList();
        List<List<Integer>> res = new ArrayList();

        for(int i = 1; i <= numRows; i++){
            List<Integer> row = new ArrayList();
            for(int j = 0 ; j < i ; j++){
                if(j == 0  || j== i-1){
                    row.add(1);
                }else{
                    row.add(res.get(i-2).get(j) + res.get(i-2).get(j-1));
                }       
            }
            res.add(row);
        }
        return res;
    }
}
```

(설명) 재귀함수가 아닌 dynamic programming 으로 문제 해결. res 배열의 마지막 값만 확인하면 된다는 것을 이용해서 res 점차 확장시켜나가면서, 새로운 아이템 추가. 모든 row에 대해 동일한 로직이 반복됨을 이용

- Time Complexity:  O(n^2)
- Space Complexity:

---

### 배운 것들 정리

- Dynamic Programming
- 재귀함수