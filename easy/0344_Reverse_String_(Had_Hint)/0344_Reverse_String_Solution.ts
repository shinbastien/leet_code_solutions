/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    const len = s.length;
    const middle = Math.floor(s.length / 2);
    let temp = null;
    for (let i = 0; i < middle; i++) {
        temp = s[i];
        s[i] = s[len - i - 1];
        s[len - i - 1] = temp;
    }
};

// HAD HINT