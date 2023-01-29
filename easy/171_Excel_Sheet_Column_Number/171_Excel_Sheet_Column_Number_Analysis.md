# **171. Excel Sheet Column Number**

링크: [https://leetcode.com/problems/excel-sheet-column-number/description/](https://leetcode.com/problems/excel-sheet-column-number/description/)

### 문제 파악

(어떤 문제인가)

- 주어진 엑셀 행 번호 string 이 있을 때, 몇번째 행인지 숫자로 반환하라.
    - 예시 A ⇒ 1, AB ⇒ 28

## 첫번째 풀이

```tsx
function titleToNumber(columnTitle: string): number {
    var res = 0;
    for (let i = columnTitle.length-1; i>=0; i--) {
        res += (columnTitle.charCodeAt(i)-64)*Math.pow(26, columnTitle.length-1-i);
    }
    return res;
};
```

(설명) 이전에 168번에서 진행한 것과 유사한 방법. 진법의 개념 적용.

- Time Complexity: O(n)
- Space Complexity: O(1)

## 좋은 풀이

```jsx
const titleToNumber = (columnTitle) => {
  let corresponding_number = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    const current_letter = columnTitle[i]; // current Letter
    const current_number = current_letter.charCodeAt(0) - 64; // corresponding number 
    // here we are subtracting 64 because we aer going to get only Capital letter so the charCodeAt() returns the ASCII value of the character.
    corresponding_number +=
      current_number * Math.pow(26, columnTitle.length - i - 1);
  }
  return corresponding_number;
};
```

(설명) 내 풀이와 동일하다.

- Time Complexity:
- Space Complexity:

---

### 배운 것들 정리

- string.charCodeAt(index) 메소드?? 이번 문제는 168번에서 경험해서 그렇고, 자리올림을 크게 신경 쓸 필요가 없었기 때문에 비교적 쉬었다.