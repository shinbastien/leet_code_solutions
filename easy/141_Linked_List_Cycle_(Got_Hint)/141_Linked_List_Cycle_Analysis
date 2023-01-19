**# [알고리즘 문제풀이] **141. Linked List Cycle**

# **141. Linked List Cycle**

링크: [https://leetcode.com/problems/linked-list-cycle/description/](https://leetcode.com/problems/linked-list-cycle/description/)

### 문제 파악

(어떤 문제인가)

- 주어진 Linked List 내 cycle 이 있는지 확인해라 Linked List 는 head 가 주어지고, head.val = val, [head.next](http://head.next) = ListNode 다.
- 추가조건: O(1)의 공간 복잡도로 할 수 있나?

## 첫번째 풀이

```jsx
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// var checkCycle = function(head, start) {
//     if (head. <= curr) return true;
//     else if ( head.next === -1) {
//         return false;
//     }
//     else {
//         return checkCycle(head.next, head.val);
//     }
// }

var hasCycle = function(head) {
    cur = head.next;
    while(head.next && cur.next.next) {
        head = head.next;
        cur = cur.next.next;
        if (head === cur) return true;
    }
    return false;
};
```

(설명) 커서 두개를 돌려놓고, 하나는 두 칸씩 건너게 했다. (사실 힌트를 받음)

- Time Complexity: O(n)
- Space Complexity: O(1)

### (실패했다면? 틀린 이유)

(실패한 이유) [1] 인 경우 에 대해 [cur.next.next](http://cur.next.next) 는 접근할 수 없었다.

null 인 상황 대응 부족

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 두번째 풀이

```jsx
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// var checkCycle = function(head, start) {
//     if (head. <= curr) return true;
//     else if ( head.next === -1) {
//         return false;
//     }
//     else {
//         return checkCycle(head.next, head.val);
//     }
// }

var hasCycle = function(head) {
    if (!head) {
        return false;
    }
    cur = head.next;
    while(head.next && cur.next.next) {
        head = head.next;
        cur = cur.next.next;
        if (!cur.next || !cur.next.next) {
            return false;
        }
        if (head === cur) return true;
    }
    return false;
};
```

(설명) 동일한 원리에 조건문 추가

- Time Complexity:
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유) [1,2] 에 대해서 [cur.next.next](http://cur.next.next) 확인 불가…

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 세번째 풀이

```jsx
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// var checkCycle = function(head, start) {
//     if (head. <= curr) return true;
//     else if ( head.next === -1) {
//         return false;
//     }
//     else {
//         return checkCycle(head.next, head.val);
//     }
// }

var hasCycle = function(head) {
    if (!head || !head.next) {
        return false;
    }
    cur = head.next;

    while(head.next && cur.next?.next) {
        head = head.next;
        cur = cur.next.next;
        if (head === cur) return true;
    }
    return false;
};
```

(설명) nullable 대응 조건문을 명확하게 세우기 싫어, ?. 로 대응해버렸다.

- Time Complexity:
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1f63ff36-9fe6-4156-afb4-47dc8b6ba9db/Untitled.png)

- 명확하게 언제 null check 을 해야하는지를 명시해야 한다.

## 좋은 풀이

```jsx
var hasCycle = function(head) {
    if (!head) {
        return false;
    }
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
};
```

(설명) two pointer method를  명확하게 이용한 경우. 사실 나처럼 cur (fast)를 굳이 [Head.next](http://Head.next)로 미리 선언할 필요가 없었다.

또한, while 안에서 fast 자체를 확인하니, while 문 안에서 갱신된 fast = [fast.next.next](http://fast.next.next) 가 null 이어도 문제가 없다. 아주 깔끔하다.

- Time Complexity: O(n)
- Space Complexity: O(1)

---

### 배운 것들 정리

- two pointer method! cycle 이 있다면, 하나는 천천히 (1칸씩) 하나는 빠르게 (2칸씩) 전진시켜서 나중에 node 자체가 같아지면 그건 cycle이다!**