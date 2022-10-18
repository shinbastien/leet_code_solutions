/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if (digits[0] == 9 && digits.length == 1) {
        return [1, 0]
    }
    else if (digits[digits.length-1] == 9) {
        digits[digits.length-1] = 0
        digits.pop()
        rv = plusOne(digits)
        rv.push(0)
        return rv

    }
    else {
        digits[digits.length-1] += 1
        return digits
    }
};