# [알고리즘 문제풀이] **344. Reverse String**

# **344. Reverse String**

링크: https://leetcode.com/problems/reverse-string/

### 문제 파악

(어떤 문제인가)

- string 배열이 주어질 때, 해당 배열을 거꾸로 돌려서 반환하라.
- in-place, 즉 O(1) 메모리로 해결하라.
- 예시)
    - [h, e, l, l, o] ⇒ [o, l, l ,e, h]

## 좋은 풀이

```tsx
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    const len = s.length;
    const middle = Math.floor(s.length / 2);
    let temp = null;
    for (let i = 0; i < middle; i++) {
        temp = s[i];
        s[i] = s[len - i - 1];
        s[len - i - 1] = temp;
    }
};
```

(설명) 힌트만 보려다가 답을 봐버렸다.. 핵심은 중앙까지만 indexing 하는 것. 항상 중앙과 대응 처리가 헷갈린다. 중앙은 [n/2] 이고, 끝은 [n - mid- 1] 로 처리

- Time Complexity: O(n/2) ⇒ O(n)
- Space Complexity: O(1)

---

### 배운 것들 정리

- 늘 reverse() 를 썼는데, 이 정도는 라이브 코테에서도 기초적인 내용으로 충분히 낭로 수 있을 것 같아 아예 외워두는게 좋다.