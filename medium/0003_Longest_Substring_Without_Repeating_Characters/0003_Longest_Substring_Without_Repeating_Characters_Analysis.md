# [알고리즘 문제풀이] **3. Longest Substring Without Repeating Characters**

# **3. Longest Substring Without Repeating Characters**

링크: https://leetcode.com/problems/longest-substring-without-repeating-characters/

### 문제 파악

(어떤 문제인가)

- string s 가 주어질 때 겹치는 문자가 없는 가장 긴 substr 을 구하라.
- 예시)

    ```
    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.
    
    Input: s = "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.
    Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
    ```


## 첫번째 풀이

```tsx
function lengthOfLongestSubstring(s: string): number {
    let set = new Set();
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        if (set.has(s[i])) {
            if (max < set.size) {
                max = set.size;
            }
            set.clear();
        }
        set.add(s[i]);
        
    }
    return max;
};
```

(설명)  substr 을 set 에 담아두고, 겹치는 문자가 나오면 그 이후로 탐색한다.

- Time Complexity: O(n)
- Space Complexity: O(n) 최대 N의 길이를 갖는 set

### (실패했다면? 틀린 이유)

(실패한 이유) “ “ 에 대해 0 반환. 1

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 두번째 풀이

```tsx
function lengthOfLongestSubstring(s: string): number {
    let set = new Set();
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        // console.log(s[i]);
        if (s[i] === " ") {
            max = 1;
        }
        if (set.has(s[i])) {
            if (max < set.size) {
                max = set.size;
            }
            set.clear();
        }
        set.add(s[i]);
        
    }
    // console.log(set);
    return max;
};
```

(설명) “ “ 에 대한 처리를 안한 것인줄 알고 그 경우에 대해서 하드코딩.. 하지만, 실제론 그게 문제가 아님

- Time Complexity:
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유) “c” 에 대해서도 동일하게 0 반환. 이유는 겹치는 문자 없이 그 자체로 비교해야 할 때를 고려하지 않았기 때문

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 세번째 풀이

```tsx
function lengthOfLongestSubstring(s: string): number {
    let set = new Set();
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        // console.log(s[i]);
        if (s[i] === " ") {
            max = 1;
        }
        if (set.has(s[i])) {
            if (max < set.size) {
                max = set.size;
            }
            set.clear();
        }
        set.add(s[i]);
        
    }
    return Math.max(max, set.size);
};
```

(설명) 마지막에 set 과 max 를 비교하여 반환

- Time Complexity:
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유)  (실패한 이유) dvdf ⇒ 2를 반환. 답은 3 (vdf)

중복 발생 이후 재탐색을 겹친 문자 뒤라고만 생각. 처음 문자의 위치를 저장했어야 한다.

이때까지 풀고 나니 전에 면접 때 봤던 문제라는 것을 기억… ⇒ 그때도 Map 을 이용해서 각 key 에 대한 index를 저장했지..

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 네번째 풀이

```tsx
function lengthOfLongestSubstring(s: string): number {
    let charMap = new Map();
    let max = 0;
    let i = 0;
    let substr = 0;
    while (i < s.length) {
        // console.log(s[i]);
        if (charMap.has(s[i])) {
            if (max < substr) {
                max = substr;
            }
            i = charMap.get(s[i]) + 1;
            charMap.clear();
            substr = 0;
        }
        else {
            charMap.set(s[i], i);
            substr++;
            i ++;
        }
    }

    return Math.max(max, substr);
}
```

(설명) Map 에 각 문자별로 첫 번째 위치를 저장. 중복 발생 이후엔 Map을 초기화하여 재탐색

중복 발생 시 중복 발생한 문자의 위치를 갖고 와서 그 다음 문자부터 탐색

- Time Complexity: O(n^2)
- Space Complexity: O(n) 최대 길이 n 의 Map 사용.

### (실패했다면? 틀린 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

충분히 깔끔한 풀이라고 생각..?

## 좋은 풀이

```tsx
function lengthOfLongestSubstring(s: string): number {
    if(!s) return 0
    
    const max = new Set([1])
    let dic = ''
    for(let i = 0; i<s.length; i++) {
        const char = s[i]
        const ind = dic.indexOf(char)

        // Not-Found
        if(ind === -1) {
            dic += char
            
            max.add(dic.length)
        } else {
            // Found
            dic = dic.slice(ind + 1).concat(char)
        }
    }

    return Math.max(...(max))
};
```

(설명) 문자열 저장을 map이 아닌 str 자체를 저장. 이미 중복되기 전에 값들은 중복이 없는 것을 알기에 내 윗 풀이에서 재탐색이 필요하진 않다. 커서는 그대로 유지하면서, 앞쪽 중복문자는 삭제, 뒷쪽 중복문자는 추가하면 된다.

- Time Complexity: O(n)
- Space Complexity: O(n) set으로 처리했기에 중복이 발생해도 O(n)

---

### 배운 것들 정리

- Set, Map 의 자료구조
- 핵심 요소: 중복 처리
    - 중복 발생 시 어디서부터 확인해야 하나? 어떤 정보를 갖고 가야하나?
        - 중복이 없는 기존의 부분, 커서 위치
