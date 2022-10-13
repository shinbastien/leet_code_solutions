# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution(object):
    def mergeTwoLists(self, list1, list2):
        """
        :type list1: Optional[ListNode]
        :type list2: Optional[ListNode]
        :rtype: Optional[ListNode]
        """

        def search(l1, l2):
            rv = ListNode()
            if l1 == None:
                return l2
            elif l2 == None:
                return l1
            else:
                if (l1.val <= l2.val):
                    rv.val = l1.val
                    rv.next = search(l1.next, l2)
                    return rv
                else:
                    rv.val = l2.val
                    rv.next = search(l1, l2.next)
                    return rv

        return search(list1, list2)