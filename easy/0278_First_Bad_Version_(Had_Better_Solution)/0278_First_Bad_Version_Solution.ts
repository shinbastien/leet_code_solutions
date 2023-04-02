/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let upperBound = n;
        let lowerBound = 1;
        let result = new Map();
        if (n === 1) return 1;
        while (upperBound - lowerBound > 1) {
            const half = Math.floor((upperBound + lowerBound) /2)
            if (isBadVersion(half)) {
                result.set(half, true);
                upperBound = half;
            }

            else {
                result.set(half, false);
                lowerBound = half;
            }
        }
        return (result.get(upperBound) === result.get(lowerBound) ? lowerBound : upperBound);


    };
}

//Better Solution
// function binarySearch(n: number, isBadVersion: any): number {
//     let low = 1, high = n;
//     while (low < high) {
//         const mid = Math.floor((low + high) / 2);
//         if (isBadVersion(mid)) {
//             high = mid;
//         } else {
//             low = mid + 1;
//         }
//     }
//     return low;
// }
//
// function solution(isBadVersion: any) {
//     return function(n: number): number {
//         return binarySearch(n, isBadVersion);
//     };
// }