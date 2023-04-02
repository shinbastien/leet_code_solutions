function missingNumber(nums: number[]): number {
    const len = nums.length;
    const sum = len * (len + 1) / 2;
    const arraySum = nums.reduce((prev, curr) => prev + curr, 0);

    return sum - arraySum;
}