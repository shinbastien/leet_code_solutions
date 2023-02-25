function isIsomorphic(s: string, t: string): boolean {
    var hash: {[key: string]: string}  = {};

    for (let i= 0; i<s.length; i++) {
        if (!hash[s[i]]) {
            hash[s[i]] = t[i];
        }
        else if (hash[s[i]] !== t[i]) {
            return false;
        }
    }
    if (new Set(Object.values(hash)).size !== Object.keys(hash).length) return false;
    return true;
};