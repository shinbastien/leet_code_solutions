# [알고리즘 문제풀이] **5. Longest Palindromic Substring**

# **5. Longest Palindromic Substring**

링크: https://leetcode.com/problems/longest-palindromic-substring/description/

### 문제 파악

(어떤 문제인가)

- 주어진 문자열 내 가장 긴 palindrome (회문) substring 을 찾아서 반환하라.

```
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
```

## 첫번째 풀이

```tsx
function longestPalindrome(s: string): string {
    let start = 0;
    let end = s.length -1;
    let curr = 0;
    let res = "";
    let substr = "";

    while (curr < end || start < s.length) {
        if (curr >= end) {
            if (curr === end) {
                substr = substr + s[curr] + substr.split("").reverse().join("");
            }
            else {
                substr += substr.split("").reverse().join("");
            }
            if (res.length < substr.length) {
                res = substr;
            }
            start++;
            end = s.length -1;
            curr = start;
            substr = "";
        }
        else if(s[end] === s[curr]) {
            substr += s[curr];
            curr++;
            end--;

        }
        else {
            end--;
        }
    }

    return res;
};
```

(설명) 기본 접근: start 와 end 를 두고 커서 위치를 기준으로 대칭성 확인. substr 를 이식.

start 를 기준으로 문자가 같지 않으면 end를 오른쪽에서 왼쪽으로 한 칸씩 이동 시킨다.

- Time Complexity: O(n^2)
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유) "aacabdkacaa”

aacabacaa 로 반환 ⇒ aca 가 나와야 함.

substr 이 있을 때, 중간에 palindrome 이 아니면 처음부터 다시 시작하는 것을 고려하지 않음.

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 두번째 풀이

```tsx
function longestPalindrome(s: string): string {
    let start = 0;
    let end = s.length -1;
    let curr = 0;
    let res = "";
    let substr = "";

    while (curr < end || start < s.length) {
        if (curr >= end) {
            if (curr === end) {
                substr = substr + s[curr] + substr.split("").reverse().join("");
            }
            else {
                substr += substr.split("").reverse().join("");
            }
            if (res.length < substr.length) {
                res = substr;
            }
            start++;
            end = s.length -1;
            curr = start;
            substr = "";
        }
        else if(s[end] === s[curr]) {
            substr += s[curr];
            curr++;
            end--;

        }
        else {
            if (substr === "") {
                end--;
            }
            else {
                substr = "";
                curr = start;
            }
        }
    }

    return res;
};
```

(설명) substring 이 palindrome 이 아니게 되었을 때 초기화하는 것을 넣어주고, start는 맨 처음 end는 마지막 위치에서부터 다시 보게 함.

- Time Complexity:
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유)"xaabacxcabaaxcabaax”

에 대해서, xaabacxc // axcabaax 여기서 c 와 a 가 대칭이 아님. 왼쪽은 초기화되는 반면, 오른쪽은 a 에서 끝난 위치에서 end 가 시작함. 오른쪽 커서도 초기화 해줄 필요가 있음을 확인.

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 세번째 풀이

```tsx
function longestPalindrome(s: string): string {
    let start = 0;
    let end = s.length -1;
    let currs = start;
    let curre = end
    let res = "";
    let substr = "";

    while (currs < curre || start < end) {
        if (currs >= curre) {
            if (currs === curre) {
                substr = substr + s[currs] + substr.split("").reverse().join("");
            }
            else {
                substr += substr.split("").reverse().join("");
            }
            if (res.length < substr.length) {
                res = substr;
            }
            start++;
            end = s.length -1;
            currs = start;
            curre = end;
            substr = "";
        }
        else if(s[curre] === s[currs]) {
            substr += s[currs];
            currs++;
            curre--;

        }
        else {
            if (substr === "") {
                curre--;
            }
            else {
                substr = "";
                end--;
                currs = start;
                curre = end;
            }
        }
    }

    return res;
};
```

(설명) 오른쪽 커서도 초기화를 넣어줌.

- Time Complexity:
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유) "a” 단일문자의 경우, while 문으로 들어가지 않음. “” 반환됨

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 네번째 풀이

```tsx
function longestPalindrome(s: string): string {
    let start = 0;
    let end = s.length -1;
    let currs = start;
    let curre = end
    let res = "";
    let substr = "";
    
    if (start === end) {
        return s[0];
    }

    while (currs < curre || start < end) {
        if (currs >= curre) {
            if (currs === curre) {
                substr = substr + s[currs] + substr.split("").reverse().join("");
            }
            else {
                substr += substr.split("").reverse().join("");
            }
            if (res.length < substr.length) {
                res = substr;
            }
            start++;
            end = s.length -1;
            currs = start;
            curre = end;
            substr = "";
        }
        else if(s[curre] === s[currs]) {
            substr += s[currs];
            currs++;
            curre--;

        }
        else {
            if (substr === "") {
                curre--;
            }
            else {
                substr = "";
                end--;
                currs = start;
                curre = end;
            }
        }
    }

    return res;
};
```

(설명) 단일 문자의 경우에 대한 확인을 while문 이전에 넣어줌.

- Time Complexity:
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유) "a” 단일문자의 경우, while 문으로 들어가지 않음. “” 반환됨

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민) 성공! 다만. 커서가 과도하게 많은 느낌. 시작 위치, 끝위치, 현재 왼쪽 위치, 현재 오른쪽 위치 등 너무 많은 커서가 있어 정보 확인이 어렵다.

## 좋은 풀이

```tsx
function longestPalindrome(s: string): string {
  if (!s || s.length <= 1) { return s }
  let longestPalindrome = s.substring(0, 1)

  for (let i = 0; i < s.length; i++) {
    [expand(s, i, i), expand(s, i, i + 1)].forEach((maybeLongest) => {
      if (maybeLongest.length > longestPalindrome.length) {
          longestPalindrome = maybeLongest
      }
    })
  }

  return longestPalindrome
}

function expand(s: string, begin: number, end: number): string {
  while (begin >= 0 && end <= s.length - 1 && s[begin] === s[end]) {
    begin--
    end++
  }

  return s.substring(begin + 1, end)
}
```

(설명) 접근 방식: 시작점을 기준으로, 좌우로 확장하면서 palindrome 찾기를 진행.

expand 함수는 좌우를 확장하면서 palindrome인 substring을 반환하는 함수

위쪽 iteration은 시작 위치를 한 칸씩 옮겨주는 커서 역할.

expand(s, i, i) , expand(s, i, i+1) ⇒ “bab” , “baab” 의 상황 각각에 대한 대응.

나의 풀이보다는 반복이 적은게 시작 위치를 기준으로 확장 하는 것이기에 좁히는 것보다 거치는 문자 수가 적음.

- Time Complexity: O(n^2)
- Space Complexity:

---

### 배운 것들 정리

- 양쪽 커서 옮기기에 대한 이해: 기준 위치 // 현재 위치 두 종류의 커서가 필요.
- palindrome 확인은 작게 시작해서 확장하자!
