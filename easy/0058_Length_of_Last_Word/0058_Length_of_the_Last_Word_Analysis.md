# [알고리즘 문제풀이] 58. Length of the Last Word

# 0.문제 이름

링크: [https://leetcode.com/problems/length-of-last-word/](https://leetcode.com/problems/length-of-last-word/)

### 문제 파악

(어떤 문제인가)

- 주어진 string에서 마지막 단어의 길이를 반환하라.
- 빈칸이 있을 수도 있다.

## 첫번째 풀이

```python
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        return len(s.rstrip(' ').split(" ")[-1])
```

(설명)

오른쪽 공백을 삭제하여 string이 단어로 끝날 수 있게 한다. 그 다음 공백을 기준으로 단어들을 분할하여 마지막 단어만을 갖고 온다.

- Time Complexity: $O(n)$
    - string 의 길이를 n 이라 하자.
    - strip ⇒ $O(n)$ (최대 n 번 발생)
    - split ⇒ $O(n)$ (최대 n 번 발생 ⇒ or n/2)
    - strip + split 의 관계이므로 $O(n)$
- Space Complexity: $O(n)$
    - split 의 결과로 list를 하나 생성하기 때문.

### (실패했다면? 틀린 이유)

 (실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

Runtime: 57 ms, faster than 22.16% of Python3 online submissions for Length of Last Word.
Memory Usage: 14 MB, less than 5.70% of Python3 online submissions for Length of Last Word.

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

```jsx

```

(설명)

- Time Complexity:
- Space Complexity:

---

### 배운 것들 정리

- (자료구조 등)