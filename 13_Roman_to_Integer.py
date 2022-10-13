class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        romanDict = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}

        def readFromEnd(s):
            if len(s) > 0:
                ans = readFromEnd(s[1:])
                if romanDict[s[0]] > ans:
                    return romanDict[s[0]] + ans
                else:
                    if romanDict[s[0]] < romanDict[s[1]]:
                        return ans - romanDict[s[0]]
                    else:
                        return romanDict[s[0]] + ans

            else:
                return 0

        return readFromEnd(s)