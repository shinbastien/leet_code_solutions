# [알고리즘 문제풀이] 14. Longest Common Prefix

# 14.Longest Common Prefix

링크: [https://leetcode.com/problems/longest-common-prefix/](https://leetcode.com/problems/longest-common-prefix/)

### 문제 파악

(어떤 문제인가)

- 리스트 내 단어들에서 공톧된 가장 긴 접두사를 찾는 문제
- 앞에서부터 공통된 string 길이 찾기

## 첫번째 풀이

```jsx
class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        min_word = "";
        rword = "";
        for word in strs:
            if len(min_word) < len(word):
                min_word = word
        
        for i in range(len(min_word)):
            for word in strs:
                if min_word[i] == word[i]:
                    continue
                else:
                    return rword
            rword+=min_word[i]
        
        return rword
```

(설명)

- Time Complexity:
- Space Complexity:

### (실패했다면? 틀린 이유)

 (실패한 이유) 빈 string input “” 을 고려하지 않았다. 빈 string의 경우 아래 for loop 에서 indexing을 할 수가 없는데 index를 참조하려해서 문제 발생

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 두번째 풀이

```jsx
class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        min_word = "";
        rword = "";
        for word in strs:
            if len(min_word) < len(word):
                min_word = word
        
        if len(min_word) == 0:
            return rword
        
        for i in range(len(min_word)):
            for word in strs:
                if min_word[i] == word[i]:
                    continue
                else:
                    return rword
            rword+=min_word[i]
        
        return rword
```

(설명)

- Time Complexity:
- Space Complexity:

### (실패했다면? 틀린 이유)

 (실패한 이유) 마찬가지로 “” 를 고려하지 않았는데, 위 for loop 로직에서 min_word 가 아닌 max_word 를 찾는 방식이 되었다. 그래서 하단 for loop 에서 max_word 만큼의 indexing을 하게 되어서 문제 발생.

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 세번째 풀이

```jsx
class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        min_word = strs[0]
        rword = "";
        for word in strs:
            if len(min_word) > len(word):
                min_word = word
        
        if len(min_word) == 0:
            return rword
        
        for i in range(len(min_word)):
            for word in strs:
                if min_word[i] == word[i]:
                    continue
                else:
                    return rword
            rword+=min_word[i]
        
        return rword
```

(설명)

- Time Complexity: O(mn)의 time complexity
    - 
- Space Complexity:

### (실패했다면? 틀린 이유)

 (실패한 이유)

### (성공했다면? 결과)

Runtime: 27 ms, faster than 73.09% of Python online submissions for Longest Common Prefix.
Memory Usage: 13.6 MB, less than 83.35% of Python online submissions for Longest Common Prefix.

## 좋은 풀이

```jsx
class Solution:
    def longestCommonPrefix(self, S: List[str]) -> str:
        if not S: return ''
        m, M, i = min(S), max(S), 0
        for i in range(min(len(m),len(M))):
            if m[i] != M[i]: break
        else: i += 1
        return m[:i]
		
		
- Junaid Mansuri
- Chicago, IL
```

(설명)

- list 내에서 string 의 최솟값, 최댓값만을 비교 ⇒ string의 경우 알파벳 순으로 정렬될 것이기에, 최솟값과 최댓값이 가장 차이가 많이 나는 두 단어일 것이다. 최솟값이 최댓값과 같은 prefix 들이 있다면, 그 사이의 단어들은 모두 공통으로 그 prefix 를 갖고 있을 것이다.
- Time Complexity: sorting 비용 nlogn + for loop m  ⇒ nlogn + m 꼴
- Space Complexity:

---

### 배운 것들 정리

- (자료구조 등)