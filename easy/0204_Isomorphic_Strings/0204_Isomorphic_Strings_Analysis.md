# [알고리즘 문제풀이] **205. Isomorphic Strings**

# **205. Isomorphic Strings**

링크: [https://leetcode.com/problems/isomorphic-strings/](https://leetcode.com/problems/isomorphic-strings/)

### 문제 파악

주어진 string s 가 t로 동형 구조의 string인지 판단하라.

- s의 각 문자가 t의 각 문자로 대체되는지 확인
    - 예시
        - egg ⇒ add (true)
            - e → a, g→ d로 대체되므로 true
        - foo ⇒ bar (false)
            - f ⇒ b, o ⇒ a,  o⇒ r . 같은 문자 o 에 대해 두 가지 문자가 적용되므로 false
- 한 문자는 한 문자에게만 대응되며, 두 개의 서로 다른 문자가 같은 문자에 대응될 수 없다.

## 첫번째 풀이

```tsx
function isIsomorphic(s: string, t: string): boolean {
 var hash: {[key: string]: string}  = {};

 for (let i= 0; i<s.length; i++) {
     if (!hash[s[i]]) {
         hash[s[i]] = t[i];
     }
     else if (hash[s[i]] !== t[i]) {
         return false;
     }
 }
 return true;
 };
```

(설명) hash map 을 만들어서 s 의 각 문자에 대한 key- value 를 저장한다. 이때? 이전에 나와서 저장된 글자에 대해 t의 해당 위치의 문자가 같지 않으면 false 를 반환

- Time Complexity: O(n)
- Space Complexity: O(n)

### (실패했다면? 틀린 이유)

(실패한 이유) Input: "badc" ⇒ output: "baba" : false 여야 하는데 true 반환

- 두 문자가 같은 Value 를 가질 수 없는 것을 확인하지 않음

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 두번째 풀이

```tsx
function isIsomorphic(s: string, t: string): boolean {
 var hash: {[key: string]: string}  = {};

 for (let i= 0; i<s.length; i++) {
     if (!hash[s[i]]) {
         hash[s[i]] = t[i];
     }
     else if (hash[s[i]] !== t[i]) {
         return false;
     }
 }
 if (new Set(Object.values(hash)).size !== Object.keys(hash).length) return false;
 return true;
 };
```

(설명) hash value 중에 같은 값이 있으면, set 으로 만들었을 때 개수가 줄어들 것이므로, key 수와 같지 않다면, 다른 key 에 대해 겹치는 value 가 있는 것이므로 false 반환.

- Time Complexity:  O(n)
- Space Complexity: O(n + n) ⇒ O(n)

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 좋은 풀이

```jsx
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const createStringCode = (s) => {
    let map = new Map();
    let id = 0;
    let str = '';
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            map.set(s[i], id);
            str = str + id + '.';
            id += 1;
        } else {
            const key = map.get(s[i]);
            str = str + key + '.';
        }
    }
    return str;
}

const isIsomorphic = (s, t) => {
    return createStringCode(s) === createStringCode(t);
};

// ChatGPT 풀이

function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    const stMap: {[key: string]: string} = {};
    const tsMap: {[key: string]: string} = {};

    for (let i = 0; i < s.length; i++) {
        const sChar = s[i];
        const tChar = t[i];

        if (!stMap[sChar] && !tsMap[tChar]) {
            stMap[sChar] = tChar;
            tsMap[tChar] = sChar;
        } else if (stMap[sChar] !== tChar || tsMap[tChar] !== sChar) {
            return false;
        }
    }

    return true;
}
```

(설명) 비슷한 원리.  built-in 구조인 map 을 이용. 혹은 chatGPT는 두 가지 map 을 활용해서 set 을 안 쓰도록 했다.

- Time Complexity:  O(n)
- Space Complexity: O(n)

---

### 배운 것들 정리

- Hash map 이용