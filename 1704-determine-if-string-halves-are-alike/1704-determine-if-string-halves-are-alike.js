/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const mid = s.length / 2;
    const str1 = s.slice(0, mid), str2 = s.slice(mid);
    
    function countVowels(str) {
        let count = 0;
        str = str.toLowerCase();
        for (const char of str) {
            if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") count++;
        }
        return count;
    }
    
    return countVowels(str1) === countVowels(str2);
};