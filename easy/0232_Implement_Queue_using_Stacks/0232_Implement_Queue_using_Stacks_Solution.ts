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