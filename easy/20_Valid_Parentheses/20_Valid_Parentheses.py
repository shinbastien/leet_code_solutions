class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """

        d1 = {']': '[',
              '}': '{',
              ')': '('
              }
        l1 = []
        for i in range(len(s)):
            if (s[i] not in d1):
                l1.append(s[i])
            else:
                if (len(l1) > 0 and l1.pop() == d1[s[i]]):
                    continue
                else:
                    return False

        if (len(l1) == 0):
            return True

