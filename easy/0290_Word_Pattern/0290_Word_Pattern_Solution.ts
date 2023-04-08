function wordPattern(pattern: string, s: string): boolean {
    const patterns = pattern.split("");
    const strings = s.split(" ");
    const patternMap = new Map();
    if (patterns.length !== strings.length) return false;
    if (new Set(patterns).size !== new Set(strings).size) return false;

    for (let i = 0; i < patterns.length; i++) {
        if (patternMap.has(patterns[i])) {
            if (patternMap.get(patterns[i]) !== strings[i]) {
                return false;
            }
        }
        else {
            patternMap.set(patterns[i], strings[i]);
        }
    }

    return true;
};