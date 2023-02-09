# [알고리즘 문제풀이] **193. Valid Phone Numbers**

# **193. Valid Phone Numbers**

링크: [https://leetcode.com/problems/valid-phone-numbers/description/](https://leetcode.com/problems/valid-phone-numbers/description/)

### 문제 파악

(어떤 문제인가)

- bash script 로 file 내 아래  형식을 만족하는 전화번호가 있다면 반환하시오
    - (xxx) xxx-xxxx || xxx-xxx-xxxx (x 는 각각 숫자를 의미)

## 첫번째 풀이

```bash
grep -e "^[0-9]\{3\}\-[0-9]\{3\}\-[0-9]\{4\}$" -e "^([0-9]\{3\}) [0-9]\{3\}\-[0-9]\{4\}$" file.txt
```

(설명) grep 명령어: 특정 파일에서 해당 패턴을 만족하는 행을 출력하는 명령어 [0-9]는 숫자임을 \{3} 은 세 자리임을 의미.

- Time Complexity: O(n) 줄 수
- Space Complexity: O(1)

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

---

### 배운 것들 정리

- bash 명령어 grep
- 정규표현식 사용방법