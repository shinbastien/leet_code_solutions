function isPerfectSquare(num: number): boolean {
    let curr = 1;
    while (curr*curr < num) {
        if (curr*curr + 2*curr + 1 > num) {
            return false;
        }
        else {
            curr++;
        }
    }

    return true;
};

// BETTER SOLUTION
// function isPerfectSquare(num) {
//     if (num === 1) return true;
//     let low = 1;
//     let high = num;
//
//     while (low < high) {
//         const mid = Math.floor((low + high) / 2);
//         const sqr = mid * mid;
//         if (sqr === num) return true;
//
//         if (sqr > num) high = mid;
//         else low = mid + 1;
//     }
//
//     return false;
// };
