function isAnagram(s: string, t: string): boolean {
    const myMap1 = new Map<string, number>();
    const myMap2 = new Map<string, number>();
    if (s.length !== t.length) return false;
    for (let i=0; i < s.length; i++) {
        const currs = myMap1.get(s[i]);
        const currt = myMap2.get(t[i]);
        if (currs) {
            myMap1.set(s[i], currs + 1);
        }
        else {
            myMap1.set(s[i], 1);
        }
        if (currt) {
            myMap2.set(t[i], currt + 1);
        }
        else {
            myMap2.set(t[i], 1);
        }
    }
    for (const [key, value] of myMap1) {
        if (value !== myMap2.get(key)) return false;
    }
    return true;
};

// cleaner code
// function isAnagram(s: string, t: string): boolean {
//     if (s.length !== t.length) {
//         return false;
//     }
//     const counts1 = new Map<string, number>();
//     const counts2 = new Map<string, number>();
//     for (let i = 0; i < s.length; i++) {
//         counts1.set(s[i], (counts1.get(s[i]) || 0) + 1);
//         counts2.set(t[i], (counts2.get(t[i]) || 0) + 1);
//     }
//     for (const [key, value] of counts1) {
//         if (value !== counts2.get(key)) {
//             return false;
//         }
//     }
//     return true;

// better code
// function isAnagram(s: string, t: string): boolean {
//     if (s.length !== t.length) {
//         return false;
//     }
//     const counts = new Map<string, number>();
//     for (let i = 0; i < s.length; i++) {
//         counts.set(s[i], (counts.get(s[i]) || 0) + 1);
//         counts.set(t[i], (counts.get(t[i]) || 0) - 1);
//     }
//     for (const count of counts.values()) {
//         if (count !== 0) {
//             return false;
//         }
//     }
//     return true;
// }