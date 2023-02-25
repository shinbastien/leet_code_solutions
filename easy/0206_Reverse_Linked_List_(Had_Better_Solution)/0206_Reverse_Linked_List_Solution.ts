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