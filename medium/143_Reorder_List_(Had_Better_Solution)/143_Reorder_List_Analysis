# 143. Reorder List

링크: [https://leetcode.com/problems/reorder-list/](https://leetcode.com/problems/reorder-list/)

### 문제 파악

(어떤 문제인가)

- `L0 → L1 → … → Ln - 1 → Ln` 으로 주어진 List Node 들을 `L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …` 으로 변경하라
-

## 첫번째 풀이

```jsx
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head.next || !head.next.next) {
        return;
    }
    var cur = head;
    var tail = head;
    while (cur && cur.next) {
        if(!cur.next.next) {
            tail = cur.next;
            cur.next = null;
            break;
        }
        cur = cur.next;
    }
    tail.next = head.next;
    head.next = tail;
    reorderList(head.next.next);
};
```

(설명) 맨 끝 tail 을 찾아내고, 그 tail을 head 뒤에 붙여준다. 나머지 (index 1 ~ n-1) 를 분리한 다음 tail 뒤에 붙여준다. 만약 개수가 2개 미만이라면 그대로 놔둔다.

- Time Complexity: O(n) 재귀적으로 처음부터 끝까지 리스트를 돌기 때문에 O(n)
- Space Complexity: O(n) 매번 cur, tail 을 생성하고 총 n 번 반복되기 때문에 O(n)

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2d22d341-f742-485c-96a4-def3fbb476e4/Untitled.png)

(더 나은 풀이가 있을 수 있을지 고민)

- while 문을 돌고, 또 재귀로도 들어가다보니 O(n)이 여러번 발생. 하나로 줄일 수 있을지 생각해봐야 한다.

## 좋은 풀이

```jsx
var reorderList = function(head) {
    if(!head || !head.next || !head.next.next) return;
    var slow = head, fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    var prev = null, cur = slow;
    while(cur){
        var temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }
    var first = head, second = prev;
    while(second.next){
        var temp = first.next;
        first.next = second;
        first = temp;
        
        temp = second.next;
        second.next = first;
        second = temp;
    }
};
```

(설명) 이것도 엄청난 풀이다… 설명이 길어진다? ⇒ 이해하는데 오래걸린다 ⇒ 기발하다.

- 일단 끝까지 간다. fast 는 끝까지 그러면 slow는 반만큼 간다.
- 두 개의 커서 준비 prev, cur ⇒ cur 는 딱 절반 위치에서 시작
    - 첫번째 while문: 뒤쪽 절반을 뒤집어준다. (reverse 해준다)
- 두 개의 커서 준비 first, second ⇒ first 는 앞 절반, second 는 뒷 절반
    - 두 번째 while 문: 앞 절반과 뒷 절반을 섞어주는 과정 (second.next)가 없을 때까지
        - first와 [first.next](http://first.next) 분리해서 temp에 저장
        - first 뒤에 second 붙이기
        - 다음 first는 temp 에 저장되어 있던 처음 first.next
        - second 와 [second.next](http://second.next) 분리 ⇒ temp에 저장
        - second 뒤에 first 붙이기
        - 다음 second는 temp 에 저장되어있던 처으 second.next
    - first가 끝나버리는 경우, [second.next](http://second.next) 가 null 이 되고 기존 second를 쭉 붙여주기만 하면 되어서 while 문 그대로 종료
- Time Complexity: O(n) 1개짜리 while 문 3개
- Space Complexity: O(1) 추가 공간 사용 x

---

### 배운 것들 정리

- while 문 과 포인터를 활용한 풀이
- 이해의 단위를 더 축소했다. 한 개씩 줄여나가는 방식이 아닌, 절반으로 분리해서 아예 통으로 분리하는 방법.