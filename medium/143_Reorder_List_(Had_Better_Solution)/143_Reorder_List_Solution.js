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