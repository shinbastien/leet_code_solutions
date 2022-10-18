# [알고리즘 문제풀이] 83. Remove Duplicates from Sorted List

# **83. Remove Duplicates from Sorted List**

링크: [https://leetcode.com/problems/remove-duplicates-from-sorted-list/](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)

### 문제 파악

(어떤 문제인가)

- sorted linked list 에서 head, next 만을 갖고 겹치는 아이템들이 제거된 linked list를 반환해라.
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
 * @return {ListNode}
 */

var deleteDuplicates = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    else {
        if (head.val === head.next.val) {
            head.next = deleteDuplicates(head.next.next)
        }
        else
            head.next = deleteDuplicates(head.next)
        return head

    }
    
};
```

(설명) 첫 요소의 값과 두번째 요소의 값이 같다면, 두번째 요소를 건너뛴 뒷부분에서 중복을 삭제한 리스트를  next로 한다. 아닐 경우, 두번째 요소부터의 중복을 삭제한 리스트를 next로 한다.

- Time Complexity:
- Space Complexity:

### (실패했다면? 틀린 이유)

 (실패한 이유) 이 경우, 각 요소는 직후의 경우에 대해서만 비교한다. 다행히 sorted 라 1, 2, 1 같은 경우는 없겠지만, [1, 1, 1] 에 대해서는 실패 했다. 그 이유는, 2번째 1에 대해서는 비교를 했지만, 마지막 1에 대해서는 첫번째 1과 비교를 하지 않기 때문이다. 동일한 이유로 [1, 1, 1, 1, 2, 2, 2, 3] ⇒ [1,1,2,2,3] 으로 나온다. 즉, 한 개짜리일 때 앞과의 비교를 하지 못하는 알고리즘이다.

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 두번째 풀이

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
 * @return {ListNode}
 */

var deleteDuplicates = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    else {
        if (head.val === head.next.val) {
            head = deleteDuplicates(head.next)
        }
        else
            head.next = deleteDuplicates(head.next)
        return head
    }
    
};
```

(설명) 현재 리스트에서 head의 값과 와 다음 요소의 값이 같다면, head 이후의 리스트를 현재 리스트로 한다.

같지 않다면, [head.next](http://head.next) 에 대해서 중복을 삭제한 값을 리스트의 다음 값으로 한다.

이 경우는, 두번째를 건너뛰는 것이 아닌, 앞에 것을 고려하지 않는 방식이기 때문에, 각 수의 마지막 수만 리스트에 들어가게 된다. head.val 자체를 계속 업데이트 해주는 방식이다.

- Time Complexity: O(n)
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

```java
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        ListNode cur=head;
        while (cur!=null){
            while (cur.next!=null && cur.val==cur.next.val) cur.next=cur.next.next;
            cur=cur.next;
        }
        return head;
    }
}
```

(설명) Iteration 이용 ⇒ 공간을 덜 쓴다는 면에서 장점이 있다. 재귀를 사용할 경우 무의미한 ListNode 가 계속 생성된다. 같으면, 같지 않을때까지 계속 건너뛰게 하는 것이다.

이때 [cur.next](http://cur.next) 가 바뀌면 [head.next](http://head.next) 도 바뀌는 방식이기 때문에 해결되는 것으로 보인다.

- Time Complexity:
- Space Complexity:

---

### 배운 것들 정리

- (자료구조 등)