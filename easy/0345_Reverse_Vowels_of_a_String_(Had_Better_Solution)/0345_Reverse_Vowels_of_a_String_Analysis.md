# [알고리즘 문제풀이] **345. Reverse Vowels of a String**

# **345. Reverse Vowels of a String**

링크: https://leetcode.com/problems/reverse-vowels-of-a-string/

### 문제 파악

(어떤 문제인가)

- 문자열의 모음만 순서를 뒤집어라. 모음은, 대문자 소문자 모두 포함할 수 있다.
- 예시)
    - [h, e, l, l, o] ⇒ [h, o, l, l, e]

## 첫번째 풀이

```tsx
function reverseVowels(s: string): string {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const strVowels = [];
    const indices = [];
    let strArr = s.split('');
    for (let i = 0; i < strArr.length; i++) {
        if (vowels.includes(strArr[i])) {
            strVowels.push(strArr[i]);
            indices.push(i);
        }
    }
    const vowelsLen = strVowels.length;
    const vowelMid = Math.floor(vowelsLen / 2);
    let temp = null;
    for (let i = 0; i < vowelMid; i++) {
        temp = strVowels[i];
        strVowels[i] = strVowels[vowelsLen - i - 1];
        strVowels[vowelsLen - i - 1] = temp;
    }
    console.log(strVowels);
    for (let i = 0; i < indices.length; i++) {
        strArr[indices[i]] = strVowels[i];
    }
    return strArr.join('');
};
```

(설명) 먼저 문자열에서 모음들의 위치를 찾아내고, 모음만 먼저 빼낸다. 그 다음에는 344 번에서 한대로, 모음의 위치를 다 바꿔주고, 다시 원 문자열에 넣어준다.

- Time Complexity: O(3n) ⇒ O(n)
- Space Complexity: O(n) 새로운 배열 3개

### (실패했다면? 틀린 이유)

(실패한 이유)

- ‘aA’ ⇒ ‘a’ 대문자 대응 X

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 두번째 풀이

```tsx
function reverseVowels(s: string): string {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const strVowels = [];
    const indices = [];
    let strArr = s.split('');
    for (let i = 0; i < strArr.length; i++) {
        if (vowels.includes(strArr[i])) {
            strVowels.push(strArr[i]);
            indices.push(i);
        }
    }
    const vowelsLen = strVowels.length;
    const vowelMid = Math.floor(vowelsLen / 2);
    let temp = null;
    for (let i = 0; i < vowelMid; i++) {
        temp = strVowels[i];
        strVowels[i] = strVowels[vowelsLen - i - 1];
        strVowels[vowelsLen - i - 1] = temp;
    }
    for (let i = 0; i < indices.length; i++) {
        strArr[indices[i]] = strVowels[i];
    }
    return strArr.join('');
};
```

(설명) 대문자 대응 추가.

- Time Complexity:
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

- 이렇게 많은 배열이 필요할까..? 배열로 뽑아내는 걸 줄일 수 있을 것 같다.

## 좋은 풀이

```tsx
function reverseVowels(s: string): string {
  let start = 0;
  let end = s.length - 1;
  const VOWELS = new Set(["a", "i", "u", "e", "o","A", "I", "U", "E", "O"])
  const ans = [...s];
  while(start < end){
    if(!VOWELS.has(ans[start]))
      start++;
    if(!VOWELS.has(ans[end]))
      end--;
    if(VOWELS.has(ans[start]) && VOWELS.has(ans[end])){
      const temp = ans[start];
      ans[start] = ans[end];
      ans[end] = temp;
      start++
      end--;
    }
  }
  return ans.join("");
};
```

(설명) two-pointer 활용. string 전체 길이에서, start end 모두 모음일 때만 서로를 교체한다.

- Time Complexity: O(n/2) ⇒ O(n)
- Space Complexity: O(1) ⇒ inline 으로 가능.

---

### 배운 것들 정리

- two-pointer 는 서로의 위치를 바꾸는 상황에는 언제나 활용 가능하다.
- 약간의 하드코딩은 오히려 문제를 간단히 해결하는데 도움이 된다.(모음의 Set과 같이)