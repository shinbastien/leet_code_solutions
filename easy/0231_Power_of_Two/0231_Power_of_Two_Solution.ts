function isPowerOfTwo(n: number): boolean {
    if (n === 0 || (n >> 31) + 1 === 0) return false;
    if ((n & ~n + 1) === n) return true;
    return false;
};