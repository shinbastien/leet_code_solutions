/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// var checkCycle = function(head, start) {
//     if (head. <= curr) return true;
//     else if ( head.next === -1) {
//         return false;
//     }
//     else {
//         return checkCycle(head.next, head.val);
//     }
// }

var hasCycle = function(head) {
    if (!head || !head.next) {
        return false;
    }
    cur = head.next;

    while(head.next && cur.next?.next) {
        head = head.next;
        cur = cur.next.next;
        if (head === cur) return true;
    }
    return false;
};