# [알고리즘 문제풀이] **290. Word Pattern**

# **290. Word Pattern**

링크: [https://leetcode.com/problems/word-pattern/description/](https://leetcode.com/problems/word-pattern/description/)

### 문제 파악

(어떤 문제인가) pattern 과 string이 주어질 때 해당 string과 pattern 이 대응되는지 확인하라

- 예시)

    ```
    Input: pattern = "abba", s = "dog cat cat dog"
    Output: true
    
    Input: pattern = "abba", s = "dog cat cat fish"
    Output: false
    
    Input: pattern = "aaaa", s = "dog cat cat dog"
    Output: false
    ```


## 첫번째 풀이

```tsx
function wordPattern(pattern: string, s: string): boolean {
    const patterns = pattern.split("");
    const strings = s.split(" ");
    const patternMap = new Map();
    
    if (new Set(patterns).size !== new Set(strings).size) return false;
    for (let i = 0; i < patterns.length; i++) {
        if (patternMap.has(patterns[i])) {
            if (patternMap.get(patterns[i]) !== strings[i]) {
                return false;                
            }
        }
        else {
            patternMap.set(patterns[i], strings[i]);
        }
    }

    return true;
};
```

(설명)  Map을 생성하여 Pattern의 각 캐릭터를 key 로 하여 string의 단어와 대응한다. 이때 이미 값이 있을 경우 false 반환. 또한, Set을 하여 pattern의 갯수와 strings의 단어 갯수가 동일하지 않다면, 일대일 대응이 아닌 것이므로 false 반환.

- Time Complexity: O(n) for 문 한 번 돌 때 최대 n 번
- Space Complexity: O(n) n개짜리 map과 set 생성

### (실패했다면? 틀린 이유)

(실패한 이유) set의 갯수만 확인하고, 원래 패턴과 string의 단어 갯수가 동일한지는 확인하지 않았다. edge case 대응 미흡

```
Input: "aba", "cat cat cat dog"
Expected: false
Returned: true
```

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 두번째 풀이

```tsx
function wordPattern(pattern: string, s: string): boolean {
    const patterns = pattern.split("");
    const strings = s.split(" ");
    const patternMap = new Map();
    if (patterns.length !== strings.length) return false;
    if (new Set(patterns).size !== new Set(strings).size) return false;
    
    for (let i = 0; i < patterns.length; i++) {
        if (patternMap.has(patterns[i])) {
            if (patternMap.get(patterns[i]) !== strings[i]) {
                return false;                
            }
        }
        else {
            patternMap.set(patterns[i], strings[i]);
        }
    }

    return true;
};
```

(설명) list 자체의 갯수가 맞는지도 먼저 확인하여 false 반환

- Time Complexity:
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 좋은 풀이

```tsx
var wordPattern = function(pattern, s) {

    // place words into an array
    sArr = s.split(' ')

    // if the pattern is lopsided return false
    if (pattern.length !== sArr.length) return false
    
    // create a key map and value map
    /* as a caveat, we can't use one map here
     * in the edge-case that a pattern key 
     * and values in s contain the same characters
     * 
     * eg. pattern = 'abc', s = 'c b a'
     */
    const kMap = {} // key map
    const vMap = {} // value map

    for (let i = 0; i < pattern.length; i++) {
        const key = pattern[i] // letter at index i in pattern
        const value = sArr[i] // word at index i in s 

        // if key or value already exists and does not correspond to
        // eachother, return false because we don't have a valid pattern
        if (key in kMap || value in vMap) {
            if (kMap[key] !== value) return false
            if (vMap[value] !== key) return false
        } else {
            kMap[key] = value
            vMap[value] = key
        }
    }

    return true // pattern is valid
};
```

(설명) 각각을 Key로 하는 map 생성

- Time Complexity:
- Space Complexity:

---

### 배운 것들 정리

- Map 과 Set의 활용
- 실제로 .. 채용 면접 과정에서 마주친 문제.. 그때도 이렇게 풀었으나 이걸 미리 풀고 갔으면 조금이라도 더 빨리 풀었겠다는 생각이 ㅜㅜㅜ
    - 면접장에서는 아래와 같이 2개의 Map 을 사용해서 해결