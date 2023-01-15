/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const regex = /[^a-zA-Z\d]/ig
    var str = s.replaceAll(regex, '').toLowerCase();
    if (str==="") {
        return true;
    }
    else {
        if (str[0]===str[str.length-1]) {
            return isPalindrome(str.slice(1,str.length-1));
        }
        else return false;
    }
};