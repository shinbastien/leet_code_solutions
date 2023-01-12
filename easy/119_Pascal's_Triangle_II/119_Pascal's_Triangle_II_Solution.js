var getRow = function(rowIndex) {
    var res = [];
    var facs = [1];
    for (i=1;i<=rowIndex;i++) {
        facs.push(facs[i-1]*i);
        res.push(0);
    }
    for (r=0;r<=rowIndex/2;r++) {
        var val = facs[rowIndex] / facs[r] / facs[rowIndex-r];
        res.splice(r, 1, val);
        res.splice(rowIndex-r, 1, val);
    }
    return res;
};