# [알고리즘 문제풀이] **190. Reverse Bits**

# **190. Reverse Bits**

링크: [https://leetcode.com/problems/reverse-bits/](https://leetcode.com/problems/reverse-bits/)

### 문제 파악

(어떤 문제인가)

- unsigned integer 가 들어올 때, 그 수의 binary reverse 를 반환하라.
    - 예시) Input: `00000010100101000001111010011100`
        - Output: `964176192 (00111001011110000010100101000000)`

## 첫번째 풀이

```tsx
function reverseBits(n: number): number {
	var arr: string[] = Array.from(n.toString(2));
    var len = arr.length;
    for (var i=0; i<32-len; i++) {
        arr.unshift('0');
    }
    arr.reverse();
    return parseInt(arr.join(''), 2);
};
```

(설명) toString, parseInt 를 이용해 string 으로 바꿔서 적용 크게 수학적인 원리는 사용하지 않은듯..

- toString을 할 때, 앞에 padding 의미의 0은 사라지길래, for 문으로 추가했다.
- Time Complexity: O(n)
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민) 원래의 의도인 bit shifting 을 통해서 할 수 있지 않을까 싶다.

## 좋은 풀이

```java
public class Solution {
    public int reverseBits(int n) {
        int rev = 0;
		
        for (int i = 0; i < 32; i++) {
            rev <<= 1;
            rev |= (n & 1);
            n >>= 1;
        }

        return rev;
    }
}

// TC: O(1)
```

(설명) bit manipulation 이용. n &1 은 ⇒ n의 마지막 수를 반환한다. 10 & 01 ⇒ 0 11 & 01 ⇒ 1.

rev 는 결과를 반환할 int 인데, 처음은 0에서 시작. rev <<1 은 왼쪽으로 한 칸 밀어서 00으로 만드는 것. 거기에 마지막 숫자를 or 로 추가. 이후 n을 right shift 해서 자릿수를 한 칸 낮춘다. length는 shifting 하면서 바뀔 수 있으니 처음부터 32로 고정

- Time Complexity: O(1)
- Space Complexity: O(1)

---

### 배운 것들 정리

- 오랜만에 bit manipulation 복습 .. 조금 더 고민했으면 할 수 있었을 것 같은데 아쉽다..