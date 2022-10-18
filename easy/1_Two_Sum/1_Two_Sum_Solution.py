class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        a = []
        for i in nums:
            a.append(i)
        nums.sort()

        def recminMaxSum(l, target, mincnt, maxcnt):
            if (l[0] + l[-1]) > target:
                return recminMaxSum(l[0:-1], target, mincnt, maxcnt + 1)
            elif (l[0] + l[-1]) < target:
                return recminMaxSum(l[1:], target, mincnt + 1, maxcnt)
            else:
                minIndex = a.index(l[0])
                a.reverse()
                maxIndex = len(a) - 1 - a.index(l[-1])
                return [minIndex, maxIndex]

        keys = recminMaxSum(nums, target, 0, 0)
        return keys
