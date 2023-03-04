# **225. Implement Stack using Queues**

링크: [https://leetcode.com/problems/implement-stack-using-queues/](https://leetcode.com/problems/implement-stack-using-queues/)

### 문제 파악

(어떤 문제인가) 두 개의 queue (FIFO) 를 이용하여 stack 을 구현하라

- push, pop, top, empty 가 구현되어야 한다.
    - top 은 stack 최상위 아이템의 값을 반환하되, stack에서는 제거하지 않는 것을 의미

## 첫번째 풀이 (아이디어 참고 받음)

```python
from queue import Queue
class MyStack:

    def __init__(self):
        self.q1 = Queue()
        self.q2 = Queue()

    def push(self, x: int) -> None:
        self.q2.put(x)
        while not self.q1.empty(): 
            self.q2.put(self.q1.get())
        self.q1, self.q2 = self.q2, self.q1

    def pop(self) -> int:
        return self.q1.get()

    def top(self) -> int:
        res = self.q1.get()
        self.push(res)
        return res

    def empty(self) -> bool:
        return self.q1.empty()

# Your MyStack object will be instantiated and called as such:
# obj = MyStack()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.top()
# param_4 = obj.empty()
```

(설명) q2는 q1의 push 를 위한 임시 queue 로 사용. q2에 가장 마지막 값을 넣어주고, q1에 있는 모든 값을 q2로 옮겨준다. 그러면 자연스럽게 q2의 첫번째 원소(사실 마지막 원소)가 가장 먼저 빠지게 될 것. 그리고 나선 q1과 q2를 swap 해주어 q1에 모든 원소가 있게 한다.

- Time Complexity: O(n) n 개 만큼 while 문을 돌아야 하기 때문.
- Space Complexity: O(n)

### (실패했다면? 틀린 이유)

 (실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민) 하나의 queue 만을 이용할수도..? 

## 좋은 풀이

```python
from collections import deque

class MyStack:

    def __init__(self):
        self.q = deque()

    def push(self, x: int) -> None:
        self.q.append(x)
        # Move the newly added element to the front
        for _ in range(len(self.q) - 1):
            self.q.append(self.q.popleft())

    def pop(self) -> int:
        return self.q.popleft()

    def top(self) -> int:
        return self.q[0]

    def empty(self) -> bool:
        return len(self.q) == 0
```

(설명) 하나의 queue 만을 이용. push 시, 기존의 앞에 있던 원소들을 다 pop했다가 다시 넣어주는 방식.

- Time Complexity: O(n)
- Space Complexity: O(n)

---

### 배운 것들 정리

- queue, stack 관계성. 핵심 원리 복습