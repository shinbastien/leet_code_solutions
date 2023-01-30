# [알고리즘 문제풀이] 142. Linked List Cycle II

# 142. Linked List Cycle II

링크: [https://leetcode.com/problems/linked-list-cycle-ii/description/](https://leetcode.com/problems/linked-list-cycle-ii/description/)

### 문제 파악

(어떤 문제인가)

- 주어진 Linked List 에서 cycle 이 있다면, 그 cycle 이 시작하는 Node를 반환하고, cycle 이 아니라면 null 을 반환해라
- 심화조건: O(1)의 공간복잡도로 할 수 있는가?

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
 * @return {ListNode}
 */
var detectCycle = function(head) {
    var slow = head;
    var fast = head;
    var cnt = 0;
    var cycle = 0;
    var index = 0;
    var start = head;
    while (fast && fast.next) {
        if (slow === fast) {
            if(cycle === 0) cycle = cnt;
            else {
                while(true) {
                    for (i=0;i<cnt-cycle;i++) {
                        if (start === slow) {
                            return start;
                        }
                        slow = slow.next;
                    }
                    start = start.next;
                }
            }
        }
        slow = slow.next;
        fast = fast.next.next;
        cnt += 1;
    }
    return null
};
```

(설명) 느린 pointer와 빠른 pointer 를 두어, 겹쳐지는지 확인한다. while 문을 돌다가 겹치는 상황이 발생한다면 cycle 이 있는 것.

- 그 상황에서, cycle이 한 번더 발생할 때까지 찾아서 cnt-cycle 로 cycle의 주기를 찾는다.
- 그 후로는, 시작부터 끝까지 한 칸씩 전진하면서, cycle에 포함된 값인지 확인한다. ⇒cycle에 포함된 가장 첫 번째  값이 바로 cycle 의 시작
- Time Complexity: O(n^2) O(n) 안에 while 문이 worst case 에서는 O(n) 번 돌 수 있기 때문에 ⇒ O(n^2)
- Space Complexity: O(1) 추가 메모리 할당은 없기 때문에 O(1)

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c41b37de-23aa-4990-abfc-07d0a548ee62/Untitled.png)

(더 나은 풀이가 있을 수 있을지 고민)

- 아무래도 O(n^2)인게 걸린다.. While문을 하나로 줄일 수는 없을까 생각해봐야 한다.

## 좋은 풀이

```jsx
var detectCycle = function(head) {
    if (!head) return null;
    var slow = head;
    var fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            slow = head;
            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null;
};
```

(설명) 이해하는데 무척 오래걸렸다. two pointer method 로, slow 와 fast를 두고 처음 만나는지에 따라 cycle 유무를 판단하는 것까지는 동일하다.

- 처음 만난 위치 (meeting_point) 에서는 slow 를 head로 이동.
- 그 뒤로는 slow, fast 는 모두 한 칸씩 이동
- 그 후로 두 포인터가 처음 만나는 곳이 cycle의 시작점 (start) 이다..!!

**이유 설명:**

- head ⇒ start 까지의 거리: x, start ⇒ meeting_point 까지의 거리: y 라 하자.
- slow 는 x+y 만큼, fast 는 2*(x+y) 만큼 움직였다.
    - 이때, fast는 한 바퀴를 돌아서 다시 meeting_point 까지 왔기에, x+y 만에 한 바퀴를 다 돌고 meeting_point까지 온 것. 이때, start ⇒ meeting_point = y 이기에, meeting_point ⇒ start = x 임을 알 수 있다.
- 따라서, head ⇒ start == meeting_point ⇒ start 임을 알 수 있다! **(매우 놀랍다..!!)**
    - chatGPT에게 질문하면서 1시간 정도 고민하다가 겨우 이해.
- Time Complexity: O(n) 최대는 while 문이 끝까지 갔을 때이므로 O(n)
- Space Complexity: O(1) 추가 공간을 사용하지 않았으므로 O(1)

---

### 배운 것들 정리

- two pointer method 응용.
- 수학적 개념..? 도식화의 필요성까지… 그림으로 그리니까 이해도 더 빠르고, 본질을 더 잘 이해했다.