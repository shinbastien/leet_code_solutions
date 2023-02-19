# **203. Remove Linked List Elements**

링크: [https://leetcode.com/problems/remove-linked-list-elements/description/](https://leetcode.com/problems/remove-linked-list-elements/description/)

### 문제 파악

Linked List 가 주어질 때, 주어진 val 의 node 는 삭제하고, head를 반환하라.

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

function removeElements(head: ListNode | null, val: number): ListNode | null {
    if (!head) return null;
    if (head.val === val) return removeElements(head.next, val);
    else {
        head.next = removeElements(head.next, val);
        return head;
    }
};
```

(설명) 재귀함수 사용. head의 값이 val이면 삭제하고 그 다음 node 를 head로 반환, 아니라면 head.next의 값은 removeElements를 적용한 값으로 매칭한다.

- Time Complexity: O(n) node 수만큼 반복
- Space Complexity: recursive stack 이 n만큼 반복되기 때문

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민) iterative 하게 하면 space complexity가 줄어들까?

## 좋은 풀이

```jsx
var removeElements = function(head, val) {
    // create a fake node that acts like a fake head of list pointing to the original head and it points to the original head...
    var fake = new ListNode(0);
    fake.next = head;
    var curr = fake;
    // Loop till curr.next not null...
    while(curr.next != null){
        // if we find the target val same as the value of curr.next...
        if(curr.next.val == val){
            // Skip that value and keep updating curr...
            curr.next = curr.next.next; 
        }
        // Otherwise, move curr forward...
        else{
            curr = curr.next;
        }
    }
    return fake.next;       // Return the linked list...
};
```

(설명) 비슷한 풀이. while 문 이용

- Time Complexity: O(n)
- Space Complexity: O(n) while 문 돌면서 fake 에 추가 되기 때문

---

### 배운 것들 정리

- Linked List 해결법 복습