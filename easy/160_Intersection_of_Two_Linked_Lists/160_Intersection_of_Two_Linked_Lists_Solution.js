/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var curA = headA;
    var cntA = 0;
    var curB = headB;
    var cntB = 0;
    while(curA.next) {
        curA = curA.next;
        cntA += 1;
    }
    while (curB.next) {
        curB = curB.next;
        cntB += 1;
    }

    if (!(curA === curB)) return null;
    else {
        curA = headA;
        curB = headB;
        for (i=0; i<Math.abs(cntA-cntB); i++) {
            if (cntA >= cntB) curA = curA.next;
            else curB = curB.next;
        }
        while (curA !== curB) {
            curA = curA.next;
            curB = curB.next;
        }
        return curA;
    }
};