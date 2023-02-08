function reverseBits(n: number): number {
    var arr: string[] = Array.from(n.toString(2));
    var len = arr.length;
    for (var i=0; i<32-len; i++) {
        arr.unshift('0');
    }
    arr.reverse();
    return parseInt(arr.join(''), 2);
};

// Better Solution written in Java
//
// public class Solution {
//     public int reverseBits(int n) {
//     int rev = 0;
//
//     for (int i = 0; i < 32; i++) {
//     rev <<= 1;
//     rev |= (n & 1);
//     n >>= 1;
// }
//
// return rev;
// }
// }
//