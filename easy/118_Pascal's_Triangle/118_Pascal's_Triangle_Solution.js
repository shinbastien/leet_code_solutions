/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows == 1) {
        return [[1]];
    }
    else {
        var previous = generate(numRows-1);
        var last = [1];
        var previousLast = previous[previous.length-1];
        previousLast.forEach((e, index) => {
            if (index !== 0) {
                return last.push(e + previousLast[index-1]);
            }
        });
        last.push(1);
        return previous.concat([last]);
    }
}