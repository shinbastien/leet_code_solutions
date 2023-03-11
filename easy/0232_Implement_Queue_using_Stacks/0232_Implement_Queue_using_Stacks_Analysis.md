# [알고리즘 문제풀이] **232. Implement Queue using Stacks**

# **232. Implement Queue using Stacks**

링크: [https://leetcode.com/problems/implement-queue-using-stacks/description/](https://leetcode.com/problems/implement-queue-using-stacks/description/)

### 문제 파악

(어떤 문제인가)

- 두 개의 스택을 이용하여 Queue (FIFO)를 구현하라.

## 첫번째 풀이

```tsx
class MyQueue {
    constructor(public s1: number[] = [], public s2: number[] = [] ) {
    }

    push(x: number): void {
        this.s1.push(x);
    }

    pop(): number {
        if (this.s2.length === 0) {
            while (this.s1.length > 0) {
                this.s2.push(this.s1.pop());
            }
        }
        var res = this.s2.pop();
        return res;
    }

    peek(): number {
        if (this.s2.length === 0) {
            while (this.s1.length > 0) {
                this.s2.push(this.s1.pop());
            }
        }
        var res = this.s2.pop();
        this.s2.push(res);
        return res;
    }

    empty(): boolean {
        return (this.s1.length === 0 && this.s2.length === 0);
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
```

(설명) s1은 push를 받는 스택, s2 는 pop을 스택으로 구성. s2 가 비어있다면, s1 을 뒤집어서 s2에 넣어주는 과정 실행.

- Time Complexity: O(1) for push, O(n) for peek, pop in the worst case
- Space Complexity: O(n) 최대 n개를 담으므로.

### (실패했다면? 틀린 이유)

(실패한 이유) 처음에는 무조건 s2를 비워주고 s1으로 다시 옮겨주려했으나, 그러면 기껏 순서를 뒤집어준게 의미가 없어지는 것을 확인 후, s2는 그대로 유지하는 방향으로 결정.

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민) 조금 더 깔끔한 코드…?

## 좋은 풀이

```jsx
const MyQueue = function() {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  this.resetStacks();
  return this.stack2.pop();
};

MyQueue.prototype.resetStacks = function() {
  if (this.stack2.length === 0) {
    while(this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
  }
}

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  this.resetStacks();
  return this.stack2[this.stack2.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.stack1.length === 0 && this.stack2.length === 0;
};
```

(설명) 비슷한 방식. Peek 할 때, 마지막 index 에 접근하는 방식을 택했는데 순수 stack이라면 해당 기능이 가능한지 모르겠다.

- Time Complexity: O(n) in worst case
- Space Complexity: O(n)

---

### 배운 것들 정리

- stack, queue 복습.. 자료 구조는 옛날에 배운 건데 구현은 늘 헷갈린다.