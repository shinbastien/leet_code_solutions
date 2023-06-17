function reverse(x: number): number {
    let sign = x < 0 ? -1 : 1;
    let num = x * sign;
    let arr = [];
    let count = 0;
    let res = 0;

    while (num > 0) {
        let r = num % 10;
        arr.push(r);
        num = Math.floor(num / 10);
    }
    while (arr.length > 0) {
        res += arr.pop() * Math.pow(10, count);
        count++;
    }

    return res * sign;
};
