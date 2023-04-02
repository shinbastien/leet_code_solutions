function findK(n: number, k: number): number {
    if (n % k === 0) {
        return findK(n / k, k);
    }
    else return n
}

function isUgly(n: number): boolean {
    if (findK(findK(findK(n, 5), 3), 2) === 1) return true;
    else return false;
};