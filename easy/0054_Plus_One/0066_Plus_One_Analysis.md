# [알고리즘 문제풀이] 66. Plus One

# 66. Plus One

링크: [https://leetcode.com/problems/plus-one/](https://leetcode.com/problems/plus-one/)

### 문제 파악

(어떤 문제인가)

- 어떤 수가 각 자릿수로 분리되어 배열을 이루고 있다.
    - 1234 ⇒ [1, 2, 3, 4] 와 같은 방식
- 이때 끝에 1을 더한 배열을 나열해라
    - 고민할 점은 [9] ⇒ [10] 으로 변환되어야 한다는 것

## 첫번째 풀이

```jsx
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if (digits[0] == 9 && digits.length == 1) {
        return [1, 0]
    }
    else if (digits[digits.length-1] == 9) {
        digits[digits.length-1] = 0
        digits.pop()
        rv = plusOne(digits)
        rv.push(0)
        return rv
        
    }
    else {
        digits[digits.length-1] += 1
        return digits
    }
};
```

(설명)

- 9일때와 아닐때로 우선 구분
    - 끝자리가 9인 것과 앞 자리가 9인 것을 구분
        - 끝자리가 9인 경우 0으로 바꿔주고 앞 부분들에 plusOne을 그대로 적용
            - 이후 0을 push 해준다.
        - 앞자리가 9인경우 [1,0]으로 변경
    - 9가 아닐때는 1을 더해주고 반환한다.
- Time Complexity: O(n)
- Space Complexity: O(n^2) ⇒ 계속 무의미한 array 를 생성한다는 면에서 좋지 않음

### (실패했다면? 틀린 이유)

 (실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 두번째 풀이

```jsx

```

(설명)

- Time Complexity:
- Space Complexity:

### (실패했다면? 틀린 이유)

 (실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 세번째 풀이

```jsx

```

(설명)

- Time Complexity:
- Space Complexity:

### (실패했다면? 틀린 이유)

 (실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 좋은 풀이

```python
def plusOne(digits):
    digits[-1] += 1
    for i in range(len(digits)-1, 0, -1):
        if digits[i] != 10:
            break
        digits[i] = 0
        digits[i-1] += 1
    
    if digits[0] == 10:
        digits[0] = 0
        return [1] + digits
    return digits
```

(설명)

- Iteration 이용. 맨 뒷자리에 1을 더해준 채로 시작해 거꾸로 올라오면서 10이면 0으로 바꿔주고 앞 자리수에 1을 더해주는 방식으로, 10인지 아닌지를 확인.
    - 맨 앞자리가 10이면 0과 함께 맨 앞자리에 1자리를 하나 확보한다.
- Time Complexity:  O(n)
- Space Complexity:

---

### 배운 것들 정리

- (자료구조 등)