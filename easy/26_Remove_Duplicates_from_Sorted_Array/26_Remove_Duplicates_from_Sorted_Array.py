class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        mNum = nums[0]
        MNum = nums[-1]
        cnt = 1
        curr = mNum
        while curr < MNum:
            if curr == nums[cnt]:
                nums.pop(cnt)
            else:
                curr = nums[cnt]
                cnt += 1
        return cnt