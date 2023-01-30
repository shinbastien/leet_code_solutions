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