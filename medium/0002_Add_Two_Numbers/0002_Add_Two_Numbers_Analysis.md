# [알고리즘 문제풀이] **2. Add Two Numbers**

# 2. Add Two Numbers

링크: https://leetcode.com/problems/add-two-numbers/description/

### 문제 파악

(어떤 문제인가)

- 2개의 ListNode가 주어진다. 이 때 두수를 더한 ListNode를 출력하라. 이때 각 ListNode들은 순서가 거꾸로 되어있다고 가정
- 예시)
    - input: [2, 4, 3], [5,6,4]
    - output: [7, 0, 8]
    - 설명: 342 + 465 = 807

## 첫번째 풀이

```tsx
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let c1 = l1;
    let c2 = l2;
    // let res = l1;
    while (c1 || c2) {
        let sum = 0;
        if (c1 && c2) {
            sum = c1.val + c2.val;
        }
        else if (c1) {
            sum = c1.val;
        }
        else {
            sum = c2.val;
            c1 = new ListNode(0);
        }
        console.log(sum);
        if (sum < 10) {
            c1.val = sum;
        }
        else {
            c1.val = sum - 10;
            if (c1.next) {
                c1.next.val += 1;
            }
            else {
                c1.next = new ListNode(1);
            }
            
        }
        if (c1) {
            c1 = c1.next;
        }
        if (c2) {
            c2 = c2.next;
        }
        console.log(l1);
    }
    // console.log("res", res);
    return l1;
};
```

(설명) 각 node에 커서를 두고, c1 값을 갱신. 받아올림이 생길 경우, ListNode를 추가하거나 next의 값을 +1 한다.

- Time Complexity: O(n)
- Space Complexity: O(n)

### (실패했다면? 틀린 이유)

(실패한 이유)

[0]
[7,3]

c1 이 더 짧을 때는 적용되지 않는다.

output: 7

expected output: 7, 3

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 두번째 풀이

```tsx
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let c1 = l1;
    let c2 = l2;
    let res = l1;
    
    while (c1 || c2) {
        let sum = 0;
        if (c1 && c2) {
            sum = c1.val + c2.val;
        }
        else if (c1) {
            sum = c1.val;
        }
        else {
            c1.next = c2;
            break;
        }
        console.log(sum);
        if (sum < 10) {
            c1.val = sum;
        }

        else {
            c1.val = sum - 10;
            if (c1.next) {
                c1.next.val += 1;
            }
            else c1.next = new ListNode(1);
        }

        if (c1) {
            c1 = c1.next;
        }
        if (c2) {
            c2 = c2.next;
        }

    }
    return l1;
};
```

(설명) c1 값이 없을 때는 c2를 next 로 갖고 오도록 하였다

- Time Complexity:
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유) [0] [7,3] 에서 동일하게 실패. 이번엔 runtime error ⇒ else 문으로 들어갈 때, c1 은 이미 null이라 next가 선언될 수 없었다.

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 세번째 풀이

```tsx
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let c1 = l1;
    let c2 = l2;
    
    while (c1 || c2) {
        let sum = 0;
        sum = c1.val + c2.val;
        console.log(sum);
        if (sum < 10) {
            c1.val = sum;
        }

        else {
            c1.val = sum - 10;
            if (c1.next) {
                c1.next.val += 1;
            }
            else c1.next = new ListNode(1);
        }
        console.log(c1);
        console.log(c2);

        if (c1.next || c2.next) {
            if (!c1.next) {
                c1.next = new ListNode(0);
            }
            else if (!c2.next) {
                c2.next = new ListNode(0);
            }
        }
        c1 = c1.next;
        c2 = c2.next;   
    }
    return l1;
};
```

(설명) 다음 것으로 넘어가기 전에 하나라도 next 가 있으면, 나머지 한 node는 next를 0으로 채워넣었다.

- Time Complexity: O(n)
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요) 경우의 수 계산이 깔끔하지 못했다.

(더 나은 풀이가 있을 수 있을지 고민)

## 좋은 풀이

```tsx
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummyHead = new ListNode(0);
    let curr = dummyHead;
    let carry = 0;
    
    while (l1 || l2 || carry) {
        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    
    return dummyHead.next;
}
```

(설명) result를 별도로 하나 생성, carry는 현재의 자릿수 값을 의미. 마지막 자리에서 받아올림이 있는 경우를 대비.

sum 처리를 l1이 있으면 그 값으로, 아니면 0으로 처리

- Time Complexity:
- Space Complexity:

---

### 배운 것들 정리

- 결과값이 되는 것을 별도로 생성해서 처리하는 것이 더 깔끔
- 삼항연산자를 더 적극적으로 사용.
- 언제 멈춰야 하는가? 완전히 종료가 되어야 하는 상황을 기준으로 생각하자.
    - 둘 다 next 가 없을 때. 둘 다 마지막 숫자일 때. 그것을 따지지 못했다.
