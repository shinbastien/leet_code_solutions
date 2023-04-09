function isPowerOfThree(n: number): boolean {
    if (n <= 0) return false;
    if (n === 1) return true;
    const str = n.toString(3);
    if (str[0] === "1" && parseInt(str.slice(1)) === 0) return true;
    return false;
};

// Better Solution
// function isPowerOfThree(n: number): boolean {
//     return n > 0 && 1162261467 % n == 0;
// };