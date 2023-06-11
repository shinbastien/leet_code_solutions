function longestPalindrome(s: string): string {
    let start = 0;
    let end = s.length -1;
    let currs = start;
    let curre = end
    let res = "";
    let substr = "";

    if (start === end) {
        return s[0];
    }

    while (currs < curre || start < end) {
        if (currs >= curre) {
            if (currs === curre) {
                substr = substr + s[currs] + substr.split("").reverse().join("");
            }
            else {
                substr += substr.split("").reverse().join("");
            }
            if (res.length < substr.length) {
                res = substr;
            }
            start++;
            end = s.length -1;
            currs = start;
            curre = end;
            substr = "";
        }
        else if(s[curre] === s[currs]) {
            substr += s[currs];
            currs++;
            curre--;

        }
        else {
            if (substr === "") {
                curre--;
            }
            else {
                substr = "";
                end--;
                currs = start;
                curre = end;
            }
        }
    }

    return res;
};
