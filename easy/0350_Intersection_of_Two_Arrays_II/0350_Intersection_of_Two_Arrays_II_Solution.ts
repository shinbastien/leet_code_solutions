function intersect(nums1: number[], nums2: number[]): number[] {
    const map1 = new Map();
    const map2 = new Map();
    const res = [];
    function setMap (map: Map<number, number>, e: number): void {
        if (map.has(e)) {
            map.set(e, map.get(e) + 1);
        }
        else map.set(e, 1);

    }
    nums1.forEach((e) => setMap(map1, e));
    nums2.forEach((e) => setMap(map2, e));


    map1.forEach((value, key, map) => {
        if (map2.has(key)) {
            for (let i = 0; i < Math.min(value, map2.get(key)); i++) {
                res.push(key);
            }
        }
    })

    return res;
};

// BETTER SOLUTION
// function intersect(nums1: number[], nums2: number[]): number[] {
//     const map1 = new Map();
//     const map2 = new Map();
//     const res = [];
//     function setMap (map: Map<number, number>, e: number): void {
//         if (map.has(e)) {
//             map.set(e, map.get(e) + 1);
//         }
//         else map.set(e, 1);
//
//     }
//     nums1.forEach((e) => setMap(map1, e));
//     nums2.forEach((e) => setMap(map2, e));
//
//
//     map1.forEach((value, key, map) => {
//         if (map2.has(key)) {
//             for (let i = 0; i < Math.min(value, map2.get(key)); i++) {
//                 res.push(key);
//             }
//         }
//     })
//
//     return res;
// };
