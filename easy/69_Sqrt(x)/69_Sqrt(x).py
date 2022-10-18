class Solution(object):
    def mySqrt(self, k):
        """
        :type x: int
        :rtype: int
        """

        # the sqrt of x should be less than (x+1)/2.0
        x = (k + 1) / 4.0
        x2 = x * x

        diff = x2 - k
        e = 0.5

        while diff < -e or diff > e:
            x = x + (k - x2) / (2 * x)
            x2 = x * x
            diff = x2 - k

        return int(x)