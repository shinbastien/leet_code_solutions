function isPowerOfFour(n: number): boolean {
    let q = n;
    if (q <= 0) return false;
    while (q > 1) {
        if (q % 4 !== 0) {
            return false;
        }
        q /= 4;
    }
    return true;
};


// BETTER SOLUTION
// function isPowerOfFour(n: number): boolean {
//     return Number.isInteger( Math.log(n) /Math.log(4) );
// };