# **125. Valid Palindrome**

링크: [https://leetcode.com/problems/valid-palindrome/description/](https://leetcode.com/problems/valid-palindrome/description/)

### 문제 파악

(어떤 문제인가)

- 주어진 string에서 숫자, 알파벳만을 남겼을 때 앞 뒤로 구성이 같은 단어인지 확인하라
    - nonalphnumeric character 제거

## 첫번째 풀이

```jsx
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const regex = /[^a-zA-Z\d]/ig
    var str = s.replaceAll(regex, '').toLowerCase();
    if (str==="") {
        return true;
    }
    else {
        if (str[0]===str[str.length-1]) {
            return isPalindrome(str.slice(1,str.length-1));
        }
        else return false;
    }
};
```

(설명) regex 를 이용해서 s 변환

- Time Complexity: O(n) string 전체에 대해 돌기 때문
- Space Complexity: str을 매번 생성 O(n)

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e7825771-d841-4522-a551-60953c457b60/Untitled.png)

(더 나은 풀이가 있을 수 있을지 고민)

- 현재로선 str 변환이 매번 생기기 때문에 해당과정을 helper Function으로 빼내는게 더 나을 것.

## 두번째 풀이

```jsx
/**
 * @param {string} s
 * @return {boolean}
 */

var checkPalindrome = function(str) {
    if (str==="") {
        return true;
    }
    else {
        if (str[0]===str[str.length-1]) {
            return checkPalindrome(str.slice(1,str.length-1));
        }
        else return false;
    }
}

var isPalindrome = function(s) {
    const regex = /[^a-zA-Z\d]/ig
    var str = s.replaceAll(regex, '').toLowerCase();
    return checkPalindrome(str);
};
```

(설명) checkPalindrome 을 별도 helper function 으로 분리

- Time Complexity:
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d7f7e83b-cf9d-4063-a3a4-43f2b424f2fe/Untitled.png)

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

```jsx
function isPalindrome(s) {
    const regex = /[^a-zA-Z\d]/ig;
    const modifiedString = s.replace(regex, "").toLowerCase();
    let left = 0;
    let right = modifiedString.length - 1;
    while (left < right) {
        if (modifiedString[left] !== modifiedString[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
```

(설명) Iteration 이용, 커서 2개를 활용하는 전형적인 예시

- Time Complexity:  O(n)
- Space Complexity: O(1) 같은 str 내에서 계속 확인할 수 있다.

## 좋은 풀이 (Functional Programming)

```jsx
const isPalindrome = s => {
const regex = /[^a-zA-Z\d]/ig;
const modifiedString = s.replace(regex, "").toLowerCase();
return modifiedString.split('').every((char, i) => char === modifiedString[modifiedString.length - i - 1]);
}
```

- Array.prototype.every 사용 ⇒ 모든 원소가 조건문을 만족하면, true 반환. 하나라도 실패 시 false 반환

---

### 배운 것들 정리

- regex 를 이용한 string 정리
    - regex  /[^a-zA-Z\d]/ig 는 a-z, A-Z (알파벳) \d (숫자) 를 ^(제외한) 모든 것 (\ig) 을 찾아내란 뜻.