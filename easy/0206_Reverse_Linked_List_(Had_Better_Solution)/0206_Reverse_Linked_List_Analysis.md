# 206. Reverse Linked List

링크: [https://leetcode.com/problems/reverse-linked-list/description/](https://leetcode.com/problems/reverse-linked-list/description/)

### 문제 파악

(어떤 문제인가) 주어진 Linked List의 순서를 뒤집은 linked list 를 반환하라

- 예시: 1 → 2 → 3 → 4 → 5  ⇒ 5→ 4 → 3 → 2 → 1 로 반환하라.

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

function reverseList(head: ListNode | null): ListNode | null {
    if (!head) return null;
    if (!head.next) return head;
    var arr: ListNode[] = [];
    while (head) {
        arr.unshift(head);
        head = head.next;
    }
    var res: ListNode = arr.pop();
    res.next = null;
    while (arr.length > 0) {
        var add = arr.pop();
        add.next = res;
        res = add;
    }
    return res;
};
```

(설명) 처음부터 끝까지 돌면서 arr 에 저장하고, arr 를 pop 하면서 앞에 더해주는 방식으로 구현

- Time Complexity: O(n) while 문 두 번. 총 길이만큼 두 번 돌기 때문에 O(n)
- Space Complexity: O(n) n 개짜리 arr 생성하므로 O(n)

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민) arr 를 도는 과정을 줄일 수 있지 않을까? 그래도 전에는 매번 끝까지 탐색시켰을텐데 그것보다는 짧아진 것 같다.

## 좋은 풀이

```jsx
function reverseList(head: ListNode | null): ListNode | null {
    let prev = null;
    let curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
```

(설명) pointer 만을 이용해서 굳이 arr에 저장하지 않게 했다. 처음에 prev를 null , curr 를 head 로 해서 prev는 curr 보다 한 칸씩 앞에 놓여있게 한다.

- Time Complexity: O(n)
- Space Complexity: O(1)

---

### 배운 것들 정리

- iterative method ⇒ pointer 만을 활용한 풀이