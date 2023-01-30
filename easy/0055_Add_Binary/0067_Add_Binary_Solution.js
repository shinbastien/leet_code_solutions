/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var cursor = "";
    if (a.length < b.length ) {
        [a, b] = [b, a];
    }

    if (a[a.length-1] === "1" && b[b.length-1] === "1") {
        cursor = "10";
        if (a.length === 1) {
            return cursor;
        }
        else if (b.length === 1) {
            a = a.slice(0, a.length -1);
            return addBinary(a+"0", cursor);
        }
        else {
            a = a.slice(0, a.length -1);
            b = b.slice(0, b.length -1);
            return addBinary(addBinary(a+"0", b+"0"), cursor);
        }
    }
    else {
        if (a[a.length-1] === "1" || b[b.length-1] === "1") {
            cursor = "1";
        }
        else {
            cursor = "0";
        }

        if (a.length === 1) {
            return cursor;
        }
        else if (b.length === 1) {
            a = a.slice(0, a.length -1);
            return a+cursor;
        }
        else {
            a = a.slice(0, a.length -1);
            b = b.slice(0, b.length -1);
            return addBinary(a, b) + cursor;
        }
    }
}