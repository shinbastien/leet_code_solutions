function summaryRanges(nums: number[]): string[] {
    var start = 0;
    var temp = 0;
    var res: string[] = [];
    if (nums.length === 0) return [];
    for (let i=1; i < nums.length; i++) {
        var cur = nums[i];
        if (cur - nums[temp] === 1) {
            temp = i;
            continue;
        }
        else if (temp !== start) {
            res.push(`${nums[start]}->${nums[temp]}`);
        }
        else {
            res.push(`${nums[start]}`);
        }
        start = i;
        temp = i;
    }
    if (temp !== start) {
        res.push(`${nums[start]}->${nums[temp]}`);
    }
    else res.push(`${nums[start]}`);
    return res;

};