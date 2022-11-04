/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const str = s.split("");
    const chars = [];
    const loc = [];
    
    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        if(char.toLowerCase() === 'a' ||
           char.toLowerCase() === 'e' ||
           char.toLowerCase() === 'i' ||
           char.toLowerCase() === 'o' ||
           char.toLowerCase() === 'u') {
            chars.push(char);
            loc.push(i);
        }
    }
    
    chars.reverse();
    
    for(let i = 0; i < loc.length; i++) {
        str[loc[i]] = chars[i];
    }
    
    return str.join("");
};