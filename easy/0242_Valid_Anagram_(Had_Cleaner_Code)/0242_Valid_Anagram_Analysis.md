# [알고리즘 문제풀이] **242. Valid Anagram**

# 242. Valid Anagram

링크: [https://leetcode.com/problems/valid-anagram/](https://leetcode.com/problems/valid-anagram/)

### 문제 파악

(어떤 문제인가)

- 두 개의 string s, t 가 주어질 때 t 가 s의 재조합으로 이뤄진 문자열인지 확인하라.

## 첫번째 풀이

```tsx
function isAnagram(s: string, t: string): boolean {
    const myMap1 = new Map<string, number>();
    const myMap2 = new Map<string, number>();
    if (s.length !== t.length) return false;
    for (let i=0; i < s.length; i++) {
        const currs = myMap1.get(s[i]);
        const currt = myMap2.get(t[i]);
        if (currs) {
            myMap1.set(s[i], currs + 1);
        }
        else {
            myMap1.set(s[i], 1);
        }
        if (currt) {
            myMap2.set(t[i], currt + 1);
        }
        else {
            myMap2.set(t[i], 1);
        }
    }
    for (const [key, value] of myMap1) {
        if (value !== myMap2.get(key)) return false;
    }
    return true;
};
```

(설명) 결국은, 각 단어 당 개수가 중요한 것이므로 바로 key - value pair를 생각했다.

그리고 최근에 Map이 일반 객체보다는 더 연산이 효율적이라는 아티클을 읽어서, Map 을 사용해봤다.

- Time Complexity: O(n). 두 개의 for 문
- Space Complexity: O(n) 각 길이만큼

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민) 조금 더 깔끔한 코드? if, else가 좀 많다.

## 두번째 풀이

```tsx
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }
    const counts1 = new Map<string, number>();
    const counts2 = new Map<string, number>();
    for (let i = 0; i < s.length; i++) {
        counts1.set(s[i], (counts1.get(s[i]) || 0) + 1);
        counts2.set(t[i], (counts2.get(t[i]) || 0) + 1);
    }
    for (const [key, value] of counts1) {
        if (value !== counts2.get(key)) {
            return false;
        }
    }
    return true;
```

(설명) chatGPT 가 다듬어준 코드. if, else 문을 제거해줬다.

## 좋은 풀이

```jsx
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }
    const counts = new Map<string, number>();
    for (let i = 0; i < s.length; i++) {
        counts.set(s[i], (counts.get(s[i]) || 0) + 1);
        counts.set(t[i], (counts.get(t[i]) || 0) - 1);
    }
    for (const count of counts.values()) {
        if (count !== 0) {
            return false;
        }
    }
    return true;
}
```

(설명) 하나의 map만을 이용. s[i] 에 대해서는 +1을, t[i] 에 대해서는 -1 을 적용하여 , value 가 모두 0인지 확인! 참신했다.

확인해보니, leetcode solution에도 비슷한 방법이 array로 구현되어 있었다.

- Time Complexity:
- Space Complexity:

---

### 배운 것들 정리

- Map 활용.
- 보다 효율적인 삼항연산자. 그리고 보합의 개념 적용.