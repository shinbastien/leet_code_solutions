/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    for (i=1; i<triangle.length; i++) {
        triangle[i][0] += triangle[i-1][0];
        for (j=1; j<triangle[i].length; j++) {
            if (j === triangle[i].length-1) {
                triangle[i][j] += triangle[i-1][j-1];
            }
            else {
                triangle[i][j] += Math.min(triangle[i-1][j], triangle[i-1][j-1]);
            }
        }
    }
    return Math.min(...triangle[triangle.length -1])
};