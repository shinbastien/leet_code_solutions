//MySolution
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var ms = [];
    var mx = [];
    var n = prices.length-1;
    var res = 0;
    for (i=0; i<prices.length; i++) {
        ms[i] = 0;
        mx[i] = 0;
    }
    ms[0] = prices[0];
    mx[n] = prices[n];
    for (i=1; i<n+1; i++) {
        if (ms[i-1] <= prices[i]) {
            ms[i]=ms[i-1];
        }
        else {
            ms[i] = prices[i];
        }

    }
    for (i=n-1; i>=0; i--) {
        if (mx[i+1] >= prices[i]) {
            mx[i] = mx[i+1];
        }
        else {
            mx[i] = prices[i];
        }

    }

    for (i=0; i<n; i++) {
        if (res < mx[i] - ms[i]) {
            res = mx[i] - ms[i];
        }
    }

    return res;
};