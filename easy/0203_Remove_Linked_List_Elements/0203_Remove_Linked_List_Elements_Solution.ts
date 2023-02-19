/**
 * Definition for singly-linked list.
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
 }
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
    if (!head) return null;
    if (head.val === val) return removeElements(head.next, val);
    else {
        head.next = removeElements(head.next, val);
        return head;
    }
};