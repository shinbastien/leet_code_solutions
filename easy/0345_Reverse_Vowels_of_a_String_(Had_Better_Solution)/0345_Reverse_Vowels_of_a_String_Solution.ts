function reverseVowels(s: string): string {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const strVowels = [];
    const indices = [];
    let strArr = s.split('');
    for (let i = 0; i < strArr.length; i++) {
        if (vowels.includes(strArr[i])) {
            strVowels.push(strArr[i]);
            indices.push(i);
        }
    }
    const vowelsLen = strVowels.length;
    const vowelMid = Math.floor(vowelsLen / 2);
    let temp = null;
    for (let i = 0; i < vowelMid; i++) {
        temp = strVowels[i];
        strVowels[i] = strVowels[vowelsLen - i - 1];
        strVowels[vowelsLen - i - 1] = temp;
    }
    for (let i = 0; i < indices.length; i++) {
        strArr[indices[i]] = strVowels[i];
    }
    return strArr.join('');
};

// BETTER SOLUTION
// function reverseVowels(s: string): string {
//     const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//     const strVowels = [];
//     const indices = [];
//     let strArr = s.split('');
//     for (let i = 0; i < strArr.length; i++) {
//         if (vowels.includes(strArr[i])) {
//             strVowels.push(strArr[i]);
//             indices.push(i);
//         }
//     }
//     const vowelsLen = strVowels.length;
//     const vowelMid = Math.floor(vowelsLen / 2);
//     let temp = null;
//     for (let i = 0; i < vowelMid; i++) {
//         temp = strVowels[i];
//         strVowels[i] = strVowels[vowelsLen - i - 1];
//         strVowels[vowelsLen - i - 1] = temp;
//     }
//     for (let i = 0; i < indices.length; i++) {
//         strArr[indices[i]] = strVowels[i];
//     }
//     return strArr.join('');
// };