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
// function reverseBits(n: number): number {
// 	var arr: string[] = Array.from(n.toString(2));
//     var len = arr.length;
//     for (var i=0; i<32-len; i++) {
//         arr.unshift('0');
//     }
//     arr.reverse();
//     return parseInt(arr.join(''), 2);
// };
//