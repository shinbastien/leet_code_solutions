/**
 * @param {number} n
 * @return {number}
 */
var ways = [1, 2];

var climbStairs = function(n) {

    if (n == 1) {
        return 1;
    }
    else if (n == 2) {
        return 2;
    }
    else {
        if (ways.length >= n) {
            return ways[n-1]
        }
        else {
            ways.push(climbStairs(n-1)+climbStairs(n-2))
            return ways[ways.length-1]
        }

    }

};