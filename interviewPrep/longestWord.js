// https://kobra.io/#/e/-KsoMi_DiAyTGf4WtWK3

// const longestWord = (sentence) => {
//     // array from string
//     const words = sentence.split(' ');
//     // [ 'sdhci', 'sdojhjsd' 'kjsjk' ]
//     const length = words.length;
//     let longestWord = '';
//     for (let i = 0; i < length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }
//     return longestWord;
// };

// const longestWord = (sentence) => {
//     const longestWord = sentence.split(' ').reduce((longest, word) => {
//         if (word.length > longest.length) return word;
//         return longest;
//     }, '');
//     return longestWord;
// };


// sort & pop? .sort((a, b) => a - b);
const longestWord = (sentence) => {
    const sortedWords = sentence.split(' ').sort((a, b) => a.length < b.length);
    return sortedWords[0]
};



// // TEST SUITE
console.log(longestWord("Four score and twenty years ago ..."));
