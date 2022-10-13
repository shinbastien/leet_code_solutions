class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        min_word = strs[0]
        rword = "";
        for word in strs:
            if len(min_word) > len(word):
                min_word = word

        if len(min_word) == 0:
            return rword

        for i in range(len(min_word)):
            for word in strs:
                if min_word[i] == word[i]:
                    continue
                else:
                    return rword
            rword += min_word[i]

        return rword
