function hammingWeight(n: number): number {
    var cnt = 0;

    for (var i=0; i<32; i++) {
        if ((n & 1) === 1) cnt +=1 ;
        n = n >> 1;
    }

    return cnt;
};