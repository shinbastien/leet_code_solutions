function isHappy(n: number): boolean {
    var res = 0;
    var cur = n;
    if (n < 10) {
        if (n === 1 || n === 7) return true;
        else return false;
    }
    while (cur > 0) {
        res += Math.pow((cur % 10), 2);
        cur = Math.floor(cur / 10);
    }
    if (res === 1) return true;
    return isHappy(res);
};

// Turtoise and Hare method
// function isHappy(n) {
//     function getNext(n) {
//         let sum = 0;
//         while (n > 0) {
//             const digit = n % 10;
//             sum += digit * digit;
//             n = Math.floor(n / 10);
//         }
//         return sum;
//     }
//
//     let slow = n;
//     let fast = getNext(n);
//     while (fast !== 1 && slow !== fast) {
//         slow = getNext(slow);
//         fast = getNext(getNext(fast));
//     }
//     return fast === 1;
// }
