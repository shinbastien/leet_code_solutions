
// My Solution
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let curr = 0;
    let total = 0;
    while (total < nums.length) {
        if (nums[curr] === 0) {
            nums.splice(curr, 1);
            nums.push(0);
        }
        else {
            curr++;
        }
        total++;
    }
};

// Better Solution: Using two-pointer
// function moveZeroes(nums) {
//     let low = 0;
//     let high = low + 1;
//
//     while (high <= nums.length - 1) {
//         if (nums[low] !== 0) {
//             low++;
//             high++;
//         } else {
//             if (nums[high] !== 0) {
//                 [nums[low], nums[high]] = [nums[high], nums[low]];
//                 low++;
//             }
//             high++;
//         }
//     }
// };