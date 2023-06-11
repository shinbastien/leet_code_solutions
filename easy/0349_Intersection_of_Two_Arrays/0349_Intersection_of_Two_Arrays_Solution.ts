function intersection(nums1: number[], nums2: number[]): number[] {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const arr = Array.from(new Set(nums1.concat(nums2)));

    return arr.filter((e) => set1.has(e) && set2.has(e));


};

// BETTER SOLUTION
// function intersection(nums1: number[], nums2: number[]): number[] {
//     const set: Set<number> = new Set(nums1);
//
//     return nums2.filter(item => set.delete(item));
// };
