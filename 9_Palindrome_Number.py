class Solution:
    def isPalindrome(self, x: int) -> bool:
        l1 = []
        xreverse = 0
        def decimalsplit (x, box):
            if x >= 10:
                a = x % 10
                box.append(x % 10)
                return decimalsplit((x-a)//10, box)
            else:
                box.append(x)
                return box
        if x < 0:
            return False
        else:
            result = decimalsplit(x, l1)
            if result[-1] == 0 and result[0] != 0:
                return False
            else:
                for i in range(len(result)):
                    xreverse = xreverse+pow(10,(len(result)-1-i))*result[i]
                if x == xreverse:
                    return True
                else:
                    return False
