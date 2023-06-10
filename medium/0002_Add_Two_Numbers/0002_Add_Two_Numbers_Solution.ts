/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let c1 = l1;
    let c2 = l2;

    while (c1 || c2) {
        let sum = 0;
        sum = c1.val + c2.val;
        console.log(sum);
        if (sum < 10) {
            c1.val = sum;
        }

        else {
            c1.val = sum - 10;
            if (c1.next) {
                c1.next.val += 1;
            }
            else c1.next = new ListNode(1);
        }

        if (c1.next || c2.next) {
            if (!c1.next) {
                c1.next = new ListNode(0);
            }
            else if (!c2.next) {
                c2.next = new ListNode(0);
            }
        }
        c1 = c1.next;
        c2 = c2.next;
    }
    return l1;
};
