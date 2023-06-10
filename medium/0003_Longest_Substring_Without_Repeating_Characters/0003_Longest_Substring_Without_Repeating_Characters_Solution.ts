function lengthOfLongestSubstring(s: string): number {
    let charMap = new Map();
    let max = 0;
    let i = 0;
    let substr = 0;
    while (i < s.length) {
        // console.log(s[i]);
        if (charMap.has(s[i])) {
            if (max < substr) {
                max = substr;
            }
            i = charMap.get(s[i]) + 1;
            charMap.clear();
            substr = 0;
        }
        else {
            charMap.set(s[i], i);
            substr++;
            i ++;
        }
    }

    return Math.max(max, substr);
}

// BETTER SOLUTION
// function lengthOfLongestSubstring(s: string): number {
//     let charMap = new Map();
//     let max = 0;
//     let i = 0;
//     let substr = 0;
//     while (i < s.length) {
//         // console.log(s[i]);
//         if (charMap.has(s[i])) {
//             if (max < substr) {
//                 max = substr;
//             }
//             i = charMap.get(s[i]) + 1;
//             charMap.clear();
//             substr = 0;
//         }
//         else {
//             charMap.set(s[i], i);
//             substr++;
//             i ++;
//         }
//     }
//
//     return Math.max(max, substr);
// }
