/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    var res = "";
    var q = Math.floor(columnNumber / 26);
    var r = columnNumber % 26;
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    if (r === 0) {
        q = q-1;
        res = alphabet[25] + res;
    }
    else res = alphabet[r-1] + res;
    while (q > 0) {
        r = q % 26;
        q = Math.floor(q / 26);
        if (r === 0) {
            q = q-1;
            res = alphabet[25] + res;
        }
        else res = alphabet[r-1] + res
    }

    return res;
};